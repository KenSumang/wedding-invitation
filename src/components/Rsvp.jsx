import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RSVP() {
  const navigate = useNavigate();

  const sectionRef = useRef(null);

  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const deadlineRef = useRef(null);
  const buttonRef = useRef(null);
  const dividerRef = useRef(null);
  const thankYouRef = useRef(null);
  const namesRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation state
      gsap.set(
        [
          headingRef.current,
          titleRef.current,
          messageRef.current,
          deadlineRef.current,
          buttonRef.current,
          thankYouRef.current,
          namesRef.current,
          dateRef.current,
        ],
        {
          opacity: 0,
          y: 18,
        }
      );

      gsap.set(dividerRef.current, {
        opacity: 0,
        scaleX: 0,
      });

      // Main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          messageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.55"
        )
        .to(
          deadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.55"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          dividerRef.current,
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          thankYouRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          namesRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          dateRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            toggleActions: "restart reverse restart reverse",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRSVP = () => {
    navigate("/rsvp");
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
        {/* KINDLY */}
        <p
          ref={headingRef}
          className="text-[11px] uppercase tracking-[0.28em] text-[#555555] sm:text-xs"
        >
          Kindly
        </p>

        {/* RSVP */}
        <h2
          ref={titleRef}
          className="mt-2 text-3xl uppercase tracking-[0.18em] text-[#202020] sm:text-[32px] md:text-[clamp(28px,2.5vw,40px)] md:leading-[1.5] md:tracking-[0.18em]"
        >
          RSVP
        </h2>

        {/* MESSAGE */}
        <p
          ref={messageRef}
          className="mt-8 max-w-[360px] text-base leading-7 tracking-wide text-[#858585] sm:mt-10"
        >
          Please let us know if you can
          <br />
          join us on our special day.
        </p>

        {/* DEADLINE */}
        <p
          ref={deadlineRef}
          className="mt-8 text-base tracking-wide text-[#777777] sm:mt-10"
        >
          Kindly reply by{" "}
          <span className="text-[#444444]">
            December 1, 2026
          </span>
        </p>

        {/* RSVP BUTTON */}
        <button
          ref={buttonRef}
          type="button"
          onClick={handleRSVP}
          className="
            group
            mt-10
            flex
            h-[52px]
            w-full
            max-w-[360px]
            items-center
            justify-between
            bg-[#1F1F1F]
            px-5
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-white
            transition-colors
            duration-300
            hover:bg-[#2B2B2B]
            active:scale-[0.99]
            sm:mt-11
          "
        >
          {/* Invisible spacer */}
          <span className="w-5" />

          {/* Text */}
          <span>
            GO TO RSVP
          </span>

          {/* Arrow */}
          <span
            aria-hidden="true"
            className="
              w-5
              text-right
              text-[18px]
              font-light
              leading-none
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>

        {/* DIVIDER */}
        <div
          ref={dividerRef}
          className="mt-10 h-px w-10 origin-center bg-[#BDBDBD] sm:mt-12"
        />

        {/* THANK YOU */}
        <div className="mt-9 sm:mt-10">
          <p
            ref={thankYouRef}
            className="text-[13px] uppercase tracking-[0.3em] text-[#777777] sm:text-xs"
          >
            Thank You
          </p>

          <p
            ref={namesRef}
            className="mt-5 text-[13px] uppercase tracking-[0.22em] text-[#333333] sm:text-sm"
          >
            Armand & Edelyn
          </p>

          <p
            ref={dateRef}
            className="mt-2 text-[13px] tracking-[0.3em] text-[#777777] sm:text-xs"
          >
            01.15.2027
          </p>
        </div>
      </div>
    </section>
  );
}
