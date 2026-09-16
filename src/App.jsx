import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import InvitationPage from "./pages/MainPage";
import PageTransition from "./components/PageTransition";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop watching once visible
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-up').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.slide-up-delay').forEach(el => {
  observer.observe(el);
});

function App() {
  return (
    <BrowserRouter>
      <PageTransition />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<InvitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;