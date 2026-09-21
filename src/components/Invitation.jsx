import React, { useEffect, useState } from 'react';
import InvitationBanner from '../assets/invitation_banner.avif';
import CalendarIcon from '../assets/calendar.svg';
import ClockIcon from '../assets/clock.svg';
import MapPinIcon from '../assets/map-pin.svg';

function Invitation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [elementVisibility, setElementVisibility] = useState(0);

    useEffect(() => {
        const FADE_DISTANCE = 280;
        const VIS_RATE = 550

        const handleScroll = () => {
            const bgProgress = Math.min(window.scrollY / FADE_DISTANCE, 2);
            const visProgress = Math.min(window.scrollY / VIS_RATE, 1);

            setScrollProgress(2 - bgProgress);
            setElementVisibility(visProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    const isVisible = elementVisibility > 0;

    return (
        <section
            id="invitation"
            className="invitation w-full h-full"
            style={{ backgroundColor: `rgba(0, 0, 0, ${scrollProgress})`}}
            >
            <div className="container max-w-380 mx-auto h-full px-4 py-16 sm:px-6 md:py-18 md:px-10 2xl:px-18">
                <div className="wrapper w-full h-full">
                    <div
                        className="contents w-full h-full grid grid-cols-1 md:grid-cols-5"
                        style={{
                            opacity: elementVisibility,
                            pointerEvents: isVisible ? 'auto' : 'none',
                        }}
                        aria-hidden={!isVisible}
                    >
                        <div className="description flex flex-col my-auto md:col-span-3 md:h-full md:justify-between">

                            <div className="details-a flex flex-col items-center mx-auto gap-8 mb-10 md:h-full md:justify-between md:items-start md:mx-0">
                                <p className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase">You are invited</p>

                                <div className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block md:ml-1"></div>

                                <h2 className="uppercase text-center text-title max-w-95 text-title-color tracking-[0.18em] md:text-start lg:max-w-2/3">We invite you to witness our matrimony</h2>

                                <div className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

                                <p className="text-center text-content tracking-wider max-w-70 md:text-start lg:max-w-1/2">Join us as we say "I do" and begin this new chapter together. Your presence means everything to us.</p>
                            </div>

                            <div className="details-b mx-auto flex flex-wrap sm:flex-nowrap w-full">
                                <div className="date-time flex mx-auto h-fit justify-between w-full sm:flex-3 md:flex-1">
                                    <div className="date flex-1 flex flex-col gap-3 justify-start items-center lg:justify-center lg:flex-row lg:gap-0 md:justify-between">
                                        <img src={CalendarIcon} alt="Calendar" className="hidden md:block w-5" />
                                        <div className="day-and-time md:mr-auto md:ml-[calc(20%-26px)] md:pl-2">
                                            <time
                                                dateTime="2027-01-15"
                                                className="block uppercase text-details max-w-34 text-center leading-5 h-fit md:hidden">January 15<br/>2027</time>
                                            <time
                                                dateTime="2027-01-15"
                                                className="block uppercase hidden text-details max-w-34 text-center leading-6 h-fit md:block md:pr-[8px] lg:pr-[11px] lg:text-start">January 15, 2027</time>
                                            <p className="uppercase hidden text-details max-w-34 text-center leading-6 h-fit md:block lg:text-start">Saturday</p>
                                        </div>
                                    </div>

                                    <div className="line w-[.5px] h-12 bg-[#BDBDBD]"></div>

                                    <div className="day-time flex-1 flex flex-col gap-3 justify-start items-center lg:justify-center lg:flex-row lg:gap-0">
                                        <img src={ClockIcon} alt="Clock" className="hidden md:block w-5" /> 
                                        <div className="day-and-time md:ml-[calc(20%-26px)] md:pl-2">
                                            <p className="uppercase text-details max-w-34 text-center leading-5 h-fit lg:text-start">4:00 PM</p>
                                            <p className="uppercase text-details max-w-34 text-center leading-5 h-fit md:hidden">Saturday</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="line hidden w-[.4px] h-12 bg-[#BDBDBD] sm:block"></div>

                                <div className="location flex flex-col gap-3 justify-center mt-12 mx-auto sm:mt-0 sm:flex-2 md:flex-1 lg:flex-row lg:gap-0">
                                    <img src={MapPinIcon} alt="Location pin" className="hidden md:block w-6 mx-auto lg:mx-0" />
                                    <p className="uppercase text-center text-details max-w-68 xs:my-auto lg:text-start md:ml-[calc(10%-26px)] md:pl-2">
                                        San Juan Nepomuceno Church San Juan, Batangas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="banner hidden md:block md:col-span-2">
                            <img
                                className="w-full h-full object-cover"
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