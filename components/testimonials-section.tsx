"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Divyne is amazing! Definitely my best spray tan ever. She's super fun to talk to as well. The process took only about 15 minutes and the results were amazing. Additionally, something unique is that the formula she uses has a really nice fragrance. Personally, I have a strong dislike of the typical smell of spray tans, but her product had such a lovely and tolerable scent.",
    author: "Hannah Laufer",
  },
  {
    quote:
      "I've been coming to Bronze Lounge AZ for a while now and it's consistently great every time. The salon is always clean and organized, and the whole process is quick and easy. I like that they actually listen to what you want instead of just rushing you in and out. My tan always comes out even and natural looking, never streaky or orange. It fades really well too. Definitely recommend if you want reliable results and a comfortable experience.",
    author: "LUXORI GROUP",
  },
  {
    quote:
      "I've been coming to Bronze Lounge AZ for a while now and it's consistently great every time. The salon is always clean and organized, and the whole process is quick and easy. I like that they actually listen to what you want instead of just rushing you in and out. My tan always comes out even and natural looking, never streaky or orange. It fades really well too. Definitely recommend if you want reliable results and a comfortable experience.",
    author: "Kameron Darre",
  },
  {
    quote:
      "Amazing experience from start to finish. The attention to detail and personalized service made all the difference!",
    author: "Karen Nevarez",
  },
  {
    quote:
      "I did my first ever spray tan with Diva and she was absolutely amazing! I was nervous about the entire process but she walked me through it all and made me feel so comfortable. I absolutely loved the results and I can't wait to go back again with her.",
    author: "Jessica G.",
  },
  {
    quote:
      "I had booked a spray tan here, and let me just say i was not disappointed, the technician was so professional and helpful the next day my color turned out amazing and i was very happy with the results, i will be coming back. If you're looking for a spray tan in tempe definitely come here",
    author: "Amber J.",
  },
  {
    quote:
      "This was hands down THE BEST spray tan I've ever had! The results were super even, natural-looking, and lasted. The products used smelled so good. She made me feel comfortable and is very professional.",
    author: "Mariah S.",
  },
  {
    quote:
      "10/10 Hands down the best spray tan I've ever had! The color came out flawless, no streaks, no orange tint, just a super natural glow. You can really tell it's customized and done by someone who knows what they're doing. Divyne made me feel so comfortable, explained everything beforehand, and even had little touches like barrier cream and drying powder that made the whole experience feel luxe. My tan lasted over a week and faded evenly. If you're looking for a professional, personalized spray tan, the best!!!",
    author: "Olivia Jasso",
  },
  {
    quote:
      "Thank you Divyne for a fabulous spray tan, for making me feel comfortable and your professionalism. You don't have to look anywhere else this is the place to go and I look forward to doing a in home spray tan!",
    author: "Karla Kay",
  },
  {
    quote:
      "The most gorgeous natural looking tan, the perfect Bronze color! My daughter is an Allstar cheerleader and tans are a must before competition! The artist came and did a mobile tan- that not only was the perfect golden color but also last 2 weeks and faded so naturally with no streaks.",
    author: "Tarah Cook",
  },
  {
    quote:
      "Divyne is amazing!! She always makes my experience so comfortable and is super kind. Her tans go on so beautifully, smooth, and most importantly dark and bronzed!! I would recommend Divyne to anyone wanting a beautiful tan. She is so reliable and will leave you with the best tan!",
    author: "Sarah W",
  },
  {
    quote:
      "Divyne is amazing!! She always makes my experience so comfortable and is super kind. Her tans go on so beautifully, smooth, and most importantly dark and bronzed!! I would recommend Divyne to anyone wanting a beautiful tan. She is so reliable and will leave you with the best tan!",
    author: "Jen M.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      prevSlide();
    } else {
      nextSlide();
    }
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Slideshow Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary-foreground text-primary-foreground"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="font-medium text-lg">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleManualNavigation("prev")}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-foreground w-6"
                      : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleManualNavigation("next")}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="#book">Join Our Happy Clients</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
