import react from 'react';

function Banner() {
    return (
        <section className="banner w-full h-dvh bg-[url('./src/assets/Banner-new.png')] bg-[length:auto_100%] md:bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-black z-0"></div>
            <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 max-w-380">
                <div className="wrapper w-full h-full flex flex-col">
                    
                    <div className="flex flex-col items-center gap-5 mt-auto mb-20">

                        <p className="subtitle text-[14px] tracking-wider text-white">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col gap-1.5 items-center mb-1">
                            <h2 className="text-[50px] font-normal tracking-widest leading-12 text-white">ARMAND</h2>
                            <p className="text-[44px] font-light leading-12 text-white">&</p>
                            <h2 className="text-[50px] font-normal tracking-widest leading-12 text-white mb-3">EDELYN</h2>
                            <div className="line w-12 h-[.4px] bg-white"></div>
                        </div>

                        <p className="date text-[18px] tracking-wider text-white">JUNE 20, 2026</p>
                    </div>
                    
                    <div className="scroll flex flex-col items-center gap-2.5 pb-9">
                        <h2 className="uppercase text-[14px] tracking-wider text-white">Scroll Down</h2>
                        <img src="./src/assets/down-chevron.png" className="w-7" alt="Scroll Down" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner;