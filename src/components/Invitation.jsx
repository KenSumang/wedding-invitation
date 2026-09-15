import react from 'react';

function Invitation() {
    return (
        <section id="invitation" className="invitation w-full h-dvh bg-blue-200 md:h-[50dvh]">
            <div className="container max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full">
                    <div className="contents w-full h-full grid grid-cols-1 md:grid-cols-5">
                        <div className="description flex flex-col my-auto bg-green-200 md:col-span-3">

                            <div className="details-a flex flex-col items-center mx-auto gap-8">
                                <p className="uppercase text-[14px]">You are invited</p>

                                <div className="line hidden w-12 h-[.5px] bg-black md:block xl:w-16"></div>

                                <h2 className="uppercase text-center text-[22px] max-w-65">We invite you to witness our matrimony</h2>

                                <div className="line w-12 h-[.4px] bg-black md:hidden xl:w-16"></div>

                                <p className="text-center text-[16px] tracking-wider max-w-70">Join us as we say "I do" and begin this new chapter together. Your presence means everything to us.</p>
                            </div>
                            
                            <div className="details-b mx-auto flex flex-wrap md:flex-nowrap bg-red-300">
                                <div className="date-time flex mx-auto h-fit justify-between w-78">
                                    <div className="date flex justify-center items-center bg-blue-200">
                                        <img src="" alt="" className="hidden" />
                                        <div className="day-and-time">
                                            <p className="uppercase text-[16px] max-w-34 text-center h-fit md:hidden">January 15 2027</p>
                                            <p className="uppercase hidden text-[16px] max-w-34 text-center h-fit md:block">January 15, 2027</p>
                                            <p className="uppercase hidden text-[16px] max-w-34 text-center h-fit">Saturday</p>
                                        </div>
                                    </div>

                                    <div className="line w-[.5px] h-14 bg-black xl:h-16"></div>

                                    <div className="day-time flex justify-center items-center bg-blue-200">
                                        <img src="" alt="" className="hidden" />
                                        <div className="day-and-time">
                                            <p className="uppercase text-[16px] max-w-34 text-center h-fit">4:00 PM</p>
                                            <p className="uppercase text-[16px] max-w-34 text-center h-fit">Saturday</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="line hidden w-[.4px] h-26 bg-white md:block xl:h-16"></div>

                                <div className="location col-span-2 flex justify-center mt-12 mx-auto bg-blue-200 md:mt-0 md:col-span-1">
                                    <img src="" alt="" className="hidden" />
                                    <p className="uppercase text-center text-[14px] max-w-68 md:my-auto">San Juan Nepomuceno Church San Juan, Batangas</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner hidden md:block bg-red-200 md:col-span-2"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Invitation;