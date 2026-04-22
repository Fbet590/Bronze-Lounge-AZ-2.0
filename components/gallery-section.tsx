"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.2-4LFQVPzZk5vRbvETxc8lIRbVguTx90.png",
    alt: "Bronze glow shoulder detail with delicate necklace",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1-oRQUQDx4czehzgF7EHUqiJRws6fo5m.png",
    alt: "Sunset poolside glow in floral dress",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.1-EUUcD2XdoYW3QASYagUf4vIIOy52Ao.jpg",
    alt: "Fresh spray tan glow results",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bn16tsbn16tsbn16.png-kJmSpNrN2ja9XvJJjkmDtSMfmwty9R.jpeg",
    alt: "Gameday ready bronze tan duo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.2.png-g40AJpgaoXXVdHzBTwl5jYyPbmfnLs.jpeg",
    alt: "Beach ready bronze glow with bracelet",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.2.png-I2Q9kSEwAQswENxJzZ4sfndmIID3nX.jpeg",
    alt: "Glamorous group bronze glow in black dresses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7euzqv7euzqv7euz.png-N4dY8xRUs0Dtjztxw4vavKF8zuxhNz.jpeg",
    alt: "Bestie bundle bronze tan results",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_71p9k471p9k471p9.png-IU3SDpXrv0eQKmoP7i5AI1Cn7YeWuX.jpeg",
    alt: "Summer vibes bronze glow on bike",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_gvzaxygvzaxygvza.png-oa6s9vtT2rkGbYBJdObnpplz3MIBSG.jpeg",
    alt: "Party ready bronze tan duo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_o60y7jo60y7jo60y.png-Hsyw3ac91OxIOPAZeNB4cgCMcD5uJF.jpeg",
    alt: "Gameday bronze glow ASU cheerleader",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5udcgt5udcgt5udc.png-2khJe03kH2zRyOcMYIx6oJF5B4njnk.jpeg",
    alt: "Everyday bronze glow style",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1.JPG-AO50vmj4yHOs0q0M41IBHwHcXD2Ze3.jpeg",
    alt: "Fresh spray tan results closeup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/622929735_17997673280897673_4563465239001330029_n-GFzvSpVbcIx7dHbldfYQ4WRUCqI6Wv.jpg",
    alt: "Bronze tan line result",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568180720_18056676527552326_3051514042975052975_n-gPy8EmHsXj89JF8wmhTEjePKVURJbn.jpg",
    alt: "Before and after spray tan comparison",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_uk1a0wuk1a0wuk1a.png-aWQLPvFFzNn0Rvi66GmhCSqvvcsOdy.jpeg",
    alt: "ASU cheerleaders bronze glow duo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/503616993_18043599281552326_353063145132975456_n-TwIU2GGioc5aPUJcEPHZQzaP8Msnu5.jpg",
    alt: "Besties with bronze glow on grass",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/534308690_18049488326552326_593127627180752245_n-Q6U8Ip2p375ymjEsae4EjVU2sYsJC0.jpg",
    alt: "Pool party bronze tan group",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/624730814_18066911900552326_204399150701274281_n-gMSoujl25TyYlQ22GRz3aK9Ip7sCdV.jpg",
    alt: "Bronze tan back results",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
              The Glow Gallery
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              See the glows we&apos;ve been creating lately
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/5] overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="px-8">
              <Link href="#book">Get This Glow</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close lightbox</span>
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10 w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
            <span className="sr-only">Previous image</span>
          </Button>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10 w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-8 h-8" />
            <span className="sr-only">Next image</span>
          </Button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
