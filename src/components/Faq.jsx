import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const faqListRef = useRef(null);
  const bottomRef = useRef(null);

  const faqs = [
    {
      question: "What time should I arrive?",
      answer:
        "We recommend arriving 30 minutes before the ceremony begins so you have enough time to settle in and find your seat.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "Our dress code is formal. We encourage you to dress elegantly and comfortably for the celebration.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Please refer to the name or names indicated on your invitation. We kindly ask that you only bring a plus one if they are included on your invitation.",
    },
    {
      question: "Are children allowed?",
      answer:
        "We love your little ones, but this will be an adults-only celebration unless your invitation specifically includes children.",
    },
    {
      question: "Where can I park?",
      answer:
        "Parking is available at the venue. Please follow the parking signs and directions from the venue staff when you arrive.",
    },
    {
      question: "Will there be transportation provided?",
      answer:
        "Transportation will be provided from the designated meeting point. Please check the wedding details for pickup times and location.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Please let us know about any dietary restrictions when you RSVP so we can make the necessary arrangements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        },
        y: 25,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // FAQ item animations
      const faqItems = faqListRef.current?.children;

      if (faqItems) {
        Array.from(faqItems).forEach((item) => {
          gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "restart reverse restart reverse",
            },
          });
        });
      }

      // Bottom message animation
      gsap.from(bottomRef.current, {
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 90%",
          toggleActions: "restart reverse restart reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#F8F8F6] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[760px]">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <p
            ref={headingRef}
            className="mb-2 text-[11px] tracking-[0.28em] text-[#555555] uppercase sm:text-xs"
          >
            Frequently Asked
          </p>

          <h2
            ref={titleRef}
            className="text-3xl tracking-[0.18em] text-[#202020] uppercase sm:text-4xl"
          >
            Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div ref={faqListRef} className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E7E7E3] bg-white first:border-t"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-5 sm:py-6"
                >
                  <span className="text-base leading-relaxed text-[#303030]">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-lg font-light text-[#8A8A8A] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={answerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 pr-12 text-sm leading-6 text-[#777777] sm:px-5 sm:pb-6 sm:pr-16 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div
          ref={bottomRef}
          className="mt-12 text-center sm:mt-14"
        >
          <p className="text-sm leading-6 tracking-wide text-[#8A8A8A] sm:text-base">
            If you have any other questions,
            <br />
            feel free to reach out to us.
          </p>

          <div className="mx-auto mt-8 h-px w-9 bg-[#BDBDBD]" />
        </div>
      </div>
    </section>
  );
}
