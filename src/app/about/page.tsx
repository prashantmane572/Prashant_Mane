import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { FadeIn } from "@/components/AnimatedCard";
import { Briefcase, Brain, Heart, Coffee } from "lucide-react";

export const metadata = {
  title: "About Me | Prashant Mane",
  description: "Learn more about Prashant Mane's career journey and analytics background.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen flex flex-col">
          
          {/* Header Section with Image */}
          <section className="relative w-full overflow-hidden bg-slate-900 border-b border-slate-800">
             <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80" 
                  alt="Corporate Analytics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
             </div>
             
             <div className="container mx-auto px-4 max-w-5xl relative z-10 py-24 md:py-32">
               <FadeIn>
                  <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/20 tracking-wide uppercase">
                     The Person Behind the Data
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                    From Operations to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Data Orchestration</span>
                  </h1>
               </FadeIn>
             </div>
          </section>

          {/* Personal Story Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 relative">
                   <FadeIn direction="right">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                        <img 
                          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                          alt="Prashant at work" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                           <div className="glass-card bg-white/20 backdrop-blur-md rounded-xl p-4 w-full border border-white/30 text-white">
                             <div className="font-bold">Prashant Mane</div>
                             <div className="text-white/80 text-sm">Pune, Maharashtra</div>
                           </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10" />
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full -z-10" />
                   </FadeIn>
                </div>
                
                <div className="md:col-span-7 space-y-6">
                   <FadeIn direction="left" delay={0.1}>
                     <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>
                     <p className="text-lg text-slate-600 leading-relaxed mb-4">
                       My journey into Data Analytics didn't start in a computer lab—it started on the operations floor. Managing complex processes and massive daily transaction volumes made me realize one critical truth: <strong>businesses generate more data than they can comprehend.</strong>
                     </p>
                     <p className="text-lg text-slate-600 leading-relaxed mb-8">
                       That realization led me down the rabbit hole of Business Intelligence. I transitioned from executing operations to analyzing them. Today, I specialize in <span className="text-slate-900 font-semibold">SAP HANA</span> integrations and <span className="text-slate-900 font-semibold">Power BI</span> engineering, helping companies transition from static Excel reporting to dynamic, automated, real-time command centers.
                     </p>
                   </FadeIn>
                   
                   <FadeIn direction="left" delay={0.2}>
                     <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
                          <Brain className="text-primary" size={20} />
                          <span className="font-semibold text-slate-700">Analytical Thinker</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
                          <Briefcase className="text-primary" size={20} />
                          <span className="font-semibold text-slate-700">Problem Solver</span>
                        </div>
                     </div>
                   </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Render existing Timeline */}
          <div className="bg-slate-50 border-t border-slate-100 pb-12">
            <AboutSection />
          </div>

          {/* Philosophy Section */}
          <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl text-center">
              <FadeIn>
                <Heart size={40} className="text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-12">My Core Philosophy</h2>
              </FadeIn>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <FadeIn delay={0.1} direction="up" className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <span className="bg-primary/20 text-blue-400 p-2 rounded-lg">01</span>
                     Form Meets Function
                  </h3>
                  <p className="text-slate-400 leading-relaxed">A dashboard is useless if people don't want to look at it. I believe in pixel-perfect alignment, modern UI principles, and an intuitive user experience for every report I build.</p>
                </FadeIn>
                
                <FadeIn delay={0.2} direction="up" className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <span className="bg-primary/20 text-blue-400 p-2 rounded-lg">02</span>
                     Performant Data
                  </h3>
                  <p className="text-slate-400 leading-relaxed">Performance is a feature. Storing operations efficiently with DAX variables and star-schema models prevents endless loading spinners for executives.</p>
                </FadeIn>
                
                <FadeIn delay={0.3} direction="up" className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <span className="bg-primary/20 text-blue-400 p-2 rounded-lg">03</span>
                     Constant Growth
                  </h3>
                  <p className="text-slate-400 leading-relaxed">The data landscape shifts every month with new AI tools and Copilots. My philosophy is continuous iteration and learning, fueled by <Coffee size={18} className="inline text-accent" /> coffee.</p>
                </FadeIn>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
