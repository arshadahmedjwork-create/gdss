import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  ArrowRight,
  AlertTriangle,
  Tag
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    emergency: 0
  });
  const [recentQueries, setRecentQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentQueries();

    // Set up real-time subscription for CRM
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'confidential_inquiries' },
        () => { fetchStats(); fetchRecentQueries(); }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchStats = async () => {
    try {
      const { count: total } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true });
      const { count: pending } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      const { count: resolved } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'resolved');
      const { count: emergency } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).or('service_required.eq.Insurance Fraud,service_required.eq.Corporate BGV');

      setStats({
        total: total || 0,
        pending: pending || 0,
        resolved: resolved || 0,
        emergency: emergency || 0
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchRecentQueries = async () => {
    try {
      const { data: confidentials } = await supabase.from('confidential_inquiries').select('*').order('created_at', { ascending: false }).limit(10);
      
      setRecentQueries(confidentials || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recent queries:", error);
    }
  };

  const getPriorityFlag = (service: string) => {
    if (service === "Insurance Fraud") return <span className="flex items-center gap-1 text-red-500 bg-red-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold"><AlertTriangle className="h-3 w-3" /> Emergency</span>;
    if (service === "Corporate BGV") return <span className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold"><Tag className="h-3 w-3" /> High Priority</span>;
    if (service === "Matrimonial Verification") return <span className="flex items-center gap-1 text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold"><Tag className="h-3 w-3" /> Sensitive</span>;
    return <span className="flex items-center gap-1 text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold"><Tag className="h-3 w-3" /> Standard</span>;
  };

  const statCards = [
    { label: "Total Investigations", value: stats.total, icon: Users, color: "text-primary" },
    { label: "Pending Review", value: stats.pending, icon: Clock, color: "text-amber-500" },
    { label: "Resolved Cases", value: stats.resolved, icon: CheckCircle, color: "text-emerald-500" },
    { label: "High Priority / Emergency", value: stats.emergency, icon: AlertTriangle, color: "text-red-500" },
  ];

  return (
    <div className="space-y-8">
      {/* CRM Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Lead Management CRM</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage confidential inquiries, assign investigators, and track case priorities.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-6 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
              </div>
              <div className="p-3 bg-subtle rounded-sm border border-border">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-card border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center bg-subtle/50">
          <h3 className="text-lg font-bold text-foreground">Active Intelligence Leads</h3>
          <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 font-bold uppercase tracking-wider transition-colors">
            View All Cases <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-subtle text-muted-foreground text-[10px] uppercase tracking-wider font-bold border-b border-border">
                <th className="px-6 py-4">Client Details</th>
                <th className="px-6 py-4">Investigation Type</th>
                <th className="px-6 py-4">Priority Flag</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Callback Schedule</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={6} className="px-6 py-4 bg-subtle/30 h-16"></td>
                  </tr>
                ))
              ) : recentQueries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground text-sm font-medium">
                    No active intelligence leads found.
                  </td>
                </tr>
              ) : (
                recentQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-subtle/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-foreground">{query.full_name}</p>
                      <div className="flex flex-col gap-0.5 mt-1">
                        <span className="text-xs text-muted-foreground">{query.email}</span>
                        <span className="text-xs text-muted-foreground font-mono">{query.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[11px] uppercase tracking-widest font-bold text-foreground">
                        {query.service_required || 'General Inquiry'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getPriorityFlag(query.service_required)}
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        className={`text-[10px] px-2 py-1 uppercase tracking-tighter font-bold border-none outline-none cursor-pointer ${
                          query.status === 'pending' ? 'bg-amber-500/10 text-amber-600' : 
                          query.status === 'in_progress' ? 'bg-blue-500/10 text-blue-600' :
                          'bg-emerald-500/10 text-emerald-600'
                        }`}
                        defaultValue={query.status}
                      >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-xs text-muted-foreground font-medium">
                      {query.preferred_callback_time || 'ASAP'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:text-primary/80 transition-colors text-xs font-bold uppercase tracking-wider">
                        Manage Case
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
