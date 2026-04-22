"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type QuestionType = "options" | "text";

interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: { label: string; value: string }[];
  placeholder?: string;
  inputType?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which option interests you the most? 😊",
    type: "options",
    options: [
      { label: "Bestie Bundle 👯‍♀️", value: "bestie-bundle" },
      { label: "Glow Delivered 💫", value: "glow-delivered" },
      { label: "Glow Pass 🎓 For students", value: "glow-pass" },
    ],
  },
  {
    id: 2,
    question: "What's the occasion?",
    type: "options",
    options: [
      { label: "Too Busy to Come In 🏃‍♀️", value: "busy" },
      { label: "Vacation ✈️", value: "vacation" },
      { label: "Wedding/Bachelorette 💍", value: "wedding" },
      { label: "Just for fun 💁‍♀️", value: "fun" },
      { label: "Birthday 🎂", value: "birthday" },
    ],
  },
  {
    id: 3,
    question: "What's your ideal shade? 💫",
    type: "options",
    options: [
      { label: "Sun-Kissed 🌅", value: "sun-kissed" },
      { label: "Glowing Bronze 🤎", value: "bronze" },
      { label: "Deep & Dark 🌙", value: "deep" },
      { label: "Not sure — help me pick! 💫", value: "help" },
    ],
  },
  {
    id: 4,
    question: "How can we get in touch with you?",
    type: "text",
    placeholder: "Your full name",
    inputType: "text",
  },
  {
    id: 5,
    question: "What's your email address?",
    type: "text",
    placeholder: "your@email.com",
    inputType: "email",
  },
  {
    id: 6,
    question: "What's your phone number?",
    type: "text",
    placeholder: "(480) 555-1234",
    inputType: "tel",
  },
];

export function QuizForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const scrollToForm = () => {
    if (formRef.current) {
      const yOffset = -100;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    
    // Auto-advance with delay for option questions
    if (currentQuestion.type === "options") {
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep((prev) => prev + 1);
          setTimeout(scrollToForm, 100);
        } else {
          setIsComplete(true);
        }
        setIsTransitioning(false);
      }, 600);
    }
  };

  const handleInputChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setTimeout(scrollToForm, 100);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && answers[currentQuestion.id]) {
      handleNext();
    }
  };

  if (isComplete) {
    return (
      <div ref={formRef} className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
          Perfect! We&apos;ve Got Your Glow Goals
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Thanks for sharing, {answers[4] ? answers[4].split(" ")[0] : "beautiful"}! We&apos;ll be in touch soon to help you get your perfect glow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="tel:+14805551234">Call Us Now</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleReset}
            className="border-border"
          >
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-2xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className={cn(
        "mb-8 transition-opacity duration-300",
        isTransitioning ? "opacity-50" : "opacity-100"
      )}>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {currentStep < 3 ? "Tell us about you" : "Contact info"}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6 text-balance">
          {currentQuestion.question}
        </h3>

        {currentQuestion.type === "options" ? (
          <div className="grid gap-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                disabled={isTransitioning}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all duration-300 border-2",
                  answers[currentQuestion.id] === option.value
                    ? "border-primary bg-primary/10 text-foreground scale-[1.02]"
                    : "border-border bg-background hover:border-primary/50 hover:bg-secondary/50 text-foreground",
                  isTransitioning && "pointer-events-none"
                )}
              >
                <span className="text-base md:text-lg">{option.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              type={currentQuestion.inputType || "text"}
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="h-14 text-lg px-4 border-2 border-border focus:border-primary rounded-xl"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0 || isTransitioning}
          className="text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        {currentQuestion.type === "text" && (
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id] || isTransitioning}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            {currentStep === questions.length - 1 ? (
              "Book My Glow 🤎"
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        )}

        {currentQuestion.type === "options" && (
          <div />
        )}
      </div>
    </div>
  );
}
