import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Keep the new page hidden while the transition overlay
    // is covering the screen.
    gsap.set(contentRef.current, {
      opacity: 1,
    });

    // Reveal the new page by fading the overlay away.
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div ref={contentRef}>
        {children}
      </div>

      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[9999] bg-[#efefec]"
      />
    </>
  );
}