import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle, 
  MessageCircle, 
  Trash2,
  X,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Queries = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "contact";
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuery, setSelectedQuery] = useState<any | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  const tabs = [
    { id: "contact", label: "Contact Queries", table: "contact_queries" },
    { id: "confidential", label: "Confidential Inquiries", table: "confidential_inquiries" },
    { id: "consultation", label: "Consultation Requests", table: "consultation_requests" },
    { id: "resolved", label: "Resolved Cases", table: null },
  ];

  useEffect(() => {
    fetchQueries();

    // Real-time subscription
    const channel = supabase
      .channel('queries-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_queries' }, fetchQueries)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'confidential_inquiries' }, fetchQueries)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'consultation_requests' }, fetchQueries)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [activeTab]);

  const fetchQueries = async () => {
    setLoading(true);
    let table = tabs.find(t => t.id === activeTab)?.table;
    
    try {
      let data: any[] = [];
      
      if (activeTab === "resolved") {
        const { data: d1 } = await supabase.from('contact_queries').select('*').eq('status', 'resolved');
        const { data: d2 } = await supabase.from('confidential_inquiries').select('*').eq('status', 'resolved');
        const { data: d3 } = await supabase.from('consultation_requests').select('*').eq('status', 'resolved');
        
        data = [
          ...(d1?.map(item => ({ ...item, table_name: 'contact_queries' })) || []),
          ...(d2?.map(item => ({ ...item, table_name: 'confidential_inquiries' })) || []),
          ...(d3?.map(item => ({ ...item, table_name: 'consultation_requests' })) || [])
        ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      } else if (table) {
        const { data: d } = await supabase.from(table).select('*').order('created_at', { ascending: false });
        data = d?.map(item => ({ ...item, table_name: table })) || [];
      }

      setQueries(data);
    } catch (err) {
      console.error("Error fetching queries:", err);
    } finally {
      setLoading(false);
    }
  };


  const filteredQueries = queries.filter(q => {
    const matchesSearch = q.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || q.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = async (id: string, status: string, reply: string | null = null) => {
    const table = selectedQuery?.table_name || tabs.find(t => t.id === activeTab)?.table;
    if (!table) return;
    
    try {
      const { error } = await supabase
        .from(table)
        .update({ status, admin_reply: reply })
        .eq('id', id);
      
      if (error) throw error;
      
      toast.success(`Query marked as ${status}`);
      setSelectedQuery(null);
      fetchQueries();
    } catch (err) {
      toast.error("Failed to update query");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    
    const table = selectedQuery?.table_name || tabs.find(t => t.id === activeTab)?.table;
    if (!table) return;

    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      toast.success("Query deleted");
      setSelectedQuery(null);
      fetchQueries();
    } catch (err) {
      toast.error("Failed to delete query");
    }
  };


  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-white/5 gap-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSearchParams({ tab: tab.id })}
            className={`pb-4 text-sm font-medium transition-all relative ${
              activeTab === tab.id ? "text-[#cc0000]" : "text-gray-500 hover:text-white"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cc0000]" />
            )}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1e1e1e] border border-white/5 text-white pl-10 pr-4 py-2.5 text-sm focus:border-[#cc0000] outline-none"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#1e1e1e] border border-white/5 text-white px-4 py-2.5 text-sm outline-none focus:border-[#cc0000]"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="in_progress">In Progress</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1e1e1e] border border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/2 text-gray-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4">Sender</th>
              <th className="px-6 py-4">Details</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              Array(5).fill(0).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td colSpan={5} className="px-6 py-8 bg-white/2"></td>
                </tr>
              ))
            ) : filteredQueries.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 text-sm">
                  No queries found in this category.
                </td>
              </tr>
            ) : (
              filteredQueries.map((query) => (
                <tr key={query.id} className="hover:bg-white/2 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-white">{query.full_name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-400">{query.email}</span>
                    </div>
                    {query.phone && (
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-400">{query.phone}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-gray-300 line-clamp-1 max-w-xs">
                      {query.message || query.description || query.inquiry_details || "No content"}
                    </p>
                    {query.inquiry_type || query.investigation_type || query.service_type ? (
                      <span className="inline-block mt-2 text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 border border-white/5 uppercase tracking-tighter">
                        {query.inquiry_type || query.investigation_type || query.service_type}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-400">
                        {new Date(query.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-tighter ${
                      query.status === 'pending' ? 'bg-amber-500/10 text-amber-500' :
                      query.status === 'resolved' ? 'bg-emerald-500/10 text-emerald-500' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {query.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => { setSelectedQuery(query); setReplyText(query.admin_reply || ""); }}
                      className="text-xs bg-white/5 hover:bg-[#cc0000]/10 hover:text-[#cc0000] text-gray-400 px-3 py-1.5 transition-colors border border-white/5 font-semibold uppercase tracking-widest"
                    >
                      View & Reply
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Query Detail Drawer */}
      <AnimatePresence>
        {selectedQuery && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedQuery(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-[#1a1a1a] border-l border-white/5 z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Query Details</h3>
                  <button onClick={() => setSelectedQuery(null)} className="p-2 hover:bg-white/5 rounded text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Sender Info */}
                  <div className="bg-[#1e1e1e] border border-white/5 p-6">
                    <p className="text-[10px] text-[#cc0000] uppercase font-bold tracking-widest mb-4">Sender Information</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Full Name</p>
                        <p className="text-sm font-semibold">{selectedQuery.full_name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Email</p>
                        <p className="text-sm font-semibold">{selectedQuery.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Phone</p>
                        <p className="text-sm font-semibold">{selectedQuery.phone || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Submitted On</p>
                        <p className="text-sm font-semibold">{new Date(selectedQuery.created_at).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="bg-[#1e1e1e] border border-white/5 p-6">
                    <p className="text-[10px] text-[#cc0000] uppercase font-bold tracking-widest mb-4">Inquiry Content</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Subject / Type</p>
                        <p className="text-sm font-semibold text-white">
                          {selectedQuery.inquiry_type || selectedQuery.investigation_type || selectedQuery.service_type || "General Inquiry"}
                        </p>
                      </div>
                      {selectedQuery.subject_name && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Subject Name</p>
                          <p className="text-sm font-semibold">{selectedQuery.subject_name}</p>
                        </div>
                      )}
                      {selectedQuery.location && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Location</p>
                          <p className="text-sm font-semibold">{selectedQuery.location}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Message</p>
                        <div className="mt-2 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap bg-[#0f0f0f] p-4 border border-white/5">
                          {selectedQuery.message || selectedQuery.description || selectedQuery.inquiry_details}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Admin Reply */}
                  <div className="bg-[#1e1e1e] border border-white/5 p-6">
                    <p className="text-[10px] text-[#cc0000] uppercase font-bold tracking-widest mb-4">Admin Action</p>
                    <div className="space-y-4">
                      <textarea
                        rows={6}
                        placeholder="Type your reply here..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full bg-[#0f0f0f] border border-white/10 text-white p-4 text-sm focus:border-[#cc0000] outline-none"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdateStatus(selectedQuery.id, 'resolved', replyText)}
                          className="flex-1 bg-[#cc0000] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors"
                        >
                          Send Reply & Resolve
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(selectedQuery.id, 'resolved')}
                          className="flex-1 bg-white/5 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/10"
                        >
                          Mark as Resolved
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(selectedQuery.id)}
                    className="w-full border border-[#cc0000]/30 text-[#cc0000] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#cc0000]/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" /> Delete Entry
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Queries;
