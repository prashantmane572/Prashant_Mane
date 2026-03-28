"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FadeIn, AnimatedCard } from "@/components/AnimatedCard";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <FadeIn direction="down">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Let's Turn Your Data into Decisions
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to optimize your ERP data or build enterprise-grade Power BI dashboards? Drop me a message below.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <FadeIn direction="right" className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
            <div className="flex flex-col gap-6">
              <AnimatedCard className="bg-slate-50 border-0 flex items-start gap-4 p-8">
                <div className="p-3 bg-white text-primary rounded-full shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Email Me</h5>
                  <a href="mailto:prashantmane572@gmail.com" className="text-primary hover:text-accent font-medium transition-colors">prashantmane572@gmail.com</a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="bg-slate-50 border-0 flex items-start gap-4 p-8">
                <div className="p-3 bg-white text-primary rounded-full shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Call Me</h5>
                  <p className="text-slate-600">Available upon request</p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="bg-slate-50 border-0 flex items-start gap-4 p-8">
                <div className="p-3 bg-white text-primary rounded-full shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Location</h5>
                  <p className="text-slate-600">Pune, Maharashtra, India</p>
                </div>
              </AnimatedCard>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-2">
            <AnimatedCard className="bg-white p-8 md:p-10 border-slate-200">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Service Required</label>
                  <select className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600">
                    <option value="">Select a service</option>
                    <option value="powerbi">Power BI Dashboard Development</option>
                    <option value="erp">ERP Data Analytics (SAP B1 / HANA)</option>
                    <option value="sql">SQL Optimization</option>
                    <option value="other">Other Consulting Services</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell me about your data project..." 
                    className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
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
