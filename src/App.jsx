import react from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Details from './components/Details';
import CountdownTimer from './components/CountdownTimer';
import { ScheduleOfEvents } from './components/ScheduleOfEvents';

function App() {

  return (
    <>
      <div className="header-banner h-[45vh] md:h-dvh bg-[url('./src/assets/Banner-Background.png')] bg-no-repeat bg-auto md:bg-cover bg-center">
        <Header />
        <Banner />
      </div>
      <Details />
      <ScheduleOfEvents />
      <CountdownTimer />

    </>
  )
}

export default App;