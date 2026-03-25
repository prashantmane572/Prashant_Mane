"use client";

import { motion } from "framer-motion";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";
import { Server, Database, LineChart, Code2 } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Business Intelligence",
      icon: <LineChart className="text-primary" size={32} />,
      skills: ["Power BI (DAX, Power Query)", "Data Modeling", "KPI Dashboards", "Looker Studio"],
      progress: 95
    },
    {
      title: "Databases & ERP",
      icon: <Database className="text-accent" size={32} />,
      skills: ["MS SQL Server", "SAP HANA", "SAP Business One", "PostgreSQL"],
      progress: 90
    },
    {
      title: "Data Analytics",
      icon: <Server className="text-highlight" size={32} />,
      skills: ["Inventory Analytics", "Sales Operations", "Data Cleaning", "MIS Automation"],
      progress: 85
    },
    {
      title: "Programming & Tools",
      icon: <Code2 className="text-slate-600" size={32} />,
      skills: ["Python (Pandas, NumPy)", "Advanced Excel", "Git & GitHub", "VBA"],
      progress: 80
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Core Skills & Technologies
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for full-stack data analytics, from database management to interactive visualizations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
              <AnimatedCard className="h-full flex flex-col group border hover:border-blue-100 bg-white hover:bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent -mr-10 -mt-10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-colors">
                  {category.icon}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h4>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                    <span>Proficiency</span>
                    <span>{category.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
