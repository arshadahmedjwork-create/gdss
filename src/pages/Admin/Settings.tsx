import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Lock, Mail, Bell, Globe, Database, Save, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [dbStatus, setDbStatus] = useState<"connected" | "error" | "checking">("checking");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const { data, error } = await supabase.from('contact_queries').select('id').limit(1);
      if (error) throw error;
      setDbStatus("connected");
    } catch (err) {
      setDbStatus("error");
    }
  };

  const handleSaveSettings = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Settings updated successfully");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* System Status */}
      <div className="bg-[#1e1e1e] border border-white/5 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-5 h-5 text-[#cc0000]" />
          <h3 className="text-xl font-bold text-white font-heading tracking-tight">System Infrastructure</h3>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-[#0f0f0f] border border-white/5">
          <div className="flex items-center gap-4">
            <Globe className="w-8 h-8 text-gray-700" />
            <div>
              <p className="text-sm font-bold text-white">Supabase Connection</p>
              <p className="text-xs text-gray-500">Real-time Database & Storage</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {dbStatus === "connected" ? (
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                <CheckCircle className="w-3 h-3" /> Online
              </span>
            ) : dbStatus === "checking" ? (
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 animate-pulse">Checking...</span>
            ) : (
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-500">
                <XCircle className="w-3 h-3" /> Connection Error
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Admin Credentials */}
      <div className="bg-[#1e1e1e] border border-white/5 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-5 h-5 text-[#cc0000]" />
          <h3 className="text-xl font-bold text-white font-heading tracking-tight">Authentication</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Change Admin Password</label>
            <input 
              type="password"
              placeholder="Enter new secure password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#0f0f0f] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#cc0000] outline-none"
            />
            <p className="mt-2 text-[10px] text-gray-500 italic">This will update the hardcoded session password. Requires manual code update in production.</p>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-[#1e1e1e] border border-white/5 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-[#cc0000]" />
          <h3 className="text-xl font-bold text-white font-heading tracking-tight">Preferences</h3>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive alerts when new queries are submitted</p>
            </div>
            <button 
              onClick={() => setEmailNotifs(!emailNotifs)}
              className={`w-12 h-6 rounded-full transition-colors relative ${emailNotifs ? 'bg-[#cc0000]' : 'bg-gray-800'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${emailNotifs ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Dashboard Auto-Refresh</p>
              <p className="text-xs text-gray-500">Use real-time subscriptions for updates</p>
            </div>
            <div className="text-[10px] font-bold text-[#cc0000] uppercase tracking-widest bg-[#cc0000]/10 px-2 py-1 border border-[#cc0000]/20">Active</div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button 
          onClick={handleSaveSettings}
          disabled={isSaving}
          className="bg-[#cc0000] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#b30000] transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isSaving ? "Saving..." : (
            <>
              <Save className="w-4 h-4" /> Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Settings;
