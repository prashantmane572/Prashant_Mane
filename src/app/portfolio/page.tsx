import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FadeIn } from "@/components/AnimatedCard";
import { Database, FileSpreadsheet, LayoutDashboard, Share2 } from "lucide-react";

export const metadata = {
  title: "Portfolio | Prashant Mane",
  description: "Detailed breakdown of BI skills, data tools, and methodologies.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen">
          
          <div className="container mx-auto px-4 max-w-6xl py-16 pb-8">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                An in-depth look at the technologies, languages, and platforms I use to transform raw ERP data into actionable, beautifully crafted business intelligence dashboards.
              </p>
            </FadeIn>
          </div>

          <SkillsSection />

          {/* Deep Content: Workflow Process */}
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Animation Video */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/7947452/7947452-hd_1920_1080_30fps.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
              <FadeIn className="text-center mb-16">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Methodology</span>
                <h2 className="text-3xl md:text-5xl font-bold">The End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">BI Lifecycle</span></h2>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-12">
                  <FadeIn delay={0.1} direction="left" className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Database size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">1. Extraction & Integration</h3>
                      <p className="text-slate-400 leading-relaxed">Connecting safely to source systems including SAP HANA, Microsoft SQL Server, and legacy Excel files. I write optimized SQL queries to extract only the necessary fact and dimension tables, ensuring lightweight data refreshes.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.2} direction="left" className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <FileSpreadsheet size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">2. Transformation (ETL)</h3>
                      <p className="text-slate-400 leading-relaxed">Utilizing Power Query (M Language) to clean, pivot, and merge data. I establish robust star-schema data models that guarantee high performance and accurate DAX measure calculations over millions of rows.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.3} direction="left" className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <LayoutDashboard size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">3. DAX & Visualization</h3>
                      <p className="text-slate-400 leading-relaxed">Writing complex Data Analysis Expressions (DAX) for Time Intelligence and YTD metrics. The data is then mapped to intuitive, interactive visual elements designed with UI/UX best practices in mind.</p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4} direction="left" className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Share2 size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">4. Deployment & Security</h3>
                      <p className="text-slate-400 leading-relaxed">Publishing assets to the Power BI Service, scheduling automated refreshes via Power BI Gateways, and actively managing Row-Level Security (RLS) to restrict regional data access per user.</p>
                    </div>
                  </FadeIn>
                </div>
                
                <FadeIn delay={0.3} direction="right" className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  {/* Dashboard Graphic Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/90 mix-blend-multiply z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Data Architecture" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
                     <div className="glass-card p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                        <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                        <div className="text-blue-200">Data Accuracy Guarantee</div>
                     </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Certifications Block */}
          <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Continuous Learning & Certifications</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">Staying ahead of the curve in a rapidly evolving data landscape requires constant upskilling.</p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1} direction="up" className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/30 transition-colors group">
                  <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Microsoft Certified: Data Analyst Associate (PL-300)</h3>
                  <p className="text-slate-600 leading-relaxed">Validates deep expertise in modeling data, creating visual reports, and securely managing Power BI workspaces and assets for enterprise organizations.</p>
                </FadeIn>

                <FadeIn delay={0.2} direction="up" className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-500/30 transition-colors group">
                  <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP" className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">SAP HANA Data Modeling</h3>
                  <p className="text-slate-600 leading-relaxed">Advanced workflows for constructing real-time data integrations, Calculation Views, and connecting operational SAP systems directly to modern BI frontends.</p>
                </FadeIn>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
