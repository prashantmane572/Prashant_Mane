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
    { value: 15, suffix: "%", label: "OTD Improvement" },
    { value: 20, suffix: "%", label: "Reporting Time Reduction" },
    { value: 12, suffix: "%", label: "Inventory Accuracy Increase" },
    { value: 100, suffix: "+", label: "Data Dashboards Delivered" }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
        <FadeIn direction="down" className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Impact & ROI</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Measurable Results
          </h3>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                <div className="mt-4 text-blue-100/80 font-medium text-sm md:text-base uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
