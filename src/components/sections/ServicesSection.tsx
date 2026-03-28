"use client";

import { motion } from "framer-motion";
import { BarChart3, DatabaseZap, Workflow, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

export function ServicesSection() {
  const services = [
    {
      title: "Power BI Dashboards",
      description: "Custom, interactive dashboards that transform raw ERP data into executive-level insights and KPI tracking.",
      icon: <BarChart3 className="text-white" size={28} />,
      bg: "bg-gradient-to-br from-primary to-blue-800"
    },
    {
      title: "ERP Data Analytics",
      description: "Deep-dive analysis into SAP B1 and HANA databases to uncover hidden operational inefficiencies.",
      icon: <DatabaseZap className="text-white" size={28} />,
      bg: "bg-gradient-to-br from-accent to-blue-400"
    },
    {
      title: "SQL Optimization",
      description: "Refactoring and optimizing complex SQL queries for faster reporting and reduced server load.",
      icon: <Workflow className="text-white" size={28} />,
      bg: "bg-gradient-to-br from-highlight to-yellow-500"
    },
    {
      title: "MIS Automation",
      description: "Automating manual Excel reports and Management Information Systems via Power Query and Python.",
      icon: <ShieldCheck className="text-white" size={28} />,
      bg: "bg-gradient-to-br from-slate-700 to-slate-900"
    }
  ];

  return (
    <section id="services" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">What I Do</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
              Freelance BI Services
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
              I partner with businesses to build robust data pipelines, optimize databases, and deliver stunning analytics solutions.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
              <AnimatedCard className="group flex flex-col md:flex-row gap-6 p-8 items-start bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all shadow-xl">
                <div className={`p-4 rounded-2xl shadow-lg shrink-0 ${service.bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                    Schedule a Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
