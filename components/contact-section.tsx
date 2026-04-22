import Link from "next/link";
import { MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Come Get Your Glow
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to get your glow on? Stop by our Tempe studio or reach out with any questions. We&apos;d love to see you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              115 W 6th St Suite 124
              <br />
              Tempe, AZ 85281
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Mon - Fri: 9am - 7pm
              <br />
              Sat: 9am - 5pm
              <br />
              Sun: By appointment
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Follow Us</h3>
            <a
              href="https://instagram.com/bronzeloungeaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              @bronzeloungeaz
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-8">
            <Link href="#book">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
