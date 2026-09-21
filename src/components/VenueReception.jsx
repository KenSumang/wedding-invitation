import receptionImage from '../assets/reception.jpg';
import mapIcon from '../assets/map-pin.svg'
import routeIcon from '../assets/venueRouteIcon.svg'

export default function VenueReception() {
  return (
    <section className="w-full bg-[#eeece8] px-0 md:px-4">
      <div
        className="mx-auto flex max-w-[1400px] flex-col-reverse bg-[#f8f7f4] md:flex-row-reverse md:gap-[0px]
        "
      >
        {/* =========================
            RECEPTION VENUE CONTENT
        ========================= */}
        <div className="flex w-full flex-col px-8 py-[20px] sm:pr-10 sm:pl-[40px] md:w-[50%] md:pr-12 md:pl-[100px] md:my-[20px] lg:pr-12 ">
          <div
            className="
            "
          >
            {/* Small line + VENUE */}
            
            <div className="details-a flex flex-col mx-auto gap-8 mb-10 md:justify-between md:items-start md:mx-0">
                <p className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase">Reception</p>

                <div className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block md:ml-1"></div>

                <h2 className="uppercase text-start text-title max-w-95 text-title-color tracking-[0.18em] lg:max-w-2/3">El Jardin<br />De Zaida</h2>

                <div className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

                <p className="text-start text-content tracking-wider max-w-70 lg:max-w-1/2">
                  A charming garden venue surrounded by 
                  nature and beautiful views, the perfect place
                  to celebrate the beginning of our forever.
                </p>
            </div>

            {/* <div className="mb-6 flex flex-col items-start">
              <span className="mb-5 block h-px w-12 bg-[#555]" />

              <p className="m-0 text-subtitle text-subtitle-color uppercase tracking-[0.28em]">
                Reception
              </p>
            </div>

            <h2
              className="m-0 text-title text-title-color uppercase tracking-[0.18em]"
            >
              El Jardin
              <br />
              De Zaida
            </h2>

            <p
              className="m-0 font-sans text-[13px] font-normal leading-[2] max-w-[300px] tracking-[0.06em] text-[#555] md:text-[15px] md:leading-[2.0] md:my-[10px] md:max-w-[350px]
              "
            >
              A charming garden venue surrounded by 
              nature and beautiful views, the perfect place
              to celebrate the beginning of our forever.
            </p> */}

            {/* Address */}
            <div className="mt-8 flex flex-col items-start gap-4 md:my-[15px] md:gap-[25px]">
              <div className="flex flex-row items-center">
                <div className="h-10 w-10 mr-[20px] ">
                  <img src={mapIcon} alt="Map Icon" />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    El Jardin de Zaida
                  </p>

                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    Sitio Lagkit, San Juan,                   
                  </p>
                  
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    Batangas, Philippines
                  </p>

                </div>
              </div>
              

              <div className="flex flex-row items-center">
                <div className="h-10 w-10 mr-[20px] ">
                  <img src={routeIcon} alt="Route Icon" />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    El Jardin de Zaida
                  </p>

                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    Sitio Lagkit, San Juan,                   
                  </p>
                  
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    Batangas, Philippines
                  </p>

                </div>
              </div>
            </div>

            {/* View on Map Button */}
            <div className="mapButton flex justify-center items-center">
              <a
                href="https://www.google.com/maps/place/El+Jardin+de+Zaida/@13.7708716,121.408538,917m/data=!3m2!1e3!4b1!4m9!3m8!1s0x33bd3a57568dd317:0x43c752940f86f9b3!5m2!4m1!1i2!8m2!3d13.7708664!4d121.4111183!16s%2Fg%2F11c5b7m7sz?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-[50px] w-[400px] items-center justify-center gap-3 bg-[#202223] px-6 font-sans text-[10px] font-normal tracking-[0.3em] text-white transition duration-300 hover:bg-[#3b3d3e] md:mt-[10px] md:h-[52px] md:w-[300px] md:text-[11px]"
              >
                VIEW ON MAP
                <span className="text-lg leading-none tracking-normal">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            RECEPTION VENUE IMAGE
        ========================= */}
        <div
          className=" h-[390px] w-full overflow-hidden sm:h-[450px] md:h-auto md:min-h-[580px] md:w-[55%]
          "
        >
          <img
            src={receptionImage}
            alt="The Garden Valley Hotel"
            className="block h-full w-auto object-cover"
          />
        </div>
      </div>
    </section>

    
    
    // <section className="w-full bg-[#eeece8] px-0 md:px-4">
    //   <div
    //     className="mx-auto flex max-w-[1400px] flex-col-reverse bg-[#f8f7f4] md:flex-row
    //     "
    //   >
    //     {/* =========================
    //         VENUE CONTENT
    //     ========================= */}
    //     <div
    //       className="flex w-full flex-col items-start px-8 py-12 sm:px-10 md:w-[38%] md:px-12 md:py-24 lg:px-12
    //       "
    //     >
    //       {/* Small line + VENUE */}
    //       <div className="mb-6 flex flex-col items-start">
    //         <span className="mb-5 block h-px w-12 bg-[#555]" />

    //         <p className="m-0 text-[11px] tracking-[0.28em] text-[#555555] uppercase sm:text-xs">
    //           VENUE
    //         </p>
            
    //         <h2
    //           className="m-0 font-normal text-3xl leading-[1.45] tracking-[0.18em] text-[#202020] sm:text-[32px] md:text-[clamp(28px,2.5vw,40px)] md:leading-[1.5] md:tracking-[0.18em]"
    //         >
    //           EL JARDIN
    //           <br />
    //           DE ZAIDA
    //         </h2>
    //       </div>

    //       {/* Title */}

          

    //       {/* Description */}
    //       <p
    //         className="m-0 font-sans text-[13px] font-normal leading-[2] tracking-[0.06em] text-[#555] md:text-[15px] md:leading-[2.1]
    //         "
    //       >
    //         A charming garden venue surrounded by
    //         <br className="hidden md:block" />
    //         nature and beautiful views, the perfect place
    //         <br className="hidden md:block" />
    //         to celebrate the beginning of our forever.
    //       </p>

    //       {/* Address */}
    //       <div className="mt-8 flex flex-col items-center gap-4 md:mt-9 md:gap-[18px]">
    //         <div className="flex flex-row items-center">
    //           <div className="h-10 w-10 mr-[20px] ">
    //             <img src={mapIcon} alt="Map Icon" />
    //           </div>

    //           <div className="flex flex-col gap-1">
    //             <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
    //               El Jardin de Zaida
    //             </p>

    //             <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
    //               Sitio Lagkit, San Juan, 
    //               <br />
    //               Batangas, Philippines
    //             </p>
    //           </div>
    //         </div>
            

    //         <div className="flex flex-row items-center">
    //           <div className="h-10 w-10 mr-[20px] ">
    //             <img src={routeIcon} alt="Route Icon" />
    //           </div>

    //           <div className="flex flex-col gap-1">
    //             <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
    //               El Jardin de Zaida
    //             </p>

    //             <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
    //               Sitio Lagkit, San Juan, 
    //               <br />
    //               Batangas, Philippines
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* View on Map Button */}
    //       <a
    //         href="https://www.google.com/maps/place/El+Jardin+de+Zaida/@13.7708196,121.4108664,115m/data=!3m1!1e3!4m9!3m8!1s0x33bd3a57568dd317:0x43c752940f86f9b3!5m2!4m1!1i2!8m2!3d13.7708664!4d121.4111183!16s%2Fg%2F11c5b7m7sz?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="mt-8 flex h-[50px] w-full items-center justify-center gap-3 bg-[#202223] px-6 font-sans text-[10px] font-normal tracking-[0.3em] text-white transition duration-300 hover:bg-[#3b3d3e] md:mt-9 md:h-[52px] md:w-[235px] md:text-[11px]"
    //       >
    //         VIEW ON MAP
    //         <span className="text-lg leading-none tracking-normal">
    //           →
    //         </span>
    //       </a>
    //     </div>

    //     {/* =========================
    //         VENUE IMAGE
    //     ========================= */}
    //     <div
    //       className=" h-[390px] w-full overflow-hidden sm:h-[450px] md:h-auto md:min-h-[680px] md:w-[62%]
    //       "
    //     >
    //       <img
    //         src={venueImage}
    //         alt="The Garden Valley Hotel"
    //         className="block h-full w-full object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}