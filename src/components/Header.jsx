import react from 'react';

function Header() {

    return (
        <header className="header flex justify-center w-full">
            <div className="container max-w-full px-4 sm:px-6 max-w-380">
                <div className="wrapper w-full h-[44px] md:h-[58px]">
                    <div className="contents h-full mx-auto flex items-center justify-between">

                        <h2 classname="order-first md:order-last">K & CJ</h2>

                        <ul className="header-nav-links flex gap-8 hidden order-last mx-auto md:flex md:order-first text-[14px]">
                            <li>HOME</li>
                            <li>OUR STORY</li>
                            <li>DETAILS</li>
                            <li>RSVP</li>
                            <li>GALLERY</li>
                        </ul>

                        <div className="header-hamburger flex flex-col gap-1 md:hidden">
                            <div className="w-[22px] h-[1.8px] bg-black"></div>
                            <div className="w-[22px] h-[1.8px] bg-black"></div>
                            <div className="w-[22px] h-[1.8px] bg-black"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </header>

        
    );
}

export default Header;