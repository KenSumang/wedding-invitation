import InvitationBanner from '../assets/invitation_banner.avif';

import CalendarIcon from '../assets/calendar.svg';
import ClockIcon from '../assets/clock.svg';
import MapPinIcon from '../assets/map-pin.svg';

function Invitation() {
    return (
        <section id="invitation" className="invitation w-full h-lvh md:h-full">
            <div className="container max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full">
                    <div className="contents w-full h-full grid grid-cols-1 md:my-18 md:grid-cols-5">
                        <div className="description flex flex-col my-auto md:col-span-3 md:h-full md:justify-between">

                            {/* <div className="details-a flex flex-col items-center mx-auto gap-8 mb-10 md:gap-2 md:h-full md:items-start md:mx-0 bg-red-200"> */}
                            <div className="details-a flex flex-col items-center mx-auto gap-8 mb-10 md:h-full md:justify-between md:items-start md:mx-0">
                                <p className="uppercase text-[14px]">You are invited</p>

                                <div className="line hidden w-12 h-[.5px] bg-black md:block md:ml-1 xl:w-16"></div>

                                <h2 className="uppercase text-center text-[22px] max-w-65 md:text-start md:text-[24px] lg:text-[28px] lg:max-w-1/2">We invite you to witness our matrimony</h2>

                                <div className="line w-12 h-[.4px] bg-black md:hidden xl:w-16"></div>

                                <p className="text-center text-[16px] tracking-wider max-w-70 md:text-start lg:max-w-1/2">Join us as we say "I do" and begin this new chapter together. Your presence means everything to us.</p>
                            </div>

                            <div className="details-b mx-auto flex flex-wrap sm:flex-nowrap w-full">
                                <div className="date-time flex mx-auto h-fit justify-between w-full sm:flex-3 md:flex-1">
                                    <div className="date flex-1 flex justify-center items-center md:justify-between">
                                        <img src={CalendarIcon} alt="map pin" className="hidden md:block w-5" />
                                        <div className="day-and-time md:mr-auto md:ml-[calc(20%-26px)] md:pl-2">
                                            <p className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit md:hidden">January 15<br/> 2027</p>
                                            <p className="uppercase hidden text-[14px] max-w-34 text-center leading-5 h-fit md:block md:text-start">January 15, 2027</p>
                                            <p className="uppercase hidden text-[14px] max-w-34 text-center leading-5 h-fit md:block md:text-start">Saturday</p>
                                        </div>
                                    </div>

                                    <div className="line w-[.5px] h-14 bg-black xl:h-16"></div>

                                    <div className="day-time flex-1 flex justify-center items-center">
                                        <img src={ClockIcon} alt="map pin" className="hidden md:block w-5" /> 
                                        <div className="day-and-time md:ml-[calc(20%-26px)] md:pl-2">
                                            <p className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit md:text-start">4:00 PM</p>
                                            <p className="uppercase text-[14px] max-w-34 text-center leading-5 h-fit md:hidden">Saturday</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="line hidden w-[.4px] h-14 bg-black sm:block xl:h-16"></div>

                                <div className="location flex justify-center mt-12 mx-auto sm:mt-0 sm:flex-2 md:flex-1">
                                    <img src={MapPinIcon} alt="map pin" className="hidden md:block w-6" />
                                    <p className="uppercase text-center text-[14px] max-w-68 xs:my-auto md:text-start md:ml-[calc(10%-26px)] md:pl-2">
                                        San Juan Nepomuceno Church San Juan, Batangas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="banner hidden md:block bg-red-200 md:col-span-2">
                            <img
                                className="h-full object-cover"
                                src={InvitationBanner}
                                alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Invitation;