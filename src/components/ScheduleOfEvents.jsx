import GuestArrival from '../assets/schedule-guest-arrival.avif';
import Processional from '../assets/schedule-processional.avif';
import WeddingCeremony from '../assets/schedule-wedding-ceremony.avif';
import Portraits from '../assets/schedule-portraits.avif';
import Reception from '../assets/schedule-reception.avif';
import CocktailHour from '../assets/schedule-cocktail-hour.avif';
import TouchUp from '../assets/schedule-touch-up.avif';
import GrandEntrance from '../assets/schedule-grand-entrance.avif';
import Dinner from '../assets/schedule-dinner.avif';
import Closing from '../assets/schedule-closing.avif';

export default function ScheduleOfEvents() {
  const events = [
    {
      time: "12:00 PM",
      title: "Guest arrival & Church assembly",
      icon: GuestArrival,
    },
    {
      time: "12:30 PM",
      title: "Processional",
      icon: Processional,
    },
    {
      time: "1:00 PM",
      title: "WeddingCeremony",
      icon: WeddingCeremony,
    },
    {
      time: "2:30 PM",
      title: "Church family, friends & couple portraits",
      icon: Portraits,
    },
    {
      time: "3:00 PM",
      title: "Reception arrival",
      icon: Reception,
    },
    {
      time: "3:15 PM",
      title: "Welcome & Cocktail hour/ couple post-nuptial photos",
      icon: CocktailHour,
    },
    {
      time: "4:00 PM",
      title: "Couple touch-up",
      icon: TouchUp,
    },
    {
      time: "4:30 PM",
      title: "Grand entrance & start of program",
      icon: GrandEntrance,
    },
    {
      time: "6:00 PM",
      title: "Dinner",
      icon: Dinner,
    },
    {
      time: "7:00 PM",
      title: "Closing remarks & end of program",
      icon: Closing,
    },
  ];

  return (
    <div className="SchedOfEvents w-full h-full">
      <div className="container max-w-full h-full px-4 py-16 sm:px-6 md:py-18 md:px-10 2xl:px-18">
        <div className="wrapper w-full h-full">
          <div className="mobileVersionHeader lg:hidden flex flex-col gap-2">
            <p className="text-subtitle text-subtitle-color tracking-[.28em]">THE BIG DAY</p>
            <p className="text-title text-title-color tracking-[.18em]">SCHEDULE OF EVENTS</p>
            <div className="line w-9 h-[.5px] bg-[#BDBDBD] md:ml-1"></div>
          </div>

          <div className="mobileVersion my-[30px] lg:hidden">
            <div className="relative">

              {/* Continuous vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-neutral-300 ml-[2.5px]" />
 
              {events.map((event) => (
                <div
                  key={event.title}
                  className="relative grid grid-cols-[20px_68px_1fr] gap-x-2 items-center mb-10"
                >

                  {/* Dot */}
                  <div className="relative z-10 flex justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center">
                    <img
                      src={event.icon}
                      alt=""
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  {/* Event details */}
                  <div className="flex flex-col items-start">
                    <p className="text-details tracking-widest">
                      {event.time}
                    </p>

                    <h3 className="mt-1 text-content tracking-wide">
                      {event.title}
                    </h3>
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className="MobileVersionFooter flex flex-col items-center max-w-[250px] mx-auto md:hidden">
              <p className="text-subtitle">LET'S CELEBRATE!</p>
              <div className="line w-9 h-[.5px] bg-[#BDBDBD] mt-8 md:ml-1"></div>
          </div>

          {/* Desktop version*/}
          <div className="desktopVersion hidden w-full lg:flex md:flex-col md:items-center">
            
            <div className="desktopVersionHeader flex flex-col items-center">
              <p className="text-subtitle text-subtitle-color tracking-[.28em]">THE BIG DAY</p>
              <p className="text-title text-title-color tracking-[.18em]">SCHEDULE OF EVENTS</p>
              <hr className="my-3 w-6 border-t bg-black" />
            </div>

            {/* Timeline */}
            <div className="relative flex w-full my-[30px]">

              {/* Continuous horizontal line */}
              <div className="absolute left-0 right-0 top-[4px] h-px bg-neutral-300" />

              {events.map((event) => (
                <div
                  key={event.title}
                  className="relative flex flex-1 flex-col items-center"
                >

                  {/* Circle */}
                  <div className="relative z-10 h-2 w-2 rounded-full border border-neutral-900 bg-gray-500" />

                  {/* Icon */}
                  <div className="mt-6">
                    <img
                      src={event.icon}
                      alt=""
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {/* Event details */}
                  <div className="mt-3 text-center">
                    <p className="text-sm tracking-widest">
                      {event.time}
                    </p>

                    <h3 className="mt-1 text-base font-medium tracking-wide">
                      {event.title}
                    </h3>
                  </div>

                </div>
              ))}

            </div>
            <div className="desktopVersionFooter hidden md:flex md:flex-col md:items-center">
              <p className="text-subtitle">LET'S CELEBRATE!</p>
              <div className="line w-9 h-[.5px] bg-[#BDBDBD] mt-8 md:ml-1"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

      // Desktop version
      // <div className="desktopVersion hidden md:flex md:w-full md:flex-col md:items-center">
        
      //   <div className="desktopVersionHeader flex flex-col items-center">
      //     <p className="text-[10px] tracking-wide">THE BIG DAY</p>
      //     <p className="mt-2 tracking-wide">SCHEDULE OF EVENTS</p>
      //     <hr className="my-3 w-6 border-t bg-black" />
      //   </div>

        {/* Timeline */}
        // <div className="relative flex w-full max-w-5xl my-[30px]">

          {/* Continuous horizontal line */}
          // <div className="absolute left-0 right-0 top-[4px] h-px bg-neutral-300" />

          // {events.map((event) => (
          //   <div
          //     key={event.title}
          //     className="relative flex flex-1 flex-col items-center"
          //   >

              {/* Circle */}
              // <div className="relative z-10 h-2 w-2 rounded-full border border-neutral-900 bg-black" />

              {/* Icon */}
              // <div className="mt-6">
              //   <img
              //     src={event.icon}
              //     alt=""
              //     className="h-8 w-8 object-contain"
              //   />
              // </div>

              {/* Event details */}
      //         <div className="mt-3 text-center">
      //           <p className="text-sm tracking-widest">
      //             {event.time}
      //           </p>

      //           <h3 className="mt-1 text-lg font-medium tracking-wide">
      //             {event.title}
      //           </h3>
      //         </div>

      //       </div>
      //     ))}

      //   </div>
      //   <div className="desktopVersionFooter hidden md:flex md:flex-col md:items-center">
      //     <p>LET'S CELEBRATE!</p>
      //     <hr className="border-t w-12 h-3 border-black mt-[20px]"/>
      //   </div>

      // </div>

    