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
import Footer from '../components/Footer';
import Gift from '../components/Gift';
import Story from '../components/OurStory';
import OurStory from '../components/OurStory';

function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Invitation/>
      <OurStory/>
      <VenueChurch/>
      <VenueReception/>
      <ScheduleOfEvents/>
      <DressCode/>
      <Gift/>
      <Rsvp/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default MainPage;