import CeremonyImage from '../assets/CeremonyImage.svg'
import DinnerImage from '../assets/DinnerImage.svg'
import PartyImage from '../assets/PartyImage.svg'
import PhotoImage from '../assets/PhotoImage.svg'
import ReceptionImage from '../assets/ReceptionImage.svg'

export function ScheduleOfEvents() {
  return(
    <section className="schedule w-full h-screen">
        <div className="container max-w-full px-4 sm:px-6 max-w-380">
            <div className="wrapper w-full h-full">
              <div className="flex flex-col justify-center items-center my-8">

                <div>
                  SCHEDULE OF EVENTS
                </div>

                <hr className="my-3 w-6 border-t border-black" />

                <div className="w-full flex items-center">
                  <div className="flex flex-col items-center min-w-fit">
                    <img src={CeremonyImage} alt="Ceremony icon" className="w-[26px]" />
                    <p className="text-[11px] mt-2">4:00 PM</p>
                    <p className="text-[12px] mt-1">CEREMONY</p>
                  </div>

                  <hr className="w-full mx-[3px] mb-auto mt-[13px] h-1 border-t border-black" />

                  <div className="flex flex-col items-center min-w-fit">
                    <img src={PhotoImage} alt="Photo icon" className="w-[26px]" />
                    <p className="text-[11px] mt-2">5:00 PM</p>
                    <p className="text-[12px] mt-1">PHOTOS</p>
                  </div>

                  <hr className="w-full mx-[3px] mb-auto mt-[13px] h-1 border-t border-black" />

                  <div className="flex flex-col items-center min-w-fit">
                    <img src={ReceptionImage} alt="Reception icon" className="w-[26px]" />
                    <p className="text-[11px] mt-2">6:00 PM</p>
                    <p className="text-[12px] mt-1">RECEPTION</p>
                  </div>

                  <hr className="w-full mx-[3px] mb-auto mt-[13px] h-1 border-t border-black" />

                  <div className="flex flex-col items-center min-w-fit">
                    <img src={DinnerImage} alt="Dinner icon" className="w-[26px]" />
                    <p className="text-[11px] mt-2">7:00 PM</p>
                    <p className="text-[12px] mt-1">DINNER</p>
                  </div>

                  <hr className="w-full mx-[3px] mb-auto mt-[13px] h-1 border-t border-black" />

                  <div className="flex flex-col items-center min-w-fit">
                    <img src={PartyImage} alt="Party icon" className="w-[26px]" />
                    <p className="text-[11px] mt-2">8:00 PM</p>
                    <p className="text-[12px] mt-1">PARTY</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>

    
  )
}