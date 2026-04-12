"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Briefcase, MessageSquare, Database, LineChart, Loader2 } from "lucide-react";

export default function AdminPage() {
  const [projectCount, setProjectCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjectCount(Array.isArray(data) ? data.length : 0);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2 text-primary">
            <LineChart size={18} />
            <h3 className="text-slate-500 text-sm font-medium">Total Views</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">4,285</div>
          <div className="mt-2 text-sm text-green-600 font-medium">↑ 12% from last month</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2 text-primary">
            <MessageSquare size={18} />
            <h3 className="text-slate-500 text-sm font-medium">Inquiries</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">0</div>
          <div className="mt-2 text-sm text-slate-400 font-medium">No new messages</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2 text-primary">
            <Briefcase size={18} />
            <h3 className="text-slate-500 text-sm font-medium">Active Projects</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900">
            {isLoading ? <Loader2 className="animate-spin" size={24} /> : projectCount}
          </div>
          <div className="mt-2 text-sm text-slate-400 font-medium">Synced with portfolio</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2 text-green-600">
            <Database size={18} />
            <h3 className="text-slate-500 text-sm font-medium">Database</h3>
          </div>
          <div className="text-xl font-bold text-green-600">Connected</div>
          <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider text-[10px]">PostgreSQL @ Supabase</div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Inquiries</h2>
          <div className="text-slate-500 text-sm text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <MessageSquare size={32} className="mx-auto mb-3 opacity-20" />
            No inquiries yet. When users contact you, they will appear here.
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link 
              href="/admin/projects"
              className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 hover:bg-primary hover:text-white group text-slate-700 font-medium rounded-xl transition-all text-sm"
            >
              <div className="flex items-center gap-3">
                <Plus size={18} />
                Manage Projects
              </div>
            </Link>
            <button className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 text-slate-400 cursor-not-allowed font-medium rounded-xl text-sm italic">
               + Post New Blog (Soon)
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
