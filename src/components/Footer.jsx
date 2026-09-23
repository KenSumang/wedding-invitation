import logo from "../assets/Logo.jpg";

const contacts = [
  {
    name: "Armand Jerome Carada",
    href: "https://www.facebook.com/ajbcarada",
  },
  {
    name: "Edelyn Brion",
    href: "https://www.facebook.com/ediiiiipopsicle",
  },
];

function FacebookIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer({ monogram = logo }) {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-6 text-center">

        {/* Monogram */}
        <img
          src={monogram}
          alt="Armand and Edelyn monogram"
          className="h-16 w-auto object-contain md:h-24"
        />

        {/* Date */}
        <p className="mt-1 text-details uppercase tracking-[0.1em] text-white/90">
          January 15, 2027
        </p>

        {/* Divider */}
        <span className="my-2 block h-px w-8 bg-white/40" />

        {/* Thank-you line */}
        <p className="text-details uppercase tracking-[0.1em] text-white/70">
          Thank you for being part of our journey
        </p>

        {/* Contacts */}
        <div className="mt-4 w-full max-w-sm border-t border-white/15 pt-4 md:max-w-lg">
          <ul className="grid grid-cols-2 gap-4">
            {contacts.map(({ name, href }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="text-countdown-label uppercase tracking-[0.2em] text-white/50 md:whitespace-nowrap">
                  {name}
                </span>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Message ${name} on Facebook`}
                  className="mt-0.5 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}