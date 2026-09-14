import react from 'react';

function Banner() {
    return (
        <section id="banner" className="banner w-full h-dvh bg-[url('./src/assets/A&E_banner_sm.avif')] md:bg-[url('./src/assets/A&E_banner_lg.avif')] bg-[55%_110%] bg-[length:auto_120%] md:bg-[55%_80%] bg-norepeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-black z-0"></div>
            <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex flex-col md:items-start md:justify-center">
                    
                    <div className="flex flex-col items-center gap-5 mt-auto mb-20 md:mt-14 md:items-start xl:gap-9">

                        <p className="subtitle text-[14px] tracking-widest text-white md:text-[18px]">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col gap-1.5 items-center text-[50px] mb-1 md:text-[74px] md:gap-8 md:items-start 2xl:flex-row">
                            <h2 className="font-light tracking-widest leading-12 text-white">ARMAND</h2>
                            <p className="text-[40px] font-light leading-12 text-white md:pr-2 md:text-[64px]">&</p>
                            <h2 className="font-light tracking-widest leading-12 text-white mb-3 xl:mb-0">EDELYN</h2>
                            <div className="line w-12 h-[.4px] bg-white md:hidden"></div>
                        </div>
                        <div className="line hidden w-12 h-[.4px] bg-white md:block xl:w-16"></div>

                        <p className="date text-[18px] tracking-widest text-white md:text-[22px]">JANUARY 15, 2027</p>
                    </div>
                    
                    <div className="scroll flex flex-col items-center gap-2.5 pb-7 md:hidden">
                        <h2 className="uppercase text-[14px] tracking-widest text-white">Scroll Down</h2>
                        <img src="./src/assets/down-chevron.png" className="w-7" alt="Scroll Down" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner;