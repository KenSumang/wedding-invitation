import CeremonyImage from '../assets/CeremonyImage.svg'
import DinnerImage from '../assets/DinnerImage.svg'
import PartyImage from '../assets/PartyImage.svg'
import PhotoImage from '../assets/PhotoImage.svg'
import ReceptionImage from '../assets/ReceptionImage.svg'

export function ScheduleOfEvents() {
  return(
    <div className="wrapper flex flex-col justify-center items-center my-8">
      <div>
        SCHEDULE OF EVENTS
      </div>
      <hr className="my-3 w-5 border-t border-black" />
      <div className="flex">
        <div className="flex flex-col items-center">
          <img src={CeremonyImage} alt="Ceremony icon" className="w-[35px] h-[35px]" />
          <p className="text-[12px] mt-2">4:00 PM</p>
          <p className="text-[13px] mt-1">CEREMONY</p>
        </div>
        <hr className="my-3 w-5 border-t border-black" />
        <div className="flex flex-col items-center">
          <img src={PhotoImage} alt="Photo icon" className="w-[35px] h-[35px]" />
          <p className="text-[12px] mt-2">5:00 PM</p>
          <p className="text-[13px] mt-1">PHOTOS</p>
        </div>
        <hr className="my-3 w-5 border-t border-black" />
        <div className="flex flex-col items-center">
          <img src={ReceptionImage} alt="Reception icon" className="w-[35px] h-[35px]" />
          <p className="text-[12px] mt-2">6:00 PM</p>
          <p className="text-[13px] mt-1">RECEPTION</p>
        </div>
        <hr className="my-3 w-5 border-t border-black" />
        <div className="flex flex-col items-center">
          <img src={DinnerImage} alt="Dinner icon" className="w-[35px] h-[35px]" />
          <p className="text-[12px] mt-2">7:00 PM</p>
          <p className="text-[13px] mt-1">DINNER</p>
        </div>
        <hr className="my-3 w-5 border-t border-black" />
        <div className="flex flex-col items-center">
          <img src={PartyImage} alt="Party icon" className="w-[35px] h-[35px]" />
          <p className="text-[12px] mt-2">8:00 PM</p>
          <p className="text-[13px] mt-1">PARTY</p>
        </div>
      </div>
    </div>
  )
}