"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

interface Project {
  id?: string;
  title: string;
  summary: string;
  tools: string | string[];
  image: string;
}

export function ProjectsSection({ limit, showViewAll = true }: { limit?: number, showViewAll?: boolean }) {
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDynamicProjects(data);
        }
      })
      .catch(err => console.error("Failed to load projects:", err))
      .finally(() => setIsLoading(false));
  }, []);

  let allProjects = [...dynamicProjects];
  if (limit) {
    allProjects = allProjects.slice(0, limit);
  }

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
          
          {showViewAll && (
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
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {allProjects.map((project, index) => {
              const toolsArray = Array.isArray(project.tools) 
                ? project.tools 
                : project.tools.split(',').map(t => t.trim());

              return (
                <FadeIn key={index} delay={0.1 * (index % 4)} direction="up">
                  <AnimatedCard className="p-0 overflow-hidden group border-0 shadow-lg hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-slate-200 shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                      <img 
                        src={project.image || "https://placehold.co/600x400?text=No+Image"} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                        {toolsArray.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase text-slate-700 rounded-full shadow-sm border border-slate-100">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 relative bg-white flex-1 flex flex-col">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                        {project.summary}
                      </p>
                      
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors uppercase tracking-wider mt-auto"
                      >
                        Read Case Study
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </AnimatedCard>
                </FadeIn>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
