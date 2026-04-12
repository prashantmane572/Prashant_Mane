import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col w-full pt-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium mb-8">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {toolsArray.map((tool: string, i: number) => (
              <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Embed Section */}
        <section className="bg-slate-900 py-16 px-4 border-y border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-white">Live Dashboard Viewer</h2>
              <div className="flex flex-wrap items-center gap-6">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                )}
                {project.zipUrl && (
                  <a href={project.zipUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium">
                    Download ZIP <ExternalLink size={16} />
                  </a>
                )}
                <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  Open in Power BI <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center relative">
              {/* In a real implementation, you would use an iframe here:
                  <iframe title="Report Section" src={project.embedUrl} frameBorder="0" allowFullScreen="true" className="w-full h-full"></iframe>
              */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url(${project.image || 'https://placehold.co/1200x800?text=No+Preview'})`}}></div>
              <div className="text-center relative z-10 z">
                <div className="text-slate-400 mb-2 font-medium">Interactive Embed Placeholder</div>
                <div className="text-slate-500 text-sm max-w-sm mx-auto">This iframe container connects securely to Power BI Service via token authentication or direct embed links.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Case Study</h2>
            <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="text-xl text-slate-700 mb-8 border-l-4 border-primary pl-6 py-2">
                {project.summary}
              </p>
              <p>
                {project.content}
              </p>
              <h3 className="text-xl font-bold text-slate-800 mt-12 mb-4">Business Impact & ROI</h3>
              <ul>
                <li>Consolidated 5+ manual Excel reports into a single automated pipeline.</li>
                <li>Reduced weekly executive reporting time by 20 hours.</li>
                <li>Implemented Row-Level Security (RLS) across 4 regional branches.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
