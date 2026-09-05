import react from 'react';

function Banner() {
    return (
        <section className="banner w-full h-screen">
            <div className="container max-w-full px-4 sm:px-6 max-w-380">
                <div className="wrapper w-full h-full">
                    <div className="flex flex-col items-center gap-2 pb-3 pt-19 md:scale-150 lg:scale-200">
                        <div className="banner-title flex flex-col items-center gap-[3px]">
                            <h2 className="text-4xl font-semibold tracking-widest">KENT</h2>
                            <div className="ampersand flex items-center gap-3">
                                <div className="line w-8 h-[.4px] bg-black"></div>
                                <p className="text-3xl font-light">&</p>
                                <div className="line w-8 h-[.4px] bg-black"></div>
                            </div>
                            <h2 className="text-4xl font-semibold tracking-widest">CJ</h2>
                        </div>
                        <div className="subtitle-date flex flex-col items-center gap-1">
                            <p className="subtitle text-[10px] tracking-wider">WE ARE GETTING MARRIED</p>
                            <p className="date text-[10px] tracking-wider">JUNE 20, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;