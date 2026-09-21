import churchImage from '../assets/church.jpg';
import mapIcon from '../assets/map-pin.svg'
import routeIcon from '../assets/venueRouteIcon.svg'

export default function VenueChurch() {
  return (
    <section className="w-full bg-[#eeece8] px-0 md:px-4">
      <div
        className="mx-auto flex max-w-[1400px] flex-col-reverse bg-[#f8f7f4] md:flex-row md:gap-[100px]
        "
      >
        {/* =========================
            CHURCH VENUE CONTENT
        ========================= */}
        <div className="flex w-full flex-col px-8 py-[20px] sm:px-10 md:w-[50%] md:px-12 md:my-[20px] lg:px-12 ">
          <div
            className="
            "
          >
            <div className="details-a flex flex-col mx-auto gap-8 mb-10 md:justify-between md:items-start md:mx-0">
                <p className="uppercase text-subtitle tracking-[0.28em] text-subtitle-color uppercase">Church</p>

                <div className="line hidden w-9 h-[.5px] bg-[#BDBDBD] md:block md:ml-1"></div>

                <h2 className="uppercase text-start text-title max-w-95 text-title-color tracking-[0.18em] lg:max-w-2/3">San Juan Nepomuceno<br />Parish Church</h2>

                <div className="line w-9 h-[.4px] bg-[#BDBDBD] md:hidden xl:w-16"></div>

                <p className="text-start text-content tracking-wider max-w-70 lg:max-w-1/2">
                  In the presence of God and our loved ones,
                  we will exchange our vows and begin
                  this beautiful journey together.
                </p>
            </div>
            
            {/* <div className="mb-6 flex flex-col items-start">
              <span className="mb-5 block h-px w-12 bg-[#555]" />

              <p className="m-0 text-subtitle text-subtitle-color uppercase tracking-[0.28em]">
                Church
              </p>
            </div>

            <h2
              className="m-0 text-title text-title-color uppercase tracking-[0.18em]"
            >
              San Juan Nepomuceno
              <br />
              Parish Church
            </h2>

            <p
              className="m-0 font-sans text-[13px] font-normal leading-[2] max-w-[290px] tracking-[0.06em] text-[#555] md:text-[15px] md:leading-[2.0] md:my-[10px] md:max-w-[330px]
              "
            >
              In the presence of God and our loved ones,
              we will exchange our vows and begin
              this beautiful journey together.
            </p> */}

            {/* Address */}
            <div className="mt-8 flex flex-col items-start gap-4 md:my-[15px] md:gap-[25px]">
              <div className="flex flex-row items-center">
                <div className="h-10 w-10 mr-[20px] ">
                  <img src={mapIcon} alt="Map Icon" />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    San Juan Nepomuceno Parish Church
                  </p>

                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    Padre Burgos Street, Poblacion,                  
                  </p>
                  
                  <p className="m-0 font-sans text-xs leading-[1.3] tracking-[0.08em] text-[#555] md:text-sm">
                    San Juan, Batangas, Philippines
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
                href="https://www.google.com/maps/place/San+Juan+Nepomuceno+Parish+Church/@13.8284924,121.3899852,916m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33bd39748ee1bb35:0x4066f5cc1d2e36f1!8m2!3d13.8284872!4d121.3948508!16s%2Fg%2F11csq7jfqs?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
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
            CHURCH VENUE IMAGE
        ========================= */}
        <div
          className=" h-[390px] w-full overflow-hidden sm:h-[450px] md:h-auto md:min-h-[580px] md:w-[55%]
          "
        >
          <img
            src={churchImage}
            alt="The Garden Valley Hotel"
            className="block h-full w-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}