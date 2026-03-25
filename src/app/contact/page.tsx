import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact | Prashant Mane",
  description: "Get in touch with Prashant Mane to turn your data into decisions.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
        <div className="w-full relative z-10 bg-white shadow-xl min-h-screen">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
