import Link from "next/link";
import { Briefcase, Globe, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 justify-items-center sm:justify-items-start text-center sm:text-left">
          
          <div className="flex flex-col items-center sm:items-start max-w-xs">
            <Link href="/" className="font-bold text-xl text-primary tracking-tight mb-4">
              Prashant<span className="text-accent">.</span>Mane
            </Link>
            <p className="text-sm text-slate-500 text-center sm:text-left leading-relaxed">
              Transforming ERP & Business Data into Powerful Insights. Power BI Developer & Data Analyst from Pune, India.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-semibold text-slate-900 mb-4 whitespace-nowrap">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-sm text-slate-500 hover:text-accent transition-colors">Portfolio</Link>
              <Link href="/services" className="text-sm text-slate-500 hover:text-accent transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-slate-500 hover:text-accent transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-semibold text-slate-900 mb-4 whitespace-nowrap">Professional</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-slate-500 hover:text-accent transition-colors">Download Resume</Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-accent transition-colors">Certifications</Link>
              <Link href="/admin" className="text-sm text-slate-500 hover:text-accent transition-colors">Admin Login</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-semibold text-slate-900 mb-4 whitespace-nowrap">Connect</h4>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-500 hover:text-accent hover:bg-slate-100 transition-all border border-slate-200 shadow-sm">
                <Briefcase size={20} />
              </a>
              <a href="mailto:prashantmane572@gmail.com" className="p-3 bg-white rounded-full text-slate-500 hover:text-accent hover:bg-slate-100 transition-all border border-slate-200 shadow-sm">
                <Mail size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-500 hover:text-accent hover:bg-slate-100 transition-all border border-slate-200 shadow-sm">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center">
            &copy; {currentYear} Prashant Mane. All rights reserved.
          </p>
          <div className="text-sm text-slate-400 text-center bg-slate-100 px-4 py-1.5 rounded-full">
            Based in Pune, Maharashtra, India
          </div>
        </div>
      </div>
    </footer>
  );
}
