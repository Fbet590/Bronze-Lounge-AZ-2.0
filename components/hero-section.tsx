import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuizForm } from "@/components/quiz-form";
import { OffersAccordion } from "@/components/offers-accordion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-48 md:pb-56">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.1-ey555t0d8cKQUE0QDcuGXVbT7g6FdP.png"
          alt="Sun-kissed bronze glow"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-base md:text-lg uppercase tracking-[0.3em] text-background/80 mb-4">
            Custom Spray Tans • Tempe, AZ
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-background leading-[1.1] mb-6 text-balance">
            Get Your Perfect Glow
          </h1>
          <p className="text-xl md:text-2xl text-background/90 max-w-xl mb-8 leading-relaxed">
            Your skin tone is one of a kind. Your tan should be too.
          </p>
          <div className="flex flex-col gap-6 max-w-sm">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
            >
              <Link href="#book">Book Your Tan</Link>
            </Button>
            
            {/* Offers Accordion */}
            <OffersAccordion />
          </div>
        </div>
      </div>

      {/* Quiz Form Overlay */}
      <div id="book" className="absolute bottom-0 left-0 right-0 translate-y-[75%] md:translate-y-[65%] z-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <QuizForm />
        </div>
      </div>
    </section>
  );
}
