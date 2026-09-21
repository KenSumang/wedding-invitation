import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import Details from '../components/Details';
import ScheduleOfEvents from '../components/ScheduleOfEvents';
import Rsvp from '../components/Rsvp';
import Faq from '../components/Faq';
import DressCode from '../components/DressCode';
import CountdownTimer from '../components/CountdownTimer';
import VenueChurch from '../components/VenueChurch';
import VenueReception from '../components/VenueReception';

function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Invitation />
      {/* <Details/> */}
      <DressCode />
      <Faq/>
      <ScheduleOfEvents />
      <VenueChurch />
      <VenueReception />
      <Rsvp/>
    </div>
  );
}

export default MainPage;