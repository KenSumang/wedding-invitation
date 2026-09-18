import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import Details from '../components/Details';
// import CountdownTimer from '../components/CountdownTimer';
import Rsvp from '../components/Rsvp';
import Faq from '../components/Faq';
import ScheduleOfEvents from '../components/ScheduleOfEvents';
import DressCode from '../components/DressCode';
import Venue from '../components/venue';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      {/* <Details/> */}
      <DressCode />
      <Faq/>
      <Rsvp/>
      <ScheduleOfEvents />
      <Venue />
      {/* <CountdownTimer /> */}
    </>
  );
}

export default MainPage;