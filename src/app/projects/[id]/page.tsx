import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Mock data. In a real app this would come from Prisma DB based on the ID.
const mockProjects = [
  {
    title: "Inventory & Delivery Analytics Dashboard",
    summary: "End-to-end Power BI solution for real-time inventory tracking and delivery SLA monitoring.",
    content: "This project addresses the critical need for supply chain visibility. By integrating directly with enterprise ERP data via SQL Server, this dashboard provides real-time inventory depletion rates, delivery time SLA adherence, and geographical distribution of bottlenecks. The solution reduced reporting time by 20% and improved on-time delivery by 15%.",
    tools: ["Power BI", "SQL Server", "DAX", "Power Query"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGZlZG..." // Sample placeholder
  },
  {
    title: "Sales & Operations Analytics",
    summary: "Comprehensive dashboard unifying ERP data (SAP HANA) to discover operational bottlenecks.",
    content: "Unifying disparate data sources across regional operations, this dashboard serves as the executive summary for C-level stakeholders. Connecting directly to SAP HANA, it provides live feeds of regional P&L, store performace, and operations efficiency metrics.",
    tools: ["SAP HANA", "Power Query", "Data Modeling", "Excel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    embedUrl: "https://app.powerbi.com/view?r=placeholder" // Sample placeholder
  }
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const projectIndex = parseInt(resolvedParams.id, 10);
  const project = mockProjects[projectIndex] || mockProjects[0];

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
            {project.tools.map((tool, i) => (
              <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Embed Section */}
        <section className="bg-slate-900 py-16 px-4 border-y border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Live Dashboard Viewer</h2>
              <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                Open in Power BI <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center relative">
              {/* In a real implementation, you would use an iframe here:
                  <iframe title="Report Section" src={project.embedUrl} frameBorder="0" allowFullScreen="true" className="w-full h-full"></iframe>
              */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url(${project.image})`}}></div>
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
