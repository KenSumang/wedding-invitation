import Header from '../components/Header';
import Banner from '../components/Banner';
import Details from '../components/Details';
import CountdownTimer from '../components/CountdownTimer';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';
import FAQ from '../components/Faq';
import RSVP from '../components/Rsvp';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Details />
      <ScheduleOfEvents />
      <FAQ/>
      <RSVP/>
      <CountdownTimer />
    </>
  );
}

export default MainPage;