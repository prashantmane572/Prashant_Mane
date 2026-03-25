import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Prashant Mane",
  description: "View all featured Power BI dashboards and Data analytics projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen">
          
          <div className="container mx-auto px-4 max-w-6xl py-12 pb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Browse through my latest work below. Click on any project to view the live dashboard and read a detailed case study explaining the business problem and data solution.
            </p>
          </div>

          <ProjectsSection />

        </div>
      </main>
      <Footer />
    </>
  );
}
