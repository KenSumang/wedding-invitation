import { useEffect, useRef } from "react";
import gsap from "gsap";
import CountdownTimer from "./CountdownTimer";

function Banner() {
    const subtitleRef = useRef(null);
    const armandRef = useRef(null);
    const ampersandRef = useRef(null);
    const edelynRef = useRef(null);
    const lineMobileRef = useRef(null);
    const lineDesktopRef = useRef(null);
    const dateRef = useRef(null);
    const countdownRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const fadeTargets = [
            subtitleRef.current,
            armandRef.current,
            ampersandRef.current,
            edelynRef.current,
            dateRef.current,
            countdownRef.current,
            scrollRef.current,
        ];
        const lines = [lineMobileRef.current, lineDesktopRef.current];

        gsap.set(fadeTargets, { opacity: 0, y: 18 });
        gsap.set(lines, { opacity: 0, scaleX: 0 });
        const handleScroll = () => {
            const bgProgress = Math.min(window.scrollY / FADE_DISTANCE, 2);
            setScrollProgress(2 - bgProgress);
        };

        if (prefersReducedMotion) {
            gsap.set(fadeTargets, { opacity: 1, y: 0 });
            gsap.set(lines, { opacity: 1, scaleX: 1 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap
                .timeline({ defaults: { ease: "power2.out" }, delay: 0.2 })
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9 })
                .to(armandRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.45")
                .to(ampersandRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
                .to(edelynRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.45")
                .to(lineMobileRef.current, { opacity: 1, scaleX: 1, duration: 0.6 }, "-=0.35")
                .to(lineDesktopRef.current, { opacity: 1, scaleX: 1, duration: 0.6 }, "-=0.35")
                .to(dateRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2")
                .to(countdownRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
                .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
        });

        return () => ctx.revert();
    }, []);
    
    return (
        <section
            id="banner"
            className="banner w-full h-svh bg-[url('./src/assets/A_E_banner_sm.avif')] md:bg-[url('./src/assets/A_E_banner_lg.avif')] bg-[55%_120%] bg-[length:auto_120%] xs:bg-[length:auto_130%] xs:bg-[55%_90%] sm:h-dvh sm:bg-[length:auto_158%] sm:bg-position-[center_67%] md:bg-[length:auto_140%] md:bg-[55%_80%] transition-all duration-300" style={{ opacity: window.scrollY === 0 ? 100 : scrollProgress}}>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-black z-0"></div>
            <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex flex-col md:items-start md:justify-center">
                    
                    <div className="flex flex-col items-center gap-2.5 mt-auto mb-7 sm:gap-4 md:mt-14 md:items-start xl:gap-9">

                        <p ref={subtitleRef} className="subtitle tracking-[.28em] text-banner-subtitle text-white">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col gap-[2px] items-center mb-1 sm:gap-1.5 md:gap-4 lg:gap-8 md:items-start 2xl:flex-row transition-all duration-200">
                            <h2 ref={armandRef} className="font-light tracking-[.18em] text-banner-heading leading-12 text-white">ARMAND</h2>
                            <p ref={ampersandRef} className="font-light leading-12 text-white text-banner-ampersand">&</p>
                            <h2 ref={edelynRef} className="font-light tracking-[.18em] text-banner-heading leading-12 text-white mb-3 xl:mb-0">EDELYN</h2>
                            <div ref={lineMobileRef} className="line w-12 h-[.4px] bg-white md:hidden"></div>
                        </div>
                        <div ref={lineDesktopRef} className="line hidden w-12 h-[.4px] bg-white md:block xl:w-16"></div>

                        <p ref={dateRef} className="date tracking-[.16em] text-date text-white mb-2">January 15, 2027</p>

                        <div ref={countdownRef} className="countdown mt-3 sm:mt-5 w-full flex justify-center md:justify-start">
                            <CountdownTimer />
                        </div>
                    </div>
                    
                    <div ref={scrollRef} className="scroll flex flex-col items-center gap-2.5 pb-3 md:hidden">
                        <img src="./src/assets/down-chevron.png" className="w-7" alt="Scroll Down" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner;
