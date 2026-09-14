import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import envelopeBottom from "../assets/envelope-bottom.avif";
import envelopeTop from "../assets/envelope-top.avif";

const BOTTOM_DIMS = { width: 960, height: 708 };
const TOP_DIMS = { width: 960, height: 489 };

const TIMING = {
  flapToEdge: 0.35,
  flapToBack: 0.35,
  letterOverlap: 0.15,
  letterSlide: 0.5,
  overlayOverlap: 0.15,
  overlayIn: 0.4,
};

export default function EnvelopeCTA({
  href = "/app",
  label = "You're invited.",
}) {
  const containerRef = useRef(null);
  const flapRef = useRef(null);
  const letterRef = useRef(null);
  const overlayRef = useRef(null);
  const timelineRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(flapRef.current, {
          rotateX: -90,
          duration: TIMING.flapToEdge,
          ease: "power1.in",
        })
        .set(flapRef.current, {
          zIndex: 1,
        })
        .to(flapRef.current, {
          rotateX: -180,
          duration: TIMING.flapToBack,
          ease: "power1.out",
        })
        .to(
          letterRef.current,
          {
            y: -140,
            zIndex: 40,
            duration: TIMING.letterSlide,
            ease: "power2.out",
          },
          `-=${TIMING.letterOverlap}`
        )
        .to(
          overlayRef.current,
          {
            opacity: 1,
            duration: TIMING.overlayIn,
            ease: "power1.in",
          },
          `-=${TIMING.overlayOverlap}`
        );
    },
    {
      scope: containerRef,
    }
  );

  const handleClick = useCallback(async () => {
    if (isAnimating) return;

    setIsAnimating(true);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(overlayRef.current, {
        opacity: 1,
      });

      navigate(href);
      return;
    }

    const animationDone = new Promise((resolve) => {
      timelineRef.current.eventCallback("onComplete", resolve);
      timelineRef.current.play();
    });

    await animationDone;

    navigate(href);
  }, [isAnimating, href, navigate]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto cursor-pointer select-none"
      style={{
        width: "min(90vw, 480px)",
        perspective: "1600px",
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Open invitation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <img
        src={envelopeBottom}
        width={BOTTOM_DIMS.width}
        height={BOTTOM_DIMS.height}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="relative z-20 block h-auto w-full select-none"
        draggable={false}
      />

      <div
        ref={letterRef}
        className="absolute z-10 flex items-center justify-center rounded-sm bg-stone-50 px-6 text-center shadow-lg"
        style={{
          top: "8%",
          left: "12%",
          right: "12%",
          height: "48%",
        }}
      >
        <p className="text-sm font-medium text-slate-700">
          {label}
        </p>
      </div>

      <img
        ref={flapRef}
        src={envelopeTop}
        width={TOP_DIMS.width}
        height={TOP_DIMS.height}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute top-0 left-0 z-30 block h-auto w-full select-none"
        draggable={false}
        style={{
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
        }}
      />

      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-50 bg-stone-50 opacity-0"
      />
    </div>
  );
}