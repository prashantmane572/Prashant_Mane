"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/AnimatedCard";

import { HeroSlideshow } from "@/components/sections/HeroSlideshow";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Video Slideshow Background */}
      <HeroSlideshow />

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center max-w-5xl">
        
        <FadeIn delay={0.2} direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Available for Freelance Projects
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" className="w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Business Data</span> <br className="hidden md:block"/> into Powerful Insights
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Power BI Developer | SQL Analyst | SAP HANA <br className="hidden md:block" />
            Empowering organizations with intelligent data modeling and BI solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center"
          >
            Hire Me
          </Link>
        </FadeIn>

        {/* Floating KPI Cards Array */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            { label: "BI Experience", value: "3+ Years" },
            { label: "Professional Exp.", value: "8+ Years" },
            { label: "OTD Improvement", value: "15%" },
            { label: "Reporting Time Reduced", value: "20%" },
          ].map((kpi, i) => (
            <FadeIn key={i} delay={1 + (i * 0.1)} direction="up">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-5 text-center flex flex-col justify-center items-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{kpi.value}</div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">{kpi.label}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
