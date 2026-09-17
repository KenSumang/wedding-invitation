import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import Rsvp from '../components/Rsvp';
import Faq from '../components/Faq';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';
import DressCode from '../components/DressCode';
import Details from '../components/Details';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      <Details/>
      <DressCode />
      <Faq/>
      <Rsvp/>
      <ScheduleOfEvents />
      {/* <CountdownTimer /> */}
    </>
  );
}

export default MainPage;