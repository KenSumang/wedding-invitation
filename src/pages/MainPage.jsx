import Header from '../components/Header';
import Banner from '../components/Banner';
import Details from '../components/Details';
import CountdownTimer from '../components/CountdownTimer';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Details />
      <ScheduleOfEvents />
      <CountdownTimer />
    </>
  );
}

export default MainPage;