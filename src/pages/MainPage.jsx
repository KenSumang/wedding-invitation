import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import CountdownTimer from '../components/CountdownTimer';
import { ScheduleOfEvents } from '../components/ScheduleOfEvents';
import DressCode from '../components/DressCode';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      <DressCode />
      <Details />
      <ScheduleOfEvents />
      {/* <CountdownTimer /> */}
    </>
  );
}

export default MainPage;