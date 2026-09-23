import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import InvitationBanner from '../assets/invitation_banner.avif';
import CalendarIcon from '../assets/calendar.svg';
import ClockIcon from '../assets/clock.svg';
import MapPinIcon from '../assets/map-pin.svg';

const HEADLINE = 'We invite you to witness our matrimony';

// Splits text into per-letter spans (for the stagger animation) while keeping
// a full, unsplit copy of the text for screen readers.
function SplitLetters({ text }) {
    const words = text.split(' ');

    return (
        <>
            <span aria-hidden="true">
                {words.map((word, wi) => (
                    <span key={wi} className="inline-block whitespace-nowrap">
                        {word.split('').map((char, ci) => (
                            <span key={ci} className="letter inline-block will-change-transform">
                                {char}
                            </span>
                        ))}
                        {wi < words.length - 1 && '\u00A0'}
                    </span>
                ))}
            </span>
            <span className="sr-only">{text}</span>
        </>
    );
}

function Invitation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [elementVisibility, setElementVisibility] = useState(0);

    const sectionRef = useRef(null);
    const subtitleRef = useRef(null);
    const lineTopRef = useRef(null);
    const titleRef = useRef(null);
    const lineBottomRef = useRef(null);
    const paraRef = useRef(null);
    const detailsRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const FADE_DISTANCE = 250;
        const VIS_RATE = 550;

        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            // How far the section has scrolled up into the viewport: 0 while its
            // top is still at (or below) the bottom of the viewport, growing as
            // it moves further in. This ties the fade to the section's own
            // position instead of the page's total scroll offset.
            const enteredBy = Math.max(window.innerHeight - section.getBoundingClientRect().top, 0);

            const bgProgress = Math.min(enteredBy / FADE_DISTANCE, 2);
            const visProgress = Math.min(enteredBy / VIS_RATE, 1);

            setScrollProgress(2 - bgProgress);
            setElementVisibility(visProgress);
        };

        handleScroll(); // set correct initial values if the page loads mid-scroll
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const isVisible = elementVisibility > 0;

    // Hide everything ahead of its reveal so nothing flashes fully-formed
    // before the timeline below plays it in.
    useLayoutEffect(() => {
        gsap.set(
            [subtitleRef.current, paraRef.current, detailsRef.current],
            { opacity: 0, y: 20 }
        );
        gsap.set([lineTopRef.current, lineBottomRef.current], { opacity: 0, scaleX: 0 });
        if (titleRef.current) {
            gsap.set(titleRef.current.querySelectorAll('.letter'), { opacity: 0, y: 10 });
        }
    }, []);

    // Full-section reveal, fired the moment the container starts its own
    // fade-in (isVisible flips true) so it plays alongside that fade.
    useEffect(() => {
        if (!isVisible || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;

        const letters = titleRef.current?.querySelectorAll('.letter');
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(
                [subtitleRef.current, paraRef.current, detailsRef.current],
                { opacity: 1, y: 0 }
            );
            gsap.set([lineTopRef.current, lineBottomRef.current], { opacity: 1, scaleX: 1 });
            if (letters) gsap.set(letters, { opacity: 1, y: 0 });
            return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.1 })
            .to(lineTopRef.current, { opacity: 1, scaleX: 1, duration: 0.9 }, '-=0.65')
            .to(letters, { opacity: 1, y: 0, duration: 0.8, stagger: 0.045 }, '-=0.5')
            .to(lineBottomRef.current, { opacity: 1, scaleX: 1, duration: 0.8 }, '-=0.4')
            .to(paraRef.current, { opacity: 1, y: 0, duration: 1.1 }, '-=0.5')
            .to(detailsRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=0.6');
    }, [isVisible]);

    return (
        <section
            id="invitation"
            ref={sectionRef}
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
                                <p ref={subtitleRef} className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase">You are invited</p>

                                <div ref={lineTopRef} className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block md:ml-1"></div>

                                <h2
                                    ref={titleRef}
                                    className="uppercase text-center text-title max-w-95 text-title-color tracking-[0.18em] md:text-start lg:max-w-2/3"
                                >
                                    <SplitLetters text={HEADLINE} />
                                </h2>

                                <div ref={lineBottomRef} className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

                                <p ref={paraRef} className="text-center text-content tracking-wider max-w-70 md:text-start lg:max-w-1/2">Join us as we say "I do" and begin this new chapter together. Your presence means everything to us.</p>
                            </div>

                            <div ref={detailsRef} className="details-b mx-auto flex flex-wrap sm:flex-nowrap w-full">
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
