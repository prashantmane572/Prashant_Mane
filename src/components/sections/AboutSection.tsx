"use client";

import { Download, GraduationCap, MapPin, Target } from "lucide-react";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

export function AboutSection() {
  const experiences = [
    {
      role: "Merchandiser",
      period: "Early Career",
      desc: "Managed retail inventory operations, tracking SKUs and forecasting demands."
    },
    {
      role: "Retail Analyst",
      period: "Mid Career",
      desc: "Transitioned to pure analytics. Specialized in store performance metrics and regional sales dashboards."
    },
    {
      role: "Business Analyst",
      period: "Transition",
      desc: "Bridged the gap between business ops and IT, working heavily with SAP B1 data structures."
    },
    {
      role: "BI Consultant",
      period: "Current",
      desc: "Architecting end-to-end data models and delivering premium Power BI dashboards."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <FadeIn direction="right" className="flex-1 w-full order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              From Operations to Intelligence
            </h3>
            
            <div className="text-slate-600 space-y-4 mb-8 text-lg">
              <p>
                My analytics journey didn't start in a computer science lab—it started on the warehouse floor. With a foundation in retail operations and merchandising, I uniquely understand the real-world business problems that data needs to solve.
              </p>
              <p>
                As a Power BI Developer and SQL Analyst, I leverage my 8+ years of cross-domain experience to build data models that don't just look pretty, but actually drive 15%+ improvements in delivery SLAs and reporting performance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-primary transition-colors shadow-sm">
                <Download size={18} /> Download Resume
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition-colors">
                <Target size={18} /> Let's Connect
              </a>
            </div>

            <div className="flex gap-6 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-slate-400" size={20} />
                <span className="text-slate-700 font-medium">Pune, India</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-slate-400" size={20} />
                <span className="text-slate-700 font-medium">B.Sc. In Computing</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3} className="flex-1 w-full order-1 lg:order-2">
            <AnimatedCard className="bg-white border-0 shadow-xl p-8 lg:p-10 relative">
              <h4 className="font-bold text-xl text-slate-900 mb-8 pb-4 border-b border-slate-100 uppercase tracking-widest text-center">
                Career Timeline
              </h4>
              
              <div className="relative pl-6 space-y-10 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-blue-500 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[-24px] md:static" />
                    
                    <div className="w-full md:w-[calc(50%-2rem)] md:p-4 rounded-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-lg text-slate-900">{exp.role}</div>
                        <div className="text-sm font-semibold text-accent/80 italic">{exp.period}</div>
                      </div>
                      <div className="text-slate-600 leading-relaxed text-sm">
                        {exp.desc}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
              
            </AnimatedCard>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
