import React from 'react';
import CeremonyImage from '../assets/CeremonyImage.svg'
import DinnerImage from '../assets/DinnerImage.svg'
import PartyImage from '../assets/PartyImage.svg'
import PhotoImage from '../assets/PhotoImage.svg'
import ReceptionImage from '../assets/ReceptionImage.svg'

export function ScheduleOfEvents() {
  const events = [
    {id: 1, icon: CeremonyImage, time: "4:00 PM", title: "CEREMONY"},
    {id: 2, icon: PhotoImage, time: "5:00 PM", title: "PHOTOS"},
    {id: 3, icon: ReceptionImage, time: "6:00 PM", title: "RECEPTION"},
    {id: 4, icon: DinnerImage, time: "7:00 PM", title: "DINNER"},
    {id: 5, icon: PartyImage, time: "8:00 PM", title: "PARTY"}
  ]

  function EventItems({ eventItems }) {
    return(
        eventItems.map((event,index) => {
          const isNotLastItem = index < eventItems.length - 1;

          return(
            <React.Fragment key={event.id}>
              <div className="flex flex-col items-center min-w-fit">
                <img src={event.icon} alt="Ceremony icon" className="w-[26px]" />
                <p className="text-[11px] mt-2">{event.time}</p>
                <p className="text-[12px] mt-1">{event.title}</p>
              </div>

              {isNotLastItem && (
                <hr className="w-full mx-[3px] mb-auto mt-[13px] h-1 border-t border-black" />
              )}
            </React.Fragment>
          );
        })
    );
  }

  return(
    <section className="schedule w-full h-screen">
        <div className="container max-w-full px-4 sm:px-6 max-w-380">
            <div className="wrapper w-full h-full">
              <div className="flex flex-col justify-center items-center my-8">

                <div>
                  SCHEDULE OF EVENTS
                </div>

                <hr className="my-3 w-6 border-t border-black" />

                <div className="w-full flex items-center mt-3">
                  <EventItems eventItems={events} />
                </div>
              </div>
            </div>
        </div>
    </section>

    
  )
}