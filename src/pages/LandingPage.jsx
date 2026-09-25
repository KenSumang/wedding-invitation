
import { useEffect } from "react";
import EnvelopeCTA from '../components/Envelope_landing';
import { prefetchImages } from '../utils/prefetchImages';

import bannerSm from '../assets/A_E_banner_sm.avif';
import bannerLg from '../assets/A_E_banner_lg.avif';

import logoBlack from '../assets/Logo_black.avif';
import logoWhite from '../assets/Logo_white.avif';

function LandingPage() {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    prefetchImages([
      isDesktop ? bannerLg : bannerSm,
      logoBlack,
      logoWhite,
    ]);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-100">
      <EnvelopeCTA
        href="/app"
        label="You're invited."
      />
    </main>
  );
}

export default LandingPage;