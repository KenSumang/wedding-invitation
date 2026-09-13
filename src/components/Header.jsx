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
            
            <div className="container relative z-10 max-w-full px-4 sm:px-6 max-w-380">
                <div className="wrapper w-full h-[70px] md:h-[58px]">
                    <div className="contents h-full mx-auto flex items-center justify-between">

                        <div className="header-logo flex items-center gap-1.5 order-first md:order-last">
                            <h2 className="text-[24px] md:text-[26px]">A</h2>
                            <p className="text-[22px] md:text-[24px]">&</p>
                            <h2 className="text-[24px] md:text-[26px]">E</h2>
                        </div>

                        <ul className="header-nav-links flex gap-8 hidden order-last mx-auto md:flex md:order-first text-[14px]">
                            <li>HOME</li>
                            <li>OUR STORY</li>
                            <li>DETAILS</li>
                            <li>RSVP</li>
                            <li>GALLERY</li>
                        </ul>

                        <div className="header-hamburger grid grid-cols-1 gap-1.5 justify-items-center md:hidden py-3 cursor-pointer">
                            <div className="w-[28px] h-0.5 bg-black"></div>
                            <div className="w-[28px] h-0.5 bg-black"></div>
                            <div className="w-[28px] h-0.5 bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;