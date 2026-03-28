"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Inventory & Delivery Analytics Dashboard",
      summary: "End-to-end Power BI solution for real-time inventory tracking and delivery SLA monitoring.",
      tools: ["Power BI", "SQL Server", "DAX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sales & Operations Analytics",
      summary: "Comprehensive dashboard unifying ERP data (SAP HANA) to discover operational bottlenecks.",
      tools: ["SAP HANA", "Power Query", "Data Modeling"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn direction="left" className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Featured Projects
            </h3>
            <p className="text-slate-600 text-lg">
              Real-world examples of turning complex ERP databases into actionable executive insights.
            </p>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <Link 
              href="/projects" 
              className="group flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <span className="bg-primary/10 p-2 rounded-full group-hover:bg-accent/10 transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
              <AnimatedCard className="p-0 overflow-hidden group border-0 shadow-lg hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-800 rounded-full shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 relative bg-white">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <Link 
                    href={`/projects/${index}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Read Case Study
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
