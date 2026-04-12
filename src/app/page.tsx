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
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <FadeIn>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">My Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforming Raw Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Strategic Masterpieces</span></h2>
                <p className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
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
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                      <div className="text-accent mb-6 bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          <ServicesSection />
          
          {/* Featured Projects Preview */}
          <div className="bg-slate-50 pt-12 pb-24 border-t border-slate-200">
             <ProjectsSection limit={2} />
          </div>

          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
