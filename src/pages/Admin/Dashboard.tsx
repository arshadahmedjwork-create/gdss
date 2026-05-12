import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    newToday: 0
  });
  const [recentQueries, setRecentQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentQueries();

    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'contact_queries' },
        () => { fetchStats(); fetchRecentQueries(); }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'confidential_inquiries' },
        () => { fetchStats(); fetchRecentQueries(); }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'consultation_requests' },
        () => { fetchStats(); fetchRecentQueries(); }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchStats = async () => {
    try {
      const { count: contactCount } = await supabase.from('contact_queries').select('*', { count: 'exact', head: true });
      const { count: confidentialCount } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true });
      const { count: consultationCount } = await supabase.from('consultation_requests').select('*', { count: 'exact', head: true });
      
      const { count: pendingContact } = await supabase.from('contact_queries').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      const { count: pendingConfidential } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      const { count: pendingConsultation } = await supabase.from('consultation_requests').select('*', { count: 'exact', head: true }).eq('status', 'pending');

      const { count: resolvedContact } = await supabase.from('contact_queries').select('*', { count: 'exact', head: true }).eq('status', 'resolved');
      const { count: resolvedConfidential } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'resolved');
      const { count: resolvedConsultation } = await supabase.from('consultation_requests').select('*', { count: 'exact', head: true }).eq('status', 'resolved');

      const today = new Date();
      today.setHours(0,0,0,0);
      const { count: todayContact } = await supabase.from('contact_queries').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString());
      const { count: todayConfidential } = await supabase.from('confidential_inquiries').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString());
      const { count: todayConsultation } = await supabase.from('consultation_requests').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString());

      setStats({
        total: (contactCount || 0) + (confidentialCount || 0) + (consultationCount || 0),
        pending: (pendingContact || 0) + (pendingConfidential || 0) + (pendingConsultation || 0),
        resolved: (resolvedContact || 0) + (resolvedConfidential || 0) + (resolvedConsultation || 0),
        newToday: (todayContact || 0) + (todayConfidential || 0) + (todayConsultation || 0)
      });

    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchRecentQueries = async () => {
    try {
      const { data: contacts } = await supabase.from('contact_queries').select('*').order('created_at', { ascending: false }).limit(5);
      const { data: confidentials } = await supabase.from('confidential_inquiries').select('*').order('created_at', { ascending: false }).limit(5);
      const { data: consultations } = await supabase.from('consultation_requests').select('*').order('created_at', { ascending: false }).limit(5);
      
      const combined = [
        ...(contacts?.map(c => ({ ...c, type: 'Contact' })) || []),
        ...(confidentials?.map(c => ({ ...c, type: 'Confidential' })) || []),
        ...(consultations?.map(c => ({ ...c, type: 'Consultation' })) || [])
      ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 8);

      setRecentQueries(combined);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recent queries:", error);
    }
  };


  const statCards = [
    { label: "Total Queries", value: stats.total, icon: Users, color: "#cc0000" },
    { label: "Pending", value: stats.pending, icon: Clock, color: "#f59e0b" },
    { label: "Resolved", value: stats.resolved, icon: CheckCircle, color: "#10b981" },
    { label: "New Today", value: stats.newToday, icon: TrendingUp, color: "#3b82f6" },
  ];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#1e1e1e] border border-white/5 p-6 hover:translate-y-[-4px] transition-all cursor-default relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cc0000] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <stat.icon className="w-5 h-5 text-[#cc0000]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Submissions Table */}
      <div className="bg-[#1e1e1e] border border-white/5 rounded-none overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Recent Submissions</h3>
          <button className="text-xs text-[#cc0000] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider">
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/2 text-gray-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={5} className="px-6 py-4 bg-white/2 h-12"></td>
                  </tr>
                ))
              ) : recentQueries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 text-sm">
                    No submissions found.
                  </td>
                </tr>
              ) : (
                recentQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-white">{query.full_name}</p>
                      <p className="text-xs text-gray-500">{query.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 ${
                        query.type === 'Confidential' ? 'bg-[#cc0000]/10 text-[#cc0000]' : 
                        query.type === 'Consultation' ? 'bg-emerald-500/10 text-emerald-500' :
                        'bg-blue-500/10 text-blue-400'
                      }`}>
                        {query.type}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(query.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-tighter font-bold ${
                        query.status === 'pending' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                      }`}>
                        {query.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 ml-auto" />
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
