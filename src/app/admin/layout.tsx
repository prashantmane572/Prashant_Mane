import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, LogOut, FileText, Briefcase, Settings, MessageSquare } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col z-20">
        <div className="p-6 border-b border-slate-100">
          <Link href="/admin" className="font-bold text-xl text-primary tracking-tight">
            Prashant<span className="text-accent">.</span>Admin
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium transition-colors">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors">
            <Briefcase size={20} />
            Projects
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors cursor-not-allowed opacity-50">
            <FileText size={20} />
            Blogs (Soon)
          </Link>
          <Link href="/admin/inquiries" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors cursor-not-allowed opacity-50">
            <MessageSquare size={20} />
            Inquiries (Soon)
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors cursor-not-allowed opacity-50">
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl font-medium transition-colors">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Dashboard Overview
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full">System Online</span>
          </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
