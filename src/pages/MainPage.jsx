import Header from '../components/Header';
import Banner from '../components/Banner';
import Invitation from '../components/Invitation';
import CountdownTimer from '../components/CountdownTimer';
import FAQ from '../components/Faq';
import RSVP from '../components/Rsvp';
import Timeline from '../components/Timeline';

function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Invitation />
      <FAQ/>
      <RSVP/>
      <CountdownTimer />
      <Timeline/>
    </>
  );
}

export default MainPage;