"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart2 } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== "/" // Always solid on inner pages
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <BarChart2 size={24} />
          </div>
          <span className={`font-bold text-xl tracking-tight ${pathname !== "/" || isScrolled ? "text-slate-900" : "text-white"}`}>
            {/* Prashant<span className="text-accent">.</span>Mane */}
            Demo<span className="text-accent">.</span>Website
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
            const textColor = pathname !== "/" || isScrolled ? "text-slate-600" : "text-white/80";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${isActive ? "text-primary font-bold" : textColor
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-accent transition-all shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.39)] hover:-translate-y-0.5"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-primary p-2 rounded-md hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center w-full px-5 py-3 rounded-xl bg-primary text-white font-medium hover:bg-accent transition-all"
                >
                  Hire Me
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
