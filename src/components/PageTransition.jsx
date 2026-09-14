import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none bg-stone-50"
    />
  );
}