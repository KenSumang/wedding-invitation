import DressCodeBanner from "../assets/dress_code_banner.avif"

function DressCode() {
    return(
        <section id="dress-code" className="dress-code w-full h-lvh bg-green-200">
            <div className="container max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex">
                    <div className="contents w-full h-full flex flex-col mt-20">
                        <div className="dress-code-details w-full h-fit mb-12 flex flex-col gap-1.5 items-start">
                            <div className="mb-8 sm:mb-10">
                                <p className="uppercase text-[11px] tracking-[0.28em] text-[#555555] uppercase mb-2 sm:text-xs">Dress Code</p>

                                <h2 className="text-3xl tracking-[0.18em] text-[#202020] uppercase sm:text-[32px] mb-4 w-full md:text-[clamp(28px,2.5vw,40px)] md:leading-[1.5] md:tracking-[0.18em]">Attire</h2>
                            </div>

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
                        {/* <div className="description flex flex-col my-auto md:col-span-3 md:h-full md:justify-between">

                            <div className="details-a flex flex-col items-center mx-auto gap-8 mb-10 md:h-full md:justify-between md:items-start md:mx-0">
                                <p className="uppercase text-[14px]">You are invited</p>

                                <div className="line hidden w-12 h-[.5px] bg-black md:block md:ml-1"></div>

                                <h2 className="uppercase text-center text-[22px] max-w-65 md:text-start md:text-[24px] lg:text-[28px] lg:max-w-1/2">We invite you to witness our matrimony</h2>

                                <div className="line w-12 h-[.4px] bg-black md:hidden xl:w-16"></div>

                                <p className="text-center text-[16px] tracking-wider max-w-70 md:text-start lg:max-w-1/2">Join us as we say "I do" and begin this new chapter together. Your presence means everything to us.</p>
                            </div>

                            <div className="details-b mx-auto flex flex-wrap sm:flex-nowrap w-full">
                                <div className="date-time flex mx-auto h-fit justify-between w-full sm:flex-3 md:flex-1">
                                    <div className="date flex-1 flex flex-col gap-3 justify-start items-center lg:justify-center lg:flex-row lg:gap-0 md:justify-between">
                                        <div className="day-and-time md:mr-auto md:ml-[calc(20%-26px)] md:pl-2">
                                            <time dateTime="2027-01-15" className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit md:hidden">January 15<br/> 2027</time>
                                            <time dateTime="2027-01-15" className="uppercase hidden text-[14px] max-w-34 text-center leading-5 h-fit md:block lg:text-start">January 15, 2027</time>
                                            <p className="uppercase hidden text-[14px] max-w-34 text-center leading-5 h-fit md:block lg:text-start">Saturday</p>
                                        </div>
                                    </div>

                                    <div className="line w-[.5px] h-12 bg-black"></div>

                                    <div className="day-time flex-1 flex flex-col gap-3 justify-start items-center lg:justify-center lg:flex-row lg:gap-0">
                                        <div className="day-and-time md:ml-[calc(20%-26px)] md:pl-2">
                                            <p className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit lg:text-start">4:00 PM</p>
                                            <p className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit md:hidden">Saturday</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="line hidden w-[.4px] h-12 bg-black sm:block"></div>

                                <div className="location flex flex-col gap-3 justify-center mt-12 mx-auto sm:mt-0 sm:flex-2 md:flex-1 lg:flex-row lg:gap-0">
                                    <p className="uppercase text-center text-[14px] max-w-68 xs:my-auto lg:text-start md:ml-[calc(10%-26px)] md:pl-2">
                                        San Juan Nepomuceno Church San Juan, Batangas
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DressCode;