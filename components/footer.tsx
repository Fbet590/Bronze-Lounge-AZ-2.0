import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-semibold tracking-tight">
                Bronze Lounge
              </span>
              <span className="ml-2 text-sm font-medium tracking-widest opacity-70">
                AZ
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm mb-6">
              Custom spray tans in Tempe, Arizona. Experience flawless,
              natural results using clean, luxury formulas tailored to your
              unique skin tone.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bronzeloungeaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/bronzeloungeaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="#services"
                className="text-background/70 hover:text-background transition-colors"
              >
                Our Offers
              </Link>
              <Link
                href="#gallery"
                className="text-background/70 hover:text-background transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="text-background/70 hover:text-background transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="#faq"
                className="text-background/70 hover:text-background transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#book"
                className="text-background/70 hover:text-background transition-colors"
              >
                Book Now
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Location</h4>
            <address className="not-italic text-background/70 space-y-3">
              <p>
                115 W 6th St Suite 124
                <br />
                Tempe, AZ 85281
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>
            &copy; {new Date().getFullYear()} Bronze Lounge AZ. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
