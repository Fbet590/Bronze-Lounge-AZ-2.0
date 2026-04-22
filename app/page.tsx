import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      {/* Spacer for quiz form overlap */}
      <div className="h-[400px] md:h-[360px] bg-background" />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
