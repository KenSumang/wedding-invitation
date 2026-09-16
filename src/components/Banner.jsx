function Banner() {
    return (
        <section
            id="banner"
            className="banner w-full h-svh bg-[url('./src/assets/A_E_banner_sm.avif')] md:bg-[url('./src/assets/A_E_banner_lg.avif')] bg-[55%_120%] bg-[length:auto_120%] xs:bg-[length:auto_130%] xs:bg-[55%_90%] sm:h-dvh sm:bg-[length:auto_158%] sm:bg-position-[center_67%] md:bg-[length:auto_140%] md:bg-[55%_80%] transition-all duration-300">
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-black z-0"></div>
            <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex flex-col md:items-start md:justify-center">
                    
                    <div className="flex flex-col items-center gap-2.5 mt-auto mb-15 sm:mb-20 sm:gap-5 md:mt-14 md:items-start xl:gap-9">

                        <p className="subtitle text-[13px] tracking-widest text-white sm:text-[14px] md:text-[16px] 2xl:text-[18px]">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col gap-[3px] items-center text-[44px] mb-1 sm:gap-1.5 sm:text-[50px] md:text-[58px] 2xl:text-[74px] md:gap-8 md:items-start 2xl:flex-row transition-all duration-200">
                            <h2 className="font-light tracking-widest leading-12 text-white">ARMAND</h2>
                            <p className="text-[38px] font-light leading-12 text-white sm:text-[40px] md:pr-2 md:text-[64px]">&</p>
                            <h2 className="font-light tracking-widest leading-12 text-white mb-3 xl:mb-0">EDELYN</h2>
                            <div className="line w-12 h-[.4px] bg-white md:hidden"></div>
                        </div>
                        <div className="line hidden w-12 h-[.4px] bg-white md:block xl:w-16"></div>

                        <p className="date text-[16px] tracking-widest text-white sm:text-[18px] md:text-[20px] 2xl:text-[22px]">JANUARY 15, 2027</p>
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
