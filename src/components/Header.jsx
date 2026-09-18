import React, { useEffect, useState } from 'react';
import CloseButtonIcon from '../assets/close.svg';

import NavData from './NavData';

function NavigationData({ navData }) {
    return (
        <>
            {navData.map((data) => (
                // <li 
                //     key={data.id}
                //     className="h-full flex items-center">
                //     <a className="flex p-2 mx-1 mb-2 items-center 2xl:mb-3 text-nowrap" href={data.link}>{data.label}</a>
                // </li>
                <>
                    <li 
                        key={data.id}
                        className="group flex md:h-full items-center"
                    >
                        <a 
                            className="flex px-5 py-5 w-full md:p-2 md:mx-1 md:mb-2 2xl:mb-3 text-nowrap hover:bg-black/50 hover:backdrop-blur-sm group-hover:text-white group-active"
                            href={data.link}
                        >{data.label}</a>
                    </li>
                </>
            ))}
        </>
    );
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleMenuButton = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

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
                            <NavigationData navData={NavData} />
                        </ul>

                        <div className={`side-nav-links absolute flex flex-col md:hidden top-0 -right-1/2 w-1/2 h-lvh transition-all duration-350 bg-white/30 backdrop-blur-lg ${
                                isSideBarOpen ? "right-0" : "-right-1/2"
                            }`}>
                            
                            <div className="logo-close flex justify-between">
                                <a href="#">
                                    <div className="header-logo flex items-center mx-5 my-2 mt-5.5 gap-2 order-first transition duration-300 text-black">
                                        <h2 className="text-[20px]">A</h2>
                                        <p className="text-[20px]">&</p>
                                        <h2 className="text-[20px]">E</h2>
                                    </div>
                                </a>
                                <img
                                    src={CloseButtonIcon}
                                    alt="close"
                                    className="close-button mr-3 mb-4"
                                    onClick={handleMenuButton}
                                />
                            </div>

                            <ul className="header-side-nav-links h-full flex flex-col text-[11px] uppercase tracking-widest">
                                <NavigationData navData={NavData} />
                            </ul>
                            <div className="line w-full h-[1px] bg-black mx-7"></div>
                        </div>

                        <div
                            className="header-hamburger grid grid-cols-1 gap-1.5 justify-items-center md:hidden py-3 cursor-pointer"
                            onClick={handleMenuButton}
                        >
                            <div className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
                                isScrolled ? "bg-black" : "bg-white"
                            }`}></div>
                            <div className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
                                isScrolled ? "bg-black" : "bg-white"
                            }`}></div>
                            <div className={`w-[26px] h-0.5 transition duration-300 rounded-full ${
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