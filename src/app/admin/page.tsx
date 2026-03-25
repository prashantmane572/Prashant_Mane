export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-2">Total Views</h3>
          <div className="text-3xl font-bold text-slate-900">4,285</div>
          <div className="mt-2 text-sm text-green-600 font-medium">↑ 12% from last month</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-2">New Inquiries</h3>
          <div className="text-3xl font-bold text-slate-900">14</div>
          <div className="mt-2 text-sm text-green-600 font-medium">↑ 5 since yesterday</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-2">Active Projects</h3>
          <div className="text-3xl font-bold text-slate-900">3</div>
          <div className="mt-2 text-sm text-slate-400 font-medium">Synced with portfolio</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-2">Database Status</h3>
          <div className="text-xl font-bold text-green-600">Connected</div>
          <div className="mt-2 text-sm text-slate-400 font-medium">SQLite via Prisma</div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Inquiries</h2>
          <div className="text-slate-500 text-sm text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            No inquiries yet. When users contact you, they will appear here.
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-colors text-sm cursor-not-allowed">
              + Post New Blog (Soon)
            </button>
            <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-colors text-sm cursor-not-allowed">
              + Add Project (Soon)
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
