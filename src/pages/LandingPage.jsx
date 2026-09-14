// src/pages/LandingPage.jsx

import EnvelopeCTA from '../components/Envelope_landing';

function LandingPage() {
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