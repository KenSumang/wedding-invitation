import CeremonyImage from '../assets/CeremonyImage.svg';
import DinnerImage from '../assets/DinnerImage.svg';
import PartyImage from '../assets/PartyImage.svg';
import PhotoImage from '../assets/PhotoImage.svg';
import ReceptionImage from '../assets/ReceptionImage.svg';

export default function ScheduleOfEvents() {
  const events = [
    {
      time: "4:00 PM",
      title: "CEREMONY",
      icon: CeremonyImage,
    },
    {
      time: "5:00 PM",
      title: "PHOTO SESSION",
      icon: PhotoImage,
    },
    {
      time: "6:00 PM",
      title: "RECEPTION",
      icon: ReceptionImage,
    },
    {
      time: "7:00 PM",
      title: "DINNER",
      icon: DinnerImage,
    },
    {
      time: "8:00 PM",
      title: "PARTY",
      icon: PartyImage,
    },
  ];

  return (
    <div className="SchedOfEvents mx-auto w-full max-w-5xl px-6 py-[50px]">
      <div className="mobileVersionHeader md:hidden flex flex-col gap-2">
        <p className="text-subtitle text-subtitle-color tracking-[.28em]">THE BIG DAY</p>
        <p className="text-title text-title-color tracking-[.18em]">SCHEDULE OF EVENTS</p>
        <div className="line w-9 h-[.5px] bg-[#BDBDBD] md:ml-1"></div>
      </div>

      <div className="mobileVersion my-[30px] md:hidden">
        <div className="relative">

          {/* Continuous vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-neutral-300 ml-[2.5px]" />

          {events.map((event) => (
            <div
              key={event.title}
              className="relative grid grid-cols-[20px_100px_1fr] gap-x-4 items-center mb-10"
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
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Event details */}
              <div className="flex flex-col items-start">
                <p className="text-sm tracking-widest">
                  {event.time}
                </p>

                <h3 className="mt-1 text-lg font-medium tracking-wide">
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
      <div className="desktopVersion hidden md:flex md:w-full md:flex-col md:items-center">
        
        <div className="desktopVersionHeader flex flex-col items-center">
        <p className="text-subtitle text-subtitle-color tracking-[.28em]">THE BIG DAY</p>
        <p className="text-title text-title-color tracking-[.18em]">SCHEDULE OF EVENTS</p>
          <hr className="my-3 w-6 border-t bg-black" />
        </div>

        {/* Timeline */}
        <div className="relative flex w-full max-w-5xl my-[30px]">

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

                <h3 className="mt-1 text-lg font-medium tracking-wide">
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
  );
}