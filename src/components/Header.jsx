import React, { useEffect, useState } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`header flex justify-center w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? "pb-6" 
                    : "bg-transparent"
            }`}
        >
            <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isScrolled ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black -5px, black 65%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black -5px, black 65%, transparent 100%)'
                }}
            />
            
            <div className="container relative z-10 max-w-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380">
                <div className="wrapper w-full h-[70px] md:h-[58px] 2xl:h-[70px]">
                    <div className="contents h-full mx-auto flex items-center justify-between">

                        <a href="#">
                            <div className={`header-logo flex items-center gap-2 order-first transition duration-300 ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                                <h2 className="text-[24px] md:text-[26px] 2xl:text-[30px]">A</h2>
                                <p className="text-[22px] md:text-[24px] 2xl:text-[30px]">&</p>
                                <h2 className="text-[24px] md:text-[26px] 2xl:text-[30px]">E</h2>
                            </div>
                        </a>

                        <ul className={`header-nav-links h-full flex gap-1 hidden ml-auto md:flex text-[11px] 2xl:gap-5 uppercase tracking-widest -mr-3 ${
                                isScrolled ? "text-black" : "text-white"
                            }`}>
                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="#banner?">Home</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">Our Story</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">Venue</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">Dress Code</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">Schedule</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">FAQ</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">Gifts</a>
                            </li>

                            <li className="h-full flex items-center">
                                <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href="">RSVP</a>
                            </li>
                        </ul>

                        <div className="header-hamburger grid grid-cols-1 gap-1.5 justify-items-center md:hidden py-3 cursor-pointer">
                            <div className={`w-[26px] h-0.5 transition duration-300 ${
                                isScrolled ? "bg-black" : "bg-white"
                            }`}></div>
                            <div className={`w-[26px] h-0.5 transition duration-300 ${
                                isScrolled ? "bg-black" : "bg-white"
                            }`}></div>
                            <div className={`w-[26px] h-0.5 transition duration-300 ${
                                isScrolled ? "bg-black" : "bg-white"
                            }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;