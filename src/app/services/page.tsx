import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services | Prashant Mane",
  description: "Freelance BI & Analytics Services offered by Prashant Mane.",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
