"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a spray tan last?",
    answer:
      "A spray tan typically lasts 7-10 days, gradually fading as your skin naturally exfoliates. Proper preparation and aftercare can help extend the life of your tan.",
  },
  {
    question: "How should I prepare for my spray tan?",
    answer:
      "Exfoliate your skin 24 hours before your appointment and avoid moisturizers, oils, or deodorant on the day of your tan. Wear loose, dark clothing to your appointment.",
  },
  {
    question: "What should I wear during my spray tan?",
    answer:
      "You can wear whatever you're comfortable with! Many clients wear undergarments, swimwear, or go without. We provide disposable options if needed.",
  },
  {
    question: "How soon can I shower after my spray tan?",
    answer:
      "For Rapid tans, wait 3-5 hours. For Classic tans, wait 8-10 hours. Your first rinse should be a quick water-only rinse without soap or scrubbing.",
  },
  {
    question: "Will my spray tan look orange?",
    answer:
      "Absolutely not! We use high-quality, custom-mixed formulas designed for your specific skin tone. Our tans develop into natural, bronze shades.",
  },
  {
    question: "Do you offer group bookings?",
    answer:
      "Yes! We offer special rates for bridal parties, girls' nights, and other group events. Contact us to arrange your private group session.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Deposits are non-refundable and non-transferable. If you need to reschedule, please do so at least 24 hours in advance to keep your deposit. Late cancellations or no-shows will result in the deposit being forfeited, and a new deposit will be required to book any future appointment.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="px-8">
              <Link href="#book">Ready to Glow? Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
