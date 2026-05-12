import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  ShieldAlert, 
  CalendarClock, 
  CheckCircle2, 
  Bell, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import gdssLogo from "@/assets/gdss-logo.png";

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const AdminLayout = ({ children, onLogout }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gdss_admin_auth");
    onLogout();
    navigate("/admin/login");
  };

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Contact Queries", icon: MessageSquare, path: "/admin/queries?tab=contact" },
    { label: "Confidential Inquiries", icon: ShieldAlert, path: "/admin/queries?tab=confidential" },
    { label: "Consultation Requests", icon: CalendarClock, path: "/admin/queries?tab=consultation" },
    { label: "Resolved Cases", icon: CheckCircle2, path: "/admin/queries?tab=resolved" },
    { label: "Notifications", icon: Bell, path: "/admin/notifications" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const getPageTitle = () => {
    const item = menuItems.find(m => m.path === location.pathname + location.search);
    if (item) return item.label;
    if (location.pathname.includes("queries")) return "Queries Management";
    return "Admin Dashboard";
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-[#1a1a1a] border-r border-white/5 flex flex-col z-50`}
      >
        <div className="p-6 flex items-center justify-between min-h-[80px]">
          {sidebarOpen ? (
            <img 
              src={gdssLogo} 
              alt="GDSS Investigations" 
              style={{ width: '140px', objectFit: 'contain' }} 
            />
          ) : (
            <img 
              src={gdssLogo} 
              alt="GDSS" 
              style={{ width: '40px', objectFit: 'contain' }} 
              className="mx-auto"
            />
          )}
        </div>



        <nav className="flex-1 mt-6">
          {menuItems.map((item) => {
            const isActive = location.pathname + location.search === item.path || 
                           (item.path.includes("queries") && location.pathname === "/admin/queries" && item.path.includes(new URLSearchParams(location.search).get("tab") || ""));
            
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-4 px-6 py-3 transition-colors ${
                  isActive 
                    ? "bg-[#cc0000]/10 text-[#cc0000] border-r-2 border-[#cc0000]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-4 text-gray-400 hover:bg-white/5 hover:text-[#cc0000] transition-colors mt-auto border-t border-white/5"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-[#1a1a1a] border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 hover:bg-white/5 rounded transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="text-xl font-bold text-white font-heading tracking-tight">{getPageTitle()}</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer group">
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#cc0000] rounded-full"></span>
            </div>
            <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-white">GDSS Admin</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Superuser</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10">
                <span className="text-xs font-bold">AD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
