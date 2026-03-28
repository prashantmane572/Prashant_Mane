"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <FadeIn direction="down">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
              Let's Turn Your Data into Decisions
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to optimize your ERP data or build enterprise-grade Power BI dashboards? Drop me a message below.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <FadeIn direction="right" className="lg:col-span-1 border-r border-white/10 pr-0 lg:pr-8">
            <div className="flex flex-col gap-6">
              <AnimatedCard className="bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-4 p-8">
                <div className="p-3 bg-white/10 text-blue-400 rounded-full shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Email Me</h5>
                  <a href="mailto:prashantmane572@gmail.com" className="text-blue-400 hover:text-white font-medium transition-colors">prashantmane572@gmail.com</a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-4 p-8">
                <div className="p-3 bg-white/10 text-blue-400 rounded-full shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Call Me</h5>
                  <p className="text-slate-300">Available upon request</p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-4 p-8">
                <div className="p-3 bg-white/10 text-blue-400 rounded-full shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Location</h5>
                  <p className="text-slate-300">Pune, Maharashtra, India</p>
                </div>
              </AnimatedCard>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-2">
            <AnimatedCard className="bg-white/5 backdrop-blur-md p-8 md:p-10 border border-white/10">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Service Required</label>
                  <select className="px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all [&>option]:text-slate-900">
                    <option value="">Select a service</option>
                    <option value="powerbi">Power BI Dashboard Development</option>
                    <option value="erp">ERP Data Analytics (SAP B1 / HANA)</option>
                    <option value="sql">SQL Optimization</option>
                    <option value="other">Other Consulting Services</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me about your data project..." 
                    className="px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group border border-blue-400/50"
                >
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </AnimatedCard>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
