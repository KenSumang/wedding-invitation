import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import InvitationPage from "./pages/MainPage";
import PageTransition from "./components/PageTransition";

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