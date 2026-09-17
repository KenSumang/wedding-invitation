import venueImage from '../assets/reception.jpg';
import mapIcon from '../assets/map-pin.svg'
import routeIcon from '../assets/venueRouteIcon.svg'

export default function venue() {
  return (
    <section className="w-full bg-[#eeece8] px-0 md:px-4">
      <div
        className="mx-auto flex max-w-[1400px] flex-col-reverse bg-[#f8f7f4] md:flex-row
        "
      >
        {/* =========================
            VENUE CONTENT
        ========================= */}
        <div
          className="flex w-full flex-col items-start px-8 py-12 sm:px-10 md:w-[38%] md:px-12 md:py-24 lg:px-12
          "
        >
          {/* Small line + VENUE */}
          <div className="mb-6 flex flex-col items-start">
            <span className="mb-5 block h-px w-12 bg-[#555]" />

            <p className="m-0 font-sans text-[12px] font-normal tracking-[0.3em] text-[#444] md:text-sm md:tracking-[0.35em]">
              VENUE
            </p>
          </div>

          {/* Title */}
          <h2
            className="m-0 font-sans font-normal text-[28px] leading-[1.45] tracking-[0.18em] text-[#1e2224] sm:text-[32px] md:text-[clamp(28px,2.5vw,40px)] md:leading-[1.5] md:tracking-[0.18em]"
          >
            EL JARDIN
            <br />
            DE ZAIDA
          </h2>

          

          {/* Description */}
          <p
            className="m-0 font-sans text-[13px] font-normal leading-[2] tracking-[0.06em] text-[#555] md:text-[15px] md:leading-[2.1]
            "
          >
            A charming garden venue surrounded by
            <br className="hidden md:block" />
            nature and beautiful views, the perfect place
            <br className="hidden md:block" />
            to celebrate the beginning of our forever.
          </p>

          {/* Address */}
          <div className="mt-8 flex flex-col items-center gap-4 md:mt-9 md:gap-[18px]">
            <div className="flex flex-row items-center">
              <div className="h-10 w-10 mr-[20px] ">
                <img src={mapIcon} alt="Map Icon" />
              </div>

              <div className="flex flex-col gap-1">
                <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
                  El Jardin de Zaida
                </p>

                <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
                  Sitio Lagkit, San Juan, 
                  <br />
                  Batangas, Philippines
                </p>
              </div>
            </div>
            

            <div className="flex flex-row items-center">
              <div className="h-10 w-10 mr-[20px] ">
                <img src={routeIcon} alt="Route Icon" />
              </div>

              <div className="flex flex-col gap-1">
                <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
                  El Jardin de Zaida
                </p>

                <p className="m-0 font-sans text-xs leading-[1.7] tracking-[0.08em] text-[#555] md:text-sm">
                  Sitio Lagkit, San Juan, 
                  <br />
                  Batangas, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* View on Map Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-[50px] w-full items-center justify-center gap-3 bg-[#202223] px-6 font-sans text-[10px] font-normal tracking-[0.3em] text-white transition duration-300 hover:bg-[#3b3d3e] md:mt-9 md:h-[52px] md:w-[235px] md:text-[11px]"
          >
            VIEW ON MAP
            <span className="text-lg leading-none tracking-normal">
              →
            </span>
          </a>
        </div>

        {/* =========================
            VENUE IMAGE
        ========================= */}
        <div
          className=" h-[390px] w-full overflow-hidden sm:h-[450px] md:h-auto md:min-h-[680px] md:w-[62%]
          "
        >
          <img
            src={venueImage}
            alt="The Garden Valley Hotel"
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}