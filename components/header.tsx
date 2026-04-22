"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Bronze Lounge
            </span>
            <span className="text-xs md:text-sm font-medium text-primary tracking-widest">
              AZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Offers
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Offers
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#book">Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
