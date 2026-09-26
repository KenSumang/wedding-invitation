import React, { useEffect, useState } from 'react';
import NavData from './NavData';
import LogoBlack from '../assets/Logo_black.avif';
import LogoWhite from '../assets/Logo_white.avif';

function NavigationData({ navData }) {
    return (
        <>
            {navData.map((data) => (
                <li
                    key={data.id}
                    className="group flex md:h-full items-center transition duration-300"
                >
                    {/* Mobile navigation link */}
                    <a
                        className="flex px-5 py-5 w-full md:hidden md:p-2 md:mx-1 md:mb-2 2xl:mb-3 text-nowrap hover:bg-black/50 hover:backdrop-blur-sm group-hover:text-white group-active"
                        href={data.link}
                    >
                        {data.label}
                    </a>

                    {/* Desktop navigation link */}
                    <a
                        className="hidden px-5 py-5 w-full md:flex md:p-2 md:mx-1 md:mb-2 2xl:mb-3 text-nowrap group-active"
                        href={data.link}
                    >
                        {data.label}
                    </a>
                </li>
            ))}
        </>
    );
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleMenuButton = () => {
        setIsSideBarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`header justify-center w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'pb-6'
                    : 'bg-transparent'
            }`}
        >
            {/* Header blur/background layer */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isScrolled
                        ? 'opacity-100'
                        : 'opacity-0'
                }`}
                style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    background:
                        'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0) 100%)',
                    WebkitMaskImage:
                        'linear-gradient(to bottom, black -5px, black 65%, transparent 100%)',
                    maskImage:
                        'linear-gradient(to bottom, black -5px, black 65%, transparent 100%)',
                }}
            />

            {/* Header content */}
            <div className="container relative z-10 max-w-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-[70px] md:h-[58px] 2xl:h-[70px]">
                    <div className="contents h-full mx-auto flex items-center justify-between">

                        {/* Logo */}
                        <a href="#">
                            <div
                                className={`header-logo flex items-center gap-2 order-first transition duration-300 ${
                                    isScrolled
                                        ? 'text-black'
                                        : 'text-white'
                                } ${
                                    isSideBarOpen
                                        ? 'hidden md:flex'
                                        : 'flex'
                                }`}
                            >
                                <div className="logo relative w-16 h-16">
                                    <img
                                        src={LogoWhite}
                                        alt="A & E Logo"
                                        className="w-16 absolute"
                                    />

                                    <img
                                        src={LogoBlack}
                                        alt="A & E Logo"
                                        className={`w-16 absolute transition-all duration-300 ${
                                            isScrolled
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        }`}
                                    />
                                </div>
                            </div>
                        </a>

                        {/* Desktop navigation */}
                        <ul
                            className={`header-nav-links h-full flex gap-1 hidden ml-auto md:flex text-[11px] 2xl:gap-5 uppercase tracking-widest -mr-3 ${
                                isScrolled
                                    ? 'text-black'
                                    : 'text-white'
                            }`}
                        >
                            <NavigationData navData={NavData} />
                        </ul>

                        {/* Mobile sidebar */}
                        <div
                            className={`side-nav-links absolute z-20 flex flex-col md:hidden top-0 w-1/2 h-lvh transition-all duration-300 bg-white/30 backdrop-blur-lg ${
                                isSideBarOpen
                                    ? 'right-0'
                                    : '-right-full'
                            }`}
                        >
                            {/* Sidebar header */}
                            <div className="logo-close flex justify-between">
                                <a href="#">
                                    <div className="header-logo flex items-center mx-5 my-2 mt-5.5 gap-2 order-first transition duration-300 text-black">
                                        <img
                                            src={LogoBlack}
                                            alt="A & E Logo"
                                            className="w-10"
                                        />
                                    </div>
                                </a>

                                {/* Close button */}
                                <div
                                    className="close-button mt-2.5 mr-2.5 cursor-pointer"
                                    onClick={handleMenuButton}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>close-bold</title>

                                        <g fill="currentColor">
                                            <path d="M5.53717 19.5302C5.24427 19.8231 4.7694 19.8231 4.47651 19.5302C4.18361 19.2373 4.18361 18.7624 4.47651 18.4696L18.4764 4.46967C18.7693 4.17678 19.2442 4.17678 19.5371 4.46967C19.8299 4.76256 19.8299 5.23744 19.5371 5.53033L5.53717 19.5302Z" />

                                            <path d="M4.46978 5.53033C4.17689 5.23744 4.17689 4.76256 4.46978 4.46967C4.76268 4.17678 5.23755 4.17678 5.53044 4.46967L19.5303 18.4696C19.8232 18.7625 19.8232 19.2373 19.5303 19.5302C19.2374 19.8231 18.7626 19.8231 18.4697 19.5302L4.46978 5.53033Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            {/* Mobile navigation links */}
                            <ul className="header-side-nav-links h-full flex flex-col text-[11px] uppercase tracking-widest">
                                <NavigationData navData={NavData} />
                            </ul>
                        </div>

                        {/* Hamburger button */}
                        <div
                            className={`header-hamburger grid grid-cols-1 gap-1.5 justify-items-center md:hidden py-3 cursor-pointer ${
                                isSideBarOpen
                                    ? 'hidden'
                                    : 'block'
                            }`}
                            onClick={handleMenuButton}
                        >
                            <div
                                className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
                                    isScrolled
                                        ? 'bg-black'
                                        : 'bg-white'
                                }`}
                            />

                            <div
                                className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
                                    isScrolled
                                        ? 'bg-black'
                                        : 'bg-white'
                                }`}
                            />

                            <div
                                className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
                                    isScrolled
                                        ? 'bg-black'
                                        : 'bg-white'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
