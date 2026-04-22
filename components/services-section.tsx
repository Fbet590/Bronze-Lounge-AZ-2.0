import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, Truck, GraduationCap, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Bestie Bundle",
    description:
      "Two custom tans, side by side — plus a free upgrade each.",
    features: [
      "$50 in add-ons, on us",
      "2 custom tans, one appointment",
      "Free enhancer each (scent or rapid)",
    ],
    price: "$90 (for 2)",
    icon: Users,
    deposit: "$30 deposit required to book",
  },
  {
    title: "Glow Delivered",
    description:
      "Two mobile tans, delivered to you.",
    features: [
      "$45 in add-ons, on us!",
      "2 in-home sessions",
      "Free enhancer on session 1",
    ],
    price: "$255 (for 2 sessions)",
    icon: Truck,
    deposit: "$45 deposit required to book",
  },
  {
    title: "Glow Pass",
    description:
      "Three custom tans to keep you glowing all semester.",
    features: [
      "Save $30 vs. booking separately",
      "3 scheduled sessions",
      "Free enhancer on session 1",
    ],
    price: "$135 (for 3 sessions)",
    icon: GraduationCap,
    deposit: "$30 deposit required to book",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Our Offers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-balance">
            Custom Spray Tans
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-sprayed tans made for your personal skin tone, delivering
            flawless, natural results using clean, luxury formulas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <offer.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {offer.title}
                  </h3>
                </div>
                <span className="text-lg font-semibold text-primary">
                  {offer.price}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{offer.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                  >
                    <Sparkles className="w-3 h-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic border-t border-border pt-4 mb-4">
                {offer.deposit}
              </p>
              <Button asChild className="w-full">
                <Link href="#book">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 md:mt-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/spray-session.jpg"
                alt="Professional spray tan session"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
                What to Expect
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-balance">
                Your First Visit
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                New to spray tans? No stress. At Bronze Lounge AZ, every first visit is personally guided by Divyne — our founder, licensed esthetician, and the tanning expert behind every hand-sprayed glow. She&apos;ll help you pick the right shade, walk you through each step, and make sure you&apos;re comfortable the whole way.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Consultation to determine your perfect shade",
                  "Custom-mixed formula for your skin tone",
                  "Quick 15-20 minute application",
                  "Detailed aftercare instructions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="px-8">
                <Link href="#book">Schedule Your First Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
