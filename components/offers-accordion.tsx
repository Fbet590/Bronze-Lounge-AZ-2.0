"use client";

import * as React from "react";
import Link from "next/link";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: "bestie-bundle",
    emoji: "👯‍♀️",
    title: "Bestie Bundle",
    price: "$90 (for 2)",
    description: "Two custom tans, side by side — plus a free upgrade each.",
    features: [
      "$50 in add-ons, on us",
      "2 custom tans, one appointment",
      "Free enhancer each (scent or rapid)",
    ],
    deposit: "$30 deposit required to book",
  },
  {
    id: "glow-delivered",
    emoji: "🏡",
    title: "Glow Delivered",
    price: "$255 (for 2 sessions)",
    description: "Two mobile tans, delivered to you.",
    features: [
      "$45 in add-ons, on us",
      "2 in-home sessions",
      "Free enhancer on session 1",
    ],
    deposit: "$45 deposit required to book",
  },
  {
    id: "glow-pass",
    emoji: "🎓",
    title: "Glow Pass",
    price: "$135 (for 3 sessions)",
    description: "Three custom tans to keep you glowing all semester.",
    features: [
      "Save $30 vs. booking separately",
      "3 scheduled sessions",
      "Free enhancer on session 1",
    ],
    deposit: "$30 deposit required to book",
  },
];

export function OffersAccordion() {
  const [openItem, setOpenItem] = React.useState<string>("");

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className="w-full flex flex-col gap-2.5"
    >
      {offers.map((offer) => (
        <AccordionPrimitive.Item
          key={offer.id}
          value={offer.id}
          className="rounded-lg overflow-hidden border border-border/50 bg-secondary/80 backdrop-blur-sm"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                "flex flex-1 items-center justify-between px-4 py-3 min-h-[48px]",
                "text-left font-medium transition-colors",
                "hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "data-[state=open]:bg-secondary"
              )}
            >
              <span className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <span className="text-base">{offer.emoji}</span>
                {offer.title}
              </span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-primary transition-transform duration-250 ease-in-out",
                  "data-[state=open]:rotate-45"
                )}
                style={{
                  transform: openItem === offer.id ? "rotate(45deg)" : "rotate(0deg)",
                }}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={cn(
              "overflow-hidden transition-all duration-250 ease-in-out",
              "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            )}
          >
            <div className="px-4 pb-4 pt-1">
              {/* Price */}
              <p className="text-lg font-semibold text-primary mb-2">
                {offer.price}
              </p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3">
                {offer.description}
              </p>
              
              {/* Feature Pills */}
              <ul className="flex flex-wrap gap-1.5 mb-3">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-background/80 rounded-full text-xs text-foreground"
                  >
                    <Sparkles className="w-3 h-3 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Deposit Note */}
              <p className="text-xs text-muted-foreground italic mb-3">
                {offer.deposit}
              </p>
              
              {/* CTA Button */}
              <Button asChild size="sm" className="w-full">
                <Link href="#book">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
