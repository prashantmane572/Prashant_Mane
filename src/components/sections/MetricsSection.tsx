"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/AnimatedCard";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-extrabold text-white">
      {count}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  const metrics = [
    { value: 15, suffix: "%", label: "OTD Improvement", desc: "On-Time Delivery across 4 regional centers", color: "text-blue-600", bg: "bg-blue-50" },
    { value: 20, suffix: "%", label: "Reporting Time Reduction", desc: "Automated away manual Excel processes", color: "text-indigo-600", bg: "bg-indigo-50" },
    { value: 12, suffix: "%+", label: "Inventory Accuracy", desc: "Real-time SQL tracking integration", color: "text-violet-600", bg: "bg-violet-50" },
    { value: 50, suffix: "+", label: "Dashboards Delivered", desc: "Enterprise-grade Power BI models", color: "text-emerald-600", bg: "bg-emerald-50" }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="impact">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn direction="right" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Impact & ROI
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Measurable Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Velocity</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="left" className="md:text-right">
            <p className="text-lg text-slate-600 max-w-md">
              Data is only as valuable as the decisions it drives. Here is the operational impact of transitioning to automated Business Intelligence.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                
                {/* Decorative background accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 ${metric.bg}`}></div>
                
                <div className="relative z-10">
                  <div className={`text-5xl font-black mb-4 tracking-tighter ${metric.color}`}>
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {metric.desc}
                  </p>
                </div>
                
                {/* Simulated trend line/chart visual at bottom of card */}
                <div className="mt-8 pt-4 border-t border-slate-50 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${metric.bg.replace('50', '500')}`} style={{ width: `${Math.max(40, metric.value)}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">Verified</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
