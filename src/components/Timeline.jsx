import React from "react";
import CeremonyImage from "../assets/ceremony.svg";
import DrinksImage from "../assets/drinks.svg";
import DinnerImage from "../assets/reception.svg";
import PartyImage from "../assets/party.svg";

const events = [
  {
    time: "4:00 PM",
    title: "CEREMONY",
    description: "Wedding ceremony",
    icon: CeremonyImage,
  },
  {
    time: "5:30 PM",
    title: "COCKTAIL HOUR",
    description: "Drinks and light refreshments",
    icon: DrinksImage,
  },
  {
    time: "6:30 PM",
    title: "RECEPTION",
    description: "Dinner and celebration",
    icon: DinnerImage,
  },
  {
    time: "9:00 PM",
    title: "PARTY",
    description: "Drinks, dancing, and fun",
    icon: PartyImage,
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">

      {/* =====================================================
          MOBILE — VERTICAL TIMELINE
          ===================================================== */}

      <div className="md:hidden">
        {events.map((event, index) => (
          <div
            key={event.title}
            className="grid grid-cols-[16px_40px_1fr] gap-x-4"
          >
            {/* Timeline */}
            <div className="relative flex justify-center">
              {/* Vertical line */}
              {index !== events.length - 1 && (
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-neutral-300" />
              )}

              {/* Circle */}
              <div className="relative z-10 mt-[4px] h-2 w-2 rounded-full border border-neutral-900 bg-white" />
            </div>

            {/* Icon */}
            <div className="flex items-start justify-center">
              <img
                src={event.icon}
                alt=""
                className="h-8 w-8 object-contain"
              />
            </div>

            {/* Event details */}
            <div className="pb-12">
              <p className="text-sm tracking-widest text-neutral-500">
                {event.time}
              </p>

              <h3 className="mt-1 text-lg font-medium tracking-wide">
                {event.title}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* =====================================================
          DESKTOP — HORIZONTAL TIMELINE
          ===================================================== */}

      <div className="hidden md:flex md:w-full">
        {events.map((event, index) => (
          <div
            key={event.title}
            className="relative flex flex-1 flex-col items-center"
          >
            {/* Timeline */}
            <div className="relative flex w-full justify-center">

              {/* Line going left */}
              {index !== 0 && (
                <div className="absolute right-1/2 top-1/2 h-px w-1/2 bg-neutral-300" />
              )}

              {/* Line going right */}
              {index !== events.length - 1 && (
                <div className="absolute left-1/2 top-1/2 h-px w-1/2 bg-neutral-300" />
              )}

              {/* Circle */}
              <div className="relative z-10 h-2 w-2 rounded-full border border-neutral-900 bg-white" />
            </div>

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
              <p className="text-sm tracking-widest text-neutral-500">
                {event.time}
              </p>

              <h3 className="mt-1 text-lg font-medium tracking-wide">
                {event.title}
              </h3>

              <p className="mx-auto mt-1 max-w-[160px] text-sm text-neutral-500">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}