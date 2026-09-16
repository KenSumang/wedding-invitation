import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import Details from '../components/Details';
import CountdownTimer from '../components/CountdownTimer';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';
import FAQ from '../components/Faq';
import RSVP from '../components/Rsvp';
import Timeline from '../components/Timeline';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      <Details />
      <ScheduleOfEvents />
      <FAQ/>
      <RSVP/>
      <CountdownTimer />
      <Timeline/>
    </>
  );
}

export default MainPage;