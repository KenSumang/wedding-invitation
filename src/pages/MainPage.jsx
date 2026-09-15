import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import Details from '../components/Details';
import CountdownTimer from '../components/CountdownTimer';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      <Details />
      <ScheduleOfEvents />
      {/* <CountdownTimer /> */}
    </>
  );
}

export default MainPage;