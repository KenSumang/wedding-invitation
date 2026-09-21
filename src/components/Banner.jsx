import React, { useEffect, useState } from 'react';
import CountdownTimer from "./CountdownTimer";

function Banner() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const FADE_DISTANCE = 280;

        const handleScroll = () => {
            const bgProgress = Math.min(window.scrollY / FADE_DISTANCE, 2);

            setScrollProgress(2 - bgProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    return (
        <section
            id="banner"
            className="banner w-full h-svh bg-[url('./src/assets/A_E_banner_sm.avif')] md:bg-[url('./src/assets/A_E_banner_lg.avif')] bg-[55%_120%] bg-[length:auto_120%] xs:bg-[length:auto_130%] xs:bg-[55%_90%]
            sm:h-dvh sm:bg-[length:auto_158%] sm:bg-position-[center_67%] md:bg-[length:auto_140%] md:bg-[55%_80%]"
            style={{ opacity: scrollProgress}}
            >
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-black z-0"></div>
            <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex flex-col md:items-start md:justify-center">
                    
                    <div className="flex flex-col items-center gap-2.5 mt-auto mb-7 sm:gap-4 md:mt-14 md:items-start xl:gap-9">

                        <p className="subtitle tracking-[.28em] text-banner-subtitle text-white">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col gap-[2px] items-center mb-1 sm:gap-1.5 md:gap-4 lg:gap-8 md:items-start 2xl:flex-row transition-all duration-200">
                            <h2 className="font-light tracking-[.18em] text-banner-heading leading-12 text-white">ARMAND</h2>
                            <p className="font-light leading-12 text-white text-banner-ampersand">&</p>
                            <h2 className="font-light tracking-[.18em] text-banner-heading leading-12 text-white mb-3 xl:mb-0">EDELYN</h2>
                            <div className="line w-12 h-[.4px] bg-white md:hidden"></div>
                        </div>
                        <div className="line hidden w-12 h-[.4px] bg-white md:block xl:w-16"></div>

                        <p className="date tracking-[.16em] text-date text-white mb-2">January 15, 2027</p>

                        <div className="countdown mt-3 sm:mt-5 w-full flex justify-center md:justify-start">
                            <CountdownTimer />
                        </div>
                    </div>
                    
                    <div className="scroll flex flex-col items-center gap-2.5 pb-3 md:hidden">
                        <img src="./src/assets/down-chevron.png" className="w-7" alt="Scroll Down" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner;