import react from 'react';

function Banner() {
    return (
        <section className="banner w-full h-dvh bg-[url('./src/assets/Banner-new.png')] bg-no-repeat md:bg-cover bg-center">
            <div className="container max-w-full px-4 sm:px-6 max-w-380">
                <div className="wrapper w-full h-full">
                    <div className="flex flex-col items-center gap-2 pb-3 pt-19 md:scale-150 lg:scale-200">

                        <p className="subtitle text-[10px] tracking-wider text-white">TOGETHER FOREVER</p>

                        <div className="banner-title flex flex-col items-center gap-[3px]">
                            <h2 className="text-4xl font-semibold tracking-widest text-white">KENT</h2>
                            <p className="text-3xl font-light text-white">&</p>
                            <h2 className="text-4xl font-semibold tracking-widest text-white">CJ</h2>
                            <div className="line w-8 h-[.4px] bg-white"></div>
                        </div>

                        <p className="date text-[10px] tracking-wider text-white">JUNE 20, 2026</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;