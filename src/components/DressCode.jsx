import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import inspiration from "../assets/outfit_inspo.jpg";

gsap.registerPlugin(ScrollTrigger);

const inspirationImage = inspiration;

const palette = [
    { name: "Ivory", color: "#FDF0CF" },
    { name: "Buttermilk", color: "#FFE3B0" },
    { name: "Peach", color: "#FFC9A8" },
    { name: "Apricot", color: "#FFB27D" },
    { name: "Coral", color: "#FF9478" },

    { name: "Melon", color: "#FF9B6E" },
    { name: "Pink Peony", color: "#FFB3C6" },
    { name: "Bubblegum", color: "#FFB7D0" },
    { name: "Rose", color: "#FFADA5" },
    { name: "Raspberry", color: "#FF7A85" },

    { name: "Lilac", color: "#E1CCE8" },
    { name: "Lavender", color: "#D2CFE6" },
    { name: "Periwinkle", color: "#BCCBEE" },
    { name: "Sky Blue", color: "#BCD5EE" },
    { name: "Turquoise", color: "#7FD1CF" },

    { name: "Seafoam", color: "#B7DDD2" },
    { name: "Mint", color: "#C6E5CA" },
    { name: "Limeade", color: "#D4E07C" },
    { name: "Pistachio", color: "#CFDDA6" },
    { name: "Leaf Green", color: "#9DB56A" },

    { name: "Soft Taupe", color: "#E1D3C9" },
    { name: "Sand", color: "#EFD7A9" },
    { name: "Oat", color: "#F5E5D3" },
    { name: "Champagne", color: "#F9E7C7" },
    { name: "Warm Beige", color: "#F4DAC1" },
];

const PAGE_SIZE = 10;
const pages = Array.from(
    { length: Math.ceil(palette.length / PAGE_SIZE) },
    (_, i) => palette.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE)
);

function ArrowButton({ direction, onClick, disabled }) {
    const isPrev = direction === "prev";
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={isPrev ? "Previous colors" : "Next colors"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#BDBDBD] text-title-color transition-opacity hover:border-title-color focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-title-color disabled:pointer-events-none disabled:opacity-30 sm:h-9 sm:w-9 md:h-10 md:w-10"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 md:h-5 md:w-5"
            >
                <path d={isPrev ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
            </svg>
        </button>
    );
}

function InspirationModal({ image, onClose, closeRef }) {
    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Outfit inspiration"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-full max-w-3xl items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close outfit inspiration"
                    className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-title-color shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-5 w-5"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>

                {image ? (
                    <img
                        src={image}
                        alt="Outfit inspiration for our guests"
                        className="max-h-[85vh] w-auto max-w-full rounded-sm object-contain"
                    />
                ) : (
                    <p className="rounded-sm bg-white px-6 py-10 text-center text-details tracking-wide text-title-color">
                        Add your outfit inspiration image in DressCode.jsx.
                    </p>
                )}
            </div>
        </div>,
        document.body
    );
}

function DressCode() {
    const scrollerRef = useRef(null);
    const [page, setPage] = useState(0);

    const [inspirationOpen, setInspirationOpen] = useState(false);
    const triggerRef = useRef(null);
    const closeRef = useRef(null);

    // ---- animation refs (attached to elements that already exist; no new
    // wrapper elements, so layout/alignment is untouched) ----
    const headingRootRef = useRef(null);
    const subtitleRef = useRef(null);
    const lineTopRef = useRef(null);
    const titleRef = useRef(null);
    const lineBottomRef = useRef(null);
    const descRef = useRef(null);

    const paletteRootRef = useRef(null);
    const paletteRowRef = useRef(null); // arrows + scroller row
    const dotsRef = useRef(null);
    const captionRef = useRef(null);

    const examplesRootRef = useRef(null);
    const menRef = useRef(null);
    const dividerLineRef = useRef(null);
    const ladiesRef = useRef(null);

    const buttonWrapRef = useRef(null);

    const handleScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const index = Math.round(el.scrollLeft / el.clientWidth);
        setPage(Math.max(0, Math.min(pages.length - 1, index)));
    };

    const goTo = (index) => {
        const el = scrollerRef.current;
        if (!el) return;
        const clamped = Math.max(0, Math.min(pages.length - 1, index));
        el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    };

    // While the popup is open: close on Escape, lock page scroll,
    // focus the close button, and return focus to the trigger on close.
    useEffect(() => {
        if (!inspirationOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setInspirationOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);

        const body = document.body;
        const previousOverflow = body.style.overflow;
        const previousPaddingRight = body.style.paddingRight;

        // Width of the scrollbar that is about to disappear; add it back as
        // padding so the page content doesn't jump sideways.
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
            const currentPadding = parseFloat(getComputedStyle(body).paddingRight) || 0;
            body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
        }
        body.style.overflow = "hidden";

        closeRef.current?.focus();

        const trigger = triggerRef.current;
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            body.style.overflow = previousOverflow;
            body.style.paddingRight = previousPaddingRight;
            trigger?.focus();
        };
    }, [inspirationOpen]);

    // One sequential reveal: heading -> palette -> examples -> button, fired
    // by a single scroll trigger so the four groups always play in strict
    // order, one after another, rather than each on its own scroll position.
    useEffect(() => {
        if (!headingRootRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const headingFades = [subtitleRef.current, titleRef.current, descRef.current];
        const headingLines = [lineTopRef.current, lineBottomRef.current];
        const swatches = scrollerRef.current?.querySelectorAll("li") ?? [];

        gsap.set(headingFades, { opacity: 0, y: 16 });
        gsap.set(headingLines, { opacity: 0, scaleX: 0 });
        gsap.set(paletteRowRef.current, { opacity: 0, y: 16 });
        gsap.set(swatches, { opacity: 0, y: 10 });
        gsap.set([dotsRef.current, captionRef.current], { opacity: 0, y: 12 });
        gsap.set([menRef.current, ladiesRef.current], { opacity: 0, y: 16 });
        gsap.set(dividerLineRef.current, { opacity: 0, scaleY: 0, transformOrigin: "center top" });
        gsap.set(buttonWrapRef.current, { opacity: 0, y: 14, scale: 0.97 });

        if (prefersReducedMotion) {
            gsap.set([...headingFades, paletteRowRef.current, ...swatches, dotsRef.current, captionRef.current, menRef.current, ladiesRef.current], { opacity: 1, y: 0 });
            gsap.set(headingLines, { opacity: 1, scaleX: 1 });
            gsap.set(dividerLineRef.current, { opacity: 1, scaleY: 1 });
            gsap.set(buttonWrapRef.current, { opacity: 1, y: 0, scale: 1 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap
                .timeline({
                    defaults: { ease: "power2.out" },
                    scrollTrigger: { trigger: headingRootRef.current, start: "top 85%", once: true },
                })
                // Heading
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9 })
                .to(lineTopRef.current, { opacity: 1, scaleX: 1, duration: 0.7 }, "-=0.5")
                .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
                .to(lineBottomRef.current, { opacity: 1, scaleX: 1, duration: 0.7 }, "-=0.5")
                .to(descRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
                // Palette (starts only after heading group above has finished)
                .to(paletteRowRef.current, { opacity: 1, y: 0, duration: 0.8 })
                .to(swatches, { opacity: 1, y: 0, duration: 0.5, stagger: 0.025 }, "-=0.45")
                .to(dotsRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
                .to(captionRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
                // Examples (starts only after palette group above has finished)
                .to(menRef.current, { opacity: 1, y: 0, duration: 0.9 })
                .to(dividerLineRef.current, { opacity: 1, scaleY: 1, duration: 0.7 }, "-=0.55")
                .to(ladiesRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
                // Button (starts only after examples group above has finished)
                .to(buttonWrapRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8 });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="dress-code" className="dress-code w-full min-h-lvh pb-16">
            <div className="container max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-full flex">
                    <div className="contents w-full h-full flex flex-col mt-20">

                        {/* Heading */}
                        <div ref={headingRootRef} className="details-a flex flex-col items-center mx-auto gap-8 mb-10 md:justify-between md:items-start md:mx-0">
                            <p ref={subtitleRef} className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color">Dress Code</p>

                            <div ref={lineTopRef} className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block md:ml-1"></div>

                            <h2 ref={titleRef} className="uppercase text-center text-title max-w-95 text-title-color tracking-[0.18em] md:text-start lg:max-w-2/3">Attire</h2>

                            <div ref={lineBottomRef} className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

                            <p ref={descRef} className="text-center text-content tracking-wider max-w-80 md:text-start lg:max-w-1/2">
                                There is no specific color palette for our guests. We invite you to express your personal style and choose the colors you like from these options, while keeping your attire formal, elegant, and celebration-ready.
                            </p>
                        </div>

                        {/* Palette + details: stacked on mobile/tablet, side by side on desktop (lg = 1024px+) */}
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">

                            {/* Color palette: swipeable, 2 rows x 5 per page, arrows beside it */}
                            <div ref={paletteRootRef} className="palette flex w-full min-w-0 flex-col items-center gap-4 lg:w-1/2">
                                <div ref={paletteRowRef} className="flex w-full max-w-md items-center gap-1 sm:gap-3 md:max-w-xl lg:max-w-none">
                                    <ArrowButton direction="prev" onClick={() => goTo(page - 1)} disabled={page <= 0} />

                                    <div
                                        ref={scrollerRef}
                                        onScroll={handleScroll}
                                        className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                    >
                                        {pages.map((items, pageIndex) => (
                                            <ul
                                                key={pageIndex}
                                                aria-label={`Color palette, page ${pageIndex + 1} of ${pages.length}`}
                                                className="grid w-full shrink-0 snap-center grid-cols-5 content-start gap-x-1 gap-y-5 sm:gap-x-2 md:gap-y-6"
                                            >
                                                {items.map(({ name, color }) => (
                                                    <li key={name} className="flex flex-col items-center gap-2">
                                                        <span
                                                            aria-hidden="true"
                                                            className="block aspect-square w-full max-w-12 rounded-full ring-1 ring-black/5 sm:max-w-14 md:max-w-16"
                                                            style={{ backgroundColor: color }}
                                                        ></span>
                                                        <span className="text-center text-countdown-label uppercase tracking-normal text-title-color wrap-break-word sm:tracking-wide">
                                                            {name}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>

                                    <ArrowButton direction="next" onClick={() => goTo(page + 1)} disabled={page >= pages.length - 1} />
                                </div>

                                {/* Page dots (tap to jump) */}
                                <div ref={dotsRef} className="flex items-center gap-2">
                                    {pages.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => goTo(index)}
                                            aria-label={`Show color page ${index + 1}`}
                                            aria-current={page === index}
                                            className={`h-1.5 rounded-full transition-all ${
                                                page === index ? "w-5 bg-title-color" : "w-1.5 bg-[#BDBDBD]"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <p ref={captionRef} className="mt-2 uppercase text-center text-details tracking-[0.2em] pl-[0.2em]">
                                    Formal attire • Light &amp; airy • Spring &amp; summer-inspired
                                </p>
                            </div>

                            {/* Gentlemen / Ladies */}
                            <div ref={examplesRootRef} className="dress-code-examples flex w-full min-w-0 max-w-2xl gap-4 mx-auto lg:mx-0 lg:w-1/2">

                            <div ref={menRef} className="men-example flex flex-1 flex-col items-center gap-2">
                                <p className="flex min-h-[52px] items-center text-center uppercase text-details tracking-[0.2em] pl-[0.2em]">
                                    For the gentlemen
                                </p>

                                <p className="max-w-56 text-center text-details tracking-wide">
                                    Formal suits or coats are encouraged. Please choose any color above you prefer, except gray.
                                </p>
                            </div>

                            <div ref={dividerLineRef} className="line w-[.5px] self-stretch bg-[#BDBDBD]"></div>

                            <div ref={ladiesRef} className="ladies-example flex flex-1 flex-col items-center gap-2">
                                <p className="flex min-h-[52px] items-center text-center uppercase text-details tracking-[0.2em] pl-[0.2em]">
                                    For the ladies
                                </p>

                                <p className="max-w-56 text-center text-details tracking-wide">
                                    Long formal dresses or floor-length gowns in any color above or any print are welcome. We kindly ask that you reserve white for the bride.
                                </p>
                            </div>

                            </div>
                        </div>

                        {/* Outfit inspiration button: bottom center */}
                        <div ref={buttonWrapRef} className="mt-12 flex justify-center">
                            <button
                                ref={triggerRef}
                                type="button"
                                onClick={() => setInspirationOpen(true)}
                                aria-haspopup="dialog"
                                className="mt-8 flex h-[50px] w-full max-w-[400px] items-center justify-center gap-3 bg-[#202223] px-6 font-sans text-[10px] font-normal uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-[#3b3d3e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#202223] md:mt-[10px] md:h-[52px] md:w-[300px] md:text-[11px]"
                            >
                                Click for Outfit Inspiration
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {inspirationOpen && (
                <InspirationModal
                    image={inspirationImage}
                    closeRef={closeRef}
                    onClose={() => setInspirationOpen(false)}
                />
            )}
        </section>
    )
}

export default DressCode;
