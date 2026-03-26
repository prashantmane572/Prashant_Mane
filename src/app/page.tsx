import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import Link from "next/link";
import { FadeIn } from "@/components/AnimatedCard";
import { ArrowRight, Database, LineChart, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <HeroSection />
        
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen">
          
          <MetricsSection />

          {/* Process / Value Prop Section with Video */}
          <section className="py-24 text-white relative overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              />
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <FadeIn>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block text-shadow-sm">My Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Transforming Raw Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-accent drop-shadow-none">Strategic Masterpieces</span></h2>
                <p className="text-xl text-white/90 max-w-2xl mb-12 leading-relaxed drop-shadow-md font-medium">
                  I don't just build dashboards. I engineer complete data pipelines that connect disparate systems (ERP, SQL, Excel) into a single source of truth, beautifully visualized for executive decision-making.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: <Database size={32} />, title: "1. Integration", desc: "Connecting SAP HANA, SQL & APIs." },
                  { icon: <Zap size={32} />, title: "2. Modeling", desc: "Structuring data with DAX & Power Query." },
                  { icon: <LineChart size={32} />, title: "3. Visualization", desc: "Interactive, fully dynamic Power BI reports." }
                ].map((step, i) => (
                  <FadeIn key={i} delay={0.2 * i} direction="up">
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-2xl hover:bg-slate-900/80 transition-all hover:-translate-y-1">
                      <div className="text-accent mb-6 bg-accent/20 border border-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white drop-shadow-sm">{step.title}</h3>
                      <p className="text-slate-200 font-medium">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          <ServicesSection />
          
          {/* Featured Projects Preview */}
          <div className="bg-slate-50 pt-12 pb-24 border-t border-slate-200">
             <div className="flex flex-col items-center mb-[-60px] relative z-20">
                <FadeIn>
                  <Link href="/projects" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    Explore Deep Case Studies <ArrowRight size={20} />
                  </Link>
                </FadeIn>
             </div>
             {/* We render the Projects section but it naturally shows the grid. */}
             <ProjectsSection />
          </div>

          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
