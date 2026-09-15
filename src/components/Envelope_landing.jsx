import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import envelopeBottom from "../assets/envelope-bottom-mono.avif";
import envelopeTop from "../assets/envelope-top-mono.avif";

const BOTTOM_DIMS = { width: 960, height: 708 };
const TOP_DIMS = { width: 960, height: 489 };

const TIMING = {
  shake: 1,
  flapToEdge: 0.35,
  flapToBack: 0.8,
  letterSlide: 1,
  overlayIn: 0.6,
};

// Same near-white/near-black palette as the envelope itself, so the page
// isn't just flat white behind it — a very soft vignette gives the scene
// depth without introducing a new color.
const PAGE_BG =
  "radial-gradient(120% 90% at 50% 35%, #ffffff 0%, #efefec 100%)";
const INK = "#141312";
const HAIRLINE = "#d8d7d3";

export default function EnvelopeCTA({ href = "/app" }) {
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

        // 1. Shake envelope
        .to(containerRef.current, {
          keyframes: [
            { rotate: -4, duration: TIMING.shake * 0.18 },
            { rotate: 4, duration: TIMING.shake * 0.18 },
            { rotate: -2.5, duration: TIMING.shake * 0.16 },
            { rotate: 2.5, duration: TIMING.shake * 0.16 },
            { rotate: 0, duration: TIMING.shake * 0.32 },
          ],
          ease: "power1.inOut",
        })

        // 2. Open flap
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

        // 3. Letter starts sliding up
        .to(letterRef.current, {
          y: -50,
          zIndex: 15,
          duration: TIMING.letterSlide,
          ease: "power2.out",
        })

        // 4. Transition starts BEFORE letter finishes
        .to(
          overlayRef.current,
          {
            opacity: 1,
            duration: TIMING.overlayIn,
            ease: "power1.inOut",
          },
          `-=${TIMING.overlayIn}`
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
      className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-10 overflow-y-auto px-6 py-10"
      style={{ background: PAGE_BG }}
    >
      <p
        className="text-s uppercase"
        style={{ color: INK, opacity: 0.6, letterSpacing: "0.3em" }}
      >
        You received an invitation
      </p>

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
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Envelope bottom */}
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

        {/* Letter */}
        <div
          ref={letterRef}
          className="absolute z-10 px-6 text-center"
          style={{
            top: "8%",
            left: "1%",
            right: "1%",
            height: "65%",
            background: "#ffffff",
            border: `1px solid ${HAIRLINE}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: INK,
              fontSize: "11px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              textAlign: "center",
              width: "100%",
            }}
          >
            Wedding
          </p>
          <div style={{ height: "1px", width: "32px", background: HAIRLINE }} />
          <p
            style={{
              color: INK,
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textAlign: "center",
              width: "100%",
            }}
          >
            Invitation
          </p>
        </div>

        {/* Envelope top / flap */}
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
            backfaceVisibility: "visible",
          }}
        />
      </div>

      <p
        className="text-s uppercase"
        style={{ color: INK, opacity: 0.5, letterSpacing: "0.3em" }}
      >
        Tap to open
      </p>

      {/* Transition overlay OUTSIDE the transformed envelope */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[9999] opacity-0"
        style={{ background: "#efefec" }}
      />
    </div>
  );
}
