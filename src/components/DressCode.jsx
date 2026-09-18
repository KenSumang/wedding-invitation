import DressCodeBanner from "../assets/dress_code_banner.avif"

function DressCode() {
    return(
        <section id="dress-code" className="dress-code w-full h-lvh">
            <div className="container max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex">
                    <div className="contents w-full h-full flex flex-col mt-20">
                        <div className="dress-code-details w-full h-fit mb-12 flex flex-col gap-1.5 items-start">
                            <p className="uppercase text-[15px] tracking-wide">Dress Code</p>

                            <h2 className="uppercase text-[22px] tracking-widest mb-4 md:text-[24px] lg:text-[28px] w-full">Attire</h2>

                            <p className="text-[15px] tracking-wider mb-6">We'd love to see you in these <br/> colors and styles for our special day.</p>
                        
                            <p className="uppercase tracking-wide text-center w-full">Neutral tones / Semi-Formal</p>
                        </div>

                        <div className="dress-code-examples flex mb-10">
                            <div className="men-example flex flex-col gap-1 items-center max-w-34 mx-auto">
                                <img src="" alt="" className="mb-2" />
                                <p className="uppercase text-[16px]">Gentlemen</p>
                                <p className="text-center text-[15px]">Suit or dress shirt with slacks <br/> (No ripped jeans, no sleeveless shirts)</p>
                            </div>
                            
                            <div className="line w-[.5px] h-auto bg-black"></div>

                            <div className="ladies-example flex flex-col gap-1 items-center max-w-34 mx-auto">
                                <img src="" alt="" className="mb-2" />
                                <p className="uppercase text-[16px]">Ladies</p>
                                <p className="text-center text-[15px]">Cocktail dress or long dress <br/> (Avoid white, cream, or similar bride colors)</p>
                            </div>
                        </div>
                        
                        <div className="banner -mx-4">
                            <img
                                className="w-full h-54 object-cover"
                                src={DressCodeBanner}
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DressCode;