import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import churchImage from '../assets/church.jpg';
import mapIcon from '../assets/map-pin.svg'
import routeIcon from '../assets/venueRouteIcon.svg'

export default function VenueChurch() {
  const [elementVisibility, setElementVisibility] = useState(0);
  const hasAnimatedRef = useRef(false);

  const sectionRef = useRef(null);
  const mobileTitleRef = useRef(null);
  const mobileLineRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const addressRowRef = useRef(null);
  const routeRowRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const VIS_RATE = 550;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const enteredBy = Math.max(window.innerHeight - section.getBoundingClientRect().top, 0);
      const visProgress = Math.min(enteredBy / VIS_RATE, 1);

      setElementVisibility(visProgress);
    };

    handleScroll(); // set correct initial value if the page loads mid-scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const isVisible = elementVisibility > 0;

  useLayoutEffect(() => {
    gsap.set(
      [
        mobileTitleRef.current,
        subtitleRef.current,
        titleRef.current,
        paraRef.current,
        addressRowRef.current,
        routeRowRef.current,
        buttonRef.current,
      ],
      { opacity: 0, y: 20 }
    );
    gsap.set([mobileLineRef.current, lineRef.current], { opacity: 0, scaleX: 0 });
    gsap.set(imageRef.current, { opacity: 0, scale: 1.15 });
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          mobileTitleRef.current,
          subtitleRef.current,
          titleRef.current,
          paraRef.current,
          addressRowRef.current,
          routeRowRef.current,
          buttonRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      gsap.set([mobileLineRef.current, lineRef.current], { opacity: 1, scaleX: 1 });
      gsap.set(imageRef.current, { opacity: 1, scale: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 1.4 })
      .to(mobileTitleRef.current, { opacity: 1, y: 0, duration: 0.9 }, '-=1.1')
      .to(mobileLineRef.current, { opacity: 1, scaleX: 1, duration: 0.7 }, '-=0.8')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.1 }, '-=0.9')
      .to(lineRef.current, { opacity: 1, scaleX: 1, duration: 0.9 }, '-=0.65')
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
      .to(paraRef.current, { opacity: 1, y: 0, duration: 1.1 }, '-=0.5')
      .to(addressRowRef.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.6')
      .to(routeRowRef.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.7')
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 1.1 }, '-=0.7');
  }, [isVisible]);

  return (
    <section id="venue" ref={sectionRef} className="w-full bg-[#eeece8]">
      <div
        className="grid w-full grid-cols-1 bg-[#f8f7f4] p-4 sm:p-6 md:grid-cols-[45%_55%] md:gap-10 md:p-10 2xl:p-18"
        style={{
          opacity: elementVisibility,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        aria-hidden={!isVisible}
      >

        {/* =========================
            MOBILE-ONLY TITLE
        ========================= */}
        <div ref={mobileTitleRef} className="order-1 flex flex-col gap-[10px] mt-[20px] md:hidden">
          <p className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase">Church</p>

          <div ref={mobileLineRef} className="line w-9 h-[.4px] bg-[#BDBDBD] mb-[15px] md:hidden"></div>

          <h2 className="uppercase text-start text-title max-w-95 text-title-color tracking-[0.18em]">San Juan Nepomuceno<br />Parish Church</h2>
        </div>

        {/* =========================
            CHURCH VENUE IMAGE
            (2nd on mobile, right side on desktop — matches content column's spacing)
        ========================= */}
        <div className="order-2 h-[390px] w-full overflow-hidden sm:h-[450px] md:h-[580px]">
          <img
            ref={imageRef}
            src={churchImage}
            alt="San Juan Nepomuceno Church"
            className="block h-full w-full object-cover object-center will-change-transform"
          />
        </div>

        {/* =========================
            CHURCH VENUE CONTENT
            (3rd/last on mobile, left side on desktop)
        ========================= */}
        <div className="order-3 md:order-1 flex w-full flex-col pb-[20px]">
          <div className="">
            <div className="details-a flex flex-col gap-8 mb-10 md:justify-between md:items-start">
              <p ref={subtitleRef} className="hidden uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase md:block">Church</p>

              <div ref={lineRef} className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block"></div>

              <h2 ref={titleRef} className="hidden uppercase text-start text-title max-w-95 text-title-color tracking-[0.18em] md:block lg:max-w-2/3">San Juan Nepomuceno<br />Parish Church</h2>

              <div className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

              <p ref={paraRef} className="text-start text-content tracking-wider lg:max-w-1/2">
                In the presence of God and our loved ones, we will exchange our vows and begin
                this beautiful journey together.
              </p>
            </div>

            {/* Address / Getting There */}
            <div className="flex flex-col gap-10 md:gap-12">
              <div ref={addressRowRef} className="flex flex-row items-start gap-6">
                <div className="h-10 w-10 shrink-0">
                  <img src={mapIcon} alt="Map Icon" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="m-0 font-sans text-xs font-medium uppercase leading-[1.6] tracking-[0.2em] text-[#555] md:text-sm">
                    San Juan Nepomuceno Parish Church
                  </p>

                  <p className="m-0 font-sans text-xs leading-[1.8] tracking-[0.1em] text-[#888] md:text-sm">
                    Padre Burgos Street, Poblacion,<br />
                    San Juan, Batangas, Philippines
                  </p>
                </div>
              </div>

              <div ref={routeRowRef} className="flex flex-row items-start gap-6">
                <div className="h-10 w-10 shrink-0">
                  <img src={routeIcon} alt="Route Icon" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="m-0 font-sans text-xs font-medium uppercase leading-[1.6] tracking-[0.2em] text-[#555] md:text-sm">
                    Getting There
                  </p>

                  <p className="m-0 font-sans text-xs leading-[1.8] tracking-[0.1em] text-[#888] md:text-sm">
                    More information about transportation and directions will be provided soon.
                  </p>
                </div>
              </div>
            </div>

            {/* View on Map Button */}
            <div ref={buttonRef} className="mapButton mt-12 flex justify-center items-center md:mt-16">
              
              <a  href="https://www.google.com/maps/place/San+Juan+Nepomuceno+Parish+Church/@13.8284924,121.3899852,916m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33bd39748ee1bb35:0x4066f5cc1d2e36f1!8m2!3d13.8284872!4d121.3948508!16s%2Fg%2F11csq7jfqs?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[50px] w-[400px] items-center justify-center gap-3 bg-[#202223] px-6 font-sans text-[10px] font-normal tracking-[0.3em] text-white transition duration-300 hover:bg-[#3b3d3e] md:h-[52px] md:w-[300px] md:text-[11px]"
              >
                VIEW ON MAP
                <span className="text-lg leading-none tracking-normal">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
