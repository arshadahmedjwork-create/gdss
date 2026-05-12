import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Bell, MessageSquare, ShieldAlert, CalendarClock, Trash2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();

    const channel = supabase
      .channel('notif-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public' }, () => fetchNotifications())
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data: contacts } = await supabase.from('contact_queries').select('*').eq('status', 'pending').order('created_at', { ascending: false });
      const { data: confidentials } = await supabase.from('confidential_inquiries').select('*').eq('status', 'pending').order('created_at', { ascending: false });
      const { data: consultations } = await supabase.from('consultation_requests').select('*').eq('status', 'pending').order('created_at', { ascending: false });
      
      const all = [
        ...(contacts?.map(n => ({ ...n, category: 'Contact', icon: MessageSquare, tab: 'contact' })) || []),
        ...(confidentials?.map(n => ({ ...n, category: 'Confidential', icon: ShieldAlert, tab: 'confidential' })) || []),
        ...(consultations?.map(n => ({ ...n, category: 'Consultation', icon: CalendarClock, tab: 'consultation' })) || [])
      ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setNotifications(all);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    // Logic to mark all as seen (could be a local state or a DB column if we had one)
    setNotifications([]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white font-heading tracking-tight flex items-center gap-3">
          <Bell className="w-6 h-6 text-[#cc0000]" />
          Recent Alerts
        </h3>
        {notifications.length > 0 && (
          <button 
            onClick={clearAll}
            className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors font-semibold"
          >
            Clear Notifications
          </button>
        )}
      </div>

      <div className="space-y-4">
        {loading ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-24 bg-[#1e1e1e] border border-white/5 animate-pulse"></div>
          ))
        ) : notifications.length === 0 ? (
          <div className="bg-[#1e1e1e] border border-white/5 p-12 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-500/20 mx-auto mb-4" />
            <p className="text-gray-500 text-sm">All caught up! No new pending queries.</p>
          </div>
        ) : (
          notifications.map((notif, i) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#1e1e1e] border border-white/5 p-5 hover:border-[#cc0000]/30 transition-all flex items-start gap-5 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cc0000] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                <notif.icon className="w-5 h-5 text-[#cc0000]" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white font-heading tracking-tight">New {notif.category} Query</h4>
                  <span className="text-[10px] text-gray-500 font-mono">
                    {new Date(notif.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  <span className="text-white font-semibold">{notif.full_name}</span> submitted a new inquiry regarding <span className="text-white">
                    {notif.inquiry_type || notif.investigation_type || notif.service_type || "Investigation"}
                  </span>
                </p>
                <div className="flex gap-4">
                  <Link 
                    to={`/admin/queries?tab=${notif.tab}`}
                    className="text-[10px] text-[#cc0000] font-bold uppercase tracking-widest hover:underline"
                  >
                    View Details
                  </Link>
                  <button className="text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:text-gray-400">
                    Mark as Seen
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
