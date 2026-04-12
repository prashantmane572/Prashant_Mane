import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Download, Presentation, LayoutDashboard, Target, Zap } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!project) {
    notFound();
  }

  const toolsArray = Array.isArray(project.tools)
    ? project.tools
    : project.tools.split(',').map((t: string) => t.trim());

  const heroImage = project.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop';

  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col w-full bg-slate-50 selection:bg-primary/20">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10" />
            <img 
              src={heroImage} 
              alt="Project Background"
              className="w-full h-full object-cover blur-md scale-105 opacity-60"
            />
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-20">
            <Link href="/projects" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold tracking-wide mb-12 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 w-fit">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {toolsArray.map((tool: string, i: number) => (
                    <span key={i} className="px-4 py-1.5 bg-accent/20 text-accent-light text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20 backdrop-blur-md text-blue-200">
                      {tool}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                  {project.summary}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col gap-4">
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2 opacity-80">Project Links</h3>
                  
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-700/80 rounded-xl text-white transition-all group">
                      <div className="flex items-center gap-3 font-semibold"><Code2 size={18} className="text-slate-400 group-hover:text-white transition-colors" /> Source Code</div>
                      <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  )}
                  
                  {project.zipUrl && (
                    <a href={project.zipUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-blue-900/30 hover:bg-blue-800/50 rounded-xl text-white transition-all border border-blue-500/20 group">
                      <div className="flex items-center gap-3 font-semibold"><Download size={18} className="text-blue-400 group-hover:text-white transition-colors" /> Download ZIP</div>
                      <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  )}

                  <a href="#" className="flex items-center justify-between p-4 bg-primary hover:bg-accent rounded-xl text-white transition-all group shadow-lg shadow-primary/20">
                    <div className="flex items-center gap-3 font-semibold"><Presentation size={18} /> View Live Dashboard</div>
                    <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="relative z-30 -mt-20 pb-24 px-4 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Interactive Dashboard Window */}
              <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex items-center justify-center relative group">
                {/* Mac OS Window Header */}
                <div className="absolute top-0 w-full h-12 bg-slate-800 flex items-center px-6 gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="mx-auto text-xs font-medium text-slate-400 opacity-50 flex items-center gap-2"><LayoutDashboard size={14}/> Dashboard Preview</div>
                </div>
                
                <div className="w-full aspect-[16/10] bg-slate-100 mt-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${heroImage})`}}></div>
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <button className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-white hover:scale-105 transition-all">
                       <Presentation size={18} /> Launch Full Application
                     </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-100">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Target size={24} />
                  </span>
                  Case Study Breakdown
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p className="text-xl leading-relaxed text-slate-700 font-medium mb-10">
                    {project.summary}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-100">
                    {project.content ? (
                      <div className="whitespace-pre-wrap">{project.content}</div>
                    ) : (
                      <p className="italic text-slate-400">No extended case study content provided.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap size={20} className="text-amber-500" />
                    Impact & Outcomes
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 font-bold">1</div>
                      <p className="text-sm text-slate-600 font-medium mt-1">Consolidated 10+ manual pipelines into a single automated flow.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 font-bold">2</div>
                      <p className="text-sm text-slate-600 font-medium mt-1">Reduced executive reporting turnaround time by over 80%.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 font-bold">3</div>
                      <p className="text-sm text-slate-600 font-medium mt-1">Enabled real-time drill-down capabilities for branch-level visibility.</p>
                    </li>
                  </ul>
                </div>
                
                {/* Tech Stack Visualizer */}
                <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                  <h3 className="text-lg font-bold text-white mb-6">Execution Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolsArray.map((tool: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
