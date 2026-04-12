"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Loader2, X, AlertCircle, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  summary: string;
  tools: string;
  image: string | null;
  githubUrl: string | null;
  zipUrl: string | null;
  content: string | null;
  createdAt: string;
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [zipFile, setZipFile] = useState<File | null>(null);
  
  // Feedback State
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    tools: "",
    image: "",
    githubUrl: "",
    zipUrl: "",
    content: ""
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log("Fetching projects...");
      const res = await fetch("/api/projects");
      const data = await res.json();
      console.log("Projects fetched:", data);
      if (Array.isArray(data)) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const showFeedback = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      summary: project.summary,
      tools: project.tools,
      image: project.image || "",
      githubUrl: project.githubUrl || "",
      zipUrl: project.zipUrl || "",
      content: project.content || ""
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setZipFile(null);
    setFormData({ title: "", summary: "", tools: "", image: "", githubUrl: "", zipUrl: "", content: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const url = editingProject ? `/api/projects/${editingProject.id}` : "/api/projects";
    const method = editingProject ? "PATCH" : "POST";

    let finalZipUrl = formData.zipUrl;

    try {
      if (zipFile) {
        showFeedback("Uploading ZIP file...", "success");
        const uploadRes = await fetch(`/api/upload?filename=${encodeURIComponent(zipFile.name)}`, {
          method: "POST",
          body: zipFile,
        });
        if (!uploadRes.ok) {
           throw new Error("Failed to upload ZIP file. Ensure Vercel Blob is configured.");
        }
        const blobData = await uploadRes.json();
        finalZipUrl = blobData.url;
      }

      const payload = { ...formData, zipUrl: finalZipUrl };

      console.log(`Submitting ${method} request to ${url}...`);
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        showFeedback(editingProject ? "Project updated!" : "Project added!", "success");
        closeModal();
        fetchProjects();
      } else {
        const err = await res.json();
        showFeedback(err.error || "Something went wrong", "error");
      }
    } catch (error) {
      showFeedback((error as Error).message || "Failed to save project", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const initiateDelete = (id: string) => {
    console.log("Initiating delete for project:", id);
    setProjectToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    
    setIsSubmitting(true);
    try {
      console.log("Sending DELETE request for:", projectToDelete);
      const res = await fetch(`/api/projects/${projectToDelete}`, { method: "DELETE" });
      
      if (res.ok) {
        showFeedback("Project deleted successfully", "success");
        setIsDeleteModalOpen(false);
        setProjectToDelete(null);
        fetchProjects();
      } else {
        const err = await res.json();
        console.error("Delete failed:", err);
        showFeedback(err.error || "Failed to delete project", "error");
      }
    } catch (error) {
      console.error("Delete network error:", error);
      showFeedback("Network error while deleting", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="animate-spin text-primary" size={40} />
        <p className="text-slate-500 font-medium animate-pulse">Loading your projects...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Toast Notification */}
      {message && (
        <div className={`fixed top-24 right-8 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right duration-300 ${
          message.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {message.type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span className="font-medium">{message.text}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Project Management</h1>
          <p className="text-slate-500 mt-1">Add, update, or remove projects from your live portfolio.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/10 active:scale-95 translate-y-0 hover:-translate-y-1"
        >
          <Plus size={20} strokeWidth={3} />
          Add New Project
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Project Details</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Tech Stack</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-8 py-20 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-4 bg-slate-50 rounded-full">
                        <Plus size={32} className="opacity-20" />
                      </div>
                      <p className="font-medium">No projects added yet.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="group hover:bg-slate-50/80 transition-all">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        <div className="w-20 h-14 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-100 relative group-hover:shadow-md transition-shadow">
                          <img 
                            src={project.image || "https://placehold.co/300x200?text=No+Preview"} 
                            alt="" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/300x200?text=No+Preview";
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{project.title}</div>
                          <div className="text-sm text-slate-500 line-clamp-1 mt-0.5">{project.summary}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        {project.tools.split(',').map((tool, i) => (
                          <span key={i} className="text-[10px] uppercase font-bold px-2.5 py-1 bg-white text-slate-600 rounded-lg border border-slate-200 shadow-sm">
                            {tool.trim()}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => openEditModal(project)}
                          className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                          title="Edit Project"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => initiateDelete(project.id)}
                          className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                          title="Delete Project"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="px-10 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {editingProject ? "Update Project" : "Add New Project"}
                </h2>
                <p className="text-sm text-slate-500 font-medium">Fill in the project specifications below.</p>
              </div>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-900 hover:bg-slate-100 p-2 rounded-full transition-all">
                <X size={28} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-10 space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Title</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all" 
                    placeholder="e.g. Executive Sales Analytics Dashboard"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Business Summary</label>
                  <textarea 
                    required
                    rows={2}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all resize-none" 
                    placeholder="Briefly explain the problem this project solved..."
                    value={formData.summary}
                    onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technologies</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all" 
                      placeholder="Power BI, SQL, DAX"
                      value={formData.tools}
                      onChange={(e) => setFormData({...formData, tools: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Image Reference (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all" 
                      placeholder="Image URL"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Github Link (Optional)</label>
                    <input 
                      type="url" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all" 
                      placeholder="https://github.com/..."
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Zip File Upload (Optional)</label>
                    <input 
                      type="file" 
                      accept=".zip,.rar,.7z"
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 font-medium transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100" 
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setZipFile(e.target.files[0]);
                        }
                      }}
                    />
                    {editingProject?.zipUrl && (
                      <p className="mt-2 text-xs text-slate-500">Currently deployed: <a href={editingProject.zipUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download</a></p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all active:scale-95"
                >
                  Discard
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[1.5] px-8 py-4 bg-primary hover:bg-accent text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/10 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95 translate-y-0 hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={20} strokeWidth={3} />
                      {editingProject ? "Update Project" : "Launch Project"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-300 p-8 text-center">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 size={40} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Are you sure?</h2>
            <p className="text-slate-500 mb-8 font-medium">
              This will permanently delete the project database record. This action cannot be undone.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={confirmDelete}
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-red-900/10 flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Yes, Delete Project"}
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-full py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
