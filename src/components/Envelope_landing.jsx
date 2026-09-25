import { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import envelopeBottomAvif from "../assets/envelope-bottom-mono.avif";
import envelopeBottomPng from "../assets/envelope-bottom-mono.png";
import envelopeTopAvif from "../assets/envelope-top-mono.avif";
import envelopeTopPng from "../assets/envelope-top-mono.png";



const BOTTOM_DIMS = { width: 960, height: 708 };
const TOP_DIMS = { width: 960, height: 489 };

const TIMING = {
  shake: 1,
  flapToEdge: 0.35,
  flapToBack: 0.8,
  letterSlide: 1,
  overlayIn: 0.6,
};

const PAGE_BG =
  "radial-gradient(120% 90% at 50% 35%, #ffffff 0%, #efefec 100%)";
const INK = "#141312";
const HAIRLINE = "#d8d7d3";


function prefersReducedMotion() {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function EnvelopeCTA({ href = "/app" }) {
  const containerRef = useRef(null);
  const flapRef = useRef(null);
  const letterRef = useRef(null);
  const overlayRef = useRef(null);
  const timelineRef = useRef(null);
  const bottomImgRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);

  const navigate = useNavigate();

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline({ paused: true })

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

        .to(letterRef.current, {
          y: -50,
          zIndex: 15,
          duration: TIMING.letterSlide,
          ease: "power2.out",
        })

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

  useEffect(() => {
    const imgs = [bottomImgRef.current, flapRef.current].filter(Boolean);
    const pending = imgs.filter((img) => !img.complete);

    if (pending.length === 0) {
      setAssetsReady(true);
      return;
    }

    let remaining = pending.length;
    const done = () => {
      remaining -= 1;
      if (remaining <= 0) setAssetsReady(true);
    };

    pending.forEach((img) => {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true }); // don't get stuck if one fails
    });

    return () => {
      pending.forEach((img) => {
        img.removeEventListener("load", done);
        img.removeEventListener("error", done);
      });
    };
  }, []);

  const handleClick = useCallback(async () => {
    if (isAnimating || !assetsReady) return;

    setIsAnimating(true);

    if (prefersReducedMotion()) {
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
  }, [isAnimating, assetsReady, href, navigate]);

  return (
    <div
      className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-10 overflow-y-auto px-6 py-10"
      style={{ background: PAGE_BG }}
    >
      <p
        className="text-sm uppercase"
        style={{
          color: INK,
          opacity: 0.6,
          letterSpacing: "0.3em",
        }}
      >
        You received an invitation
      </p>

      <div
        ref={containerRef}
        className="relative mx-auto cursor-pointer select-none"
        style={{
          width: "min(90vw, 480px)",
          perspective: "1600px",
          WebkitPerspective: "1600px",
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
          opacity: assetsReady ? 1 : 0.6,
          transition: "opacity 0.3s ease",
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Open invitation"
        aria-disabled={!assetsReady}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Envelope bottom */}
<picture style={{ display: "contents" }}>
  <source srcSet={envelopeBottomAvif} type="image/avif" />
  <img
    ref={bottomImgRef}
    src={envelopeBottomPng}
    width={BOTTOM_DIMS.width}
    height={BOTTOM_DIMS.height}
    alt=""
    loading="eager"
    fetchPriority="high"
    className="relative z-20 block h-auto w-full select-none"
    draggable={false}
    onDragStart={(e) => e.preventDefault()}
  />
</picture>

        {/* Letter */}
        <div
          ref={letterRef}
          className="absolute z-10 px-6 text-center"
          style={{
            top: ".1%",
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
            willChange: "transform",
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

          <div
            style={{
              height: "1px",
              width: "32px",
              background: HAIRLINE,
            }}
          />

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
<picture style={{ display: "contents" }}>
  <source srcSet={envelopeTopAvif} type="image/avif" />
  <img
    ref={flapRef}
    data-testid="envelope-flap"
    src={envelopeTopPng}
    width={TOP_DIMS.width}
    height={TOP_DIMS.height}
    alt=""
    loading="eager"
    fetchPriority="high"
    className="absolute top-0 left-0 z-30 block h-auto w-full select-none"
    draggable={false}
    onDragStart={(e) => e.preventDefault()}
    style={{
      transformOrigin: "top center",
      WebkitTransformOrigin: "top center",
      transformStyle: "preserve-3d",
      WebkitTransformStyle: "preserve-3d",
      backfaceVisibility: "visible",
      WebkitBackfaceVisibility: "visible",
      willChange: "transform",
    }}
  />
</picture>
      </div>

      <p
        className="text-sm uppercase"
        style={{
          color: INK,
          opacity: 0.5,
          letterSpacing: "0.3em",
        }}
      >
        {assetsReady ? "Tap to open" : "Loading..."}
      </p>

      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[9999] opacity-0"
        style={{
          background: "#efefec",
        }}
      />
    </div>
  );
}