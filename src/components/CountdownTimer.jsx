import { useState, useEffect } from "react";

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60 * MS_PER_SECOND;
const MS_PER_HOUR = 60 * MS_PER_MINUTE;
const MS_PER_DAY = 24 * MS_PER_HOUR;
const MS_PER_WEEK = 7 * MS_PER_DAY;

function getTimeRemaining(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const total = target - now;

  if (total <= 0) {
    return { total: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    total,
    weeks: Math.floor(total / MS_PER_WEEK),
    days: Math.floor((total % MS_PER_WEEK) / MS_PER_DAY),
    hours: Math.floor((total % MS_PER_DAY) / MS_PER_HOUR),
    minutes: Math.floor((total % MS_PER_HOUR) / MS_PER_MINUTE),
    seconds: Math.floor((total % MS_PER_MINUTE) / MS_PER_SECOND),
  };
}

export default function CountdownTimer({
  // Philippine Time (UTC+8)
  targetDate = "2027-01-15T12:30:00+08:00",
  // targetDate = "2026-09-19T12:04:00+08:00",
}) {
  const [tick, setTick] = useState(0);
  // Tailwind's default `sm` breakpoint is 640px — keep this in sync if you
  // customize it in tailwind.config.js
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");

    setIsMobile(mql.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    let timeoutId;

    function scheduleNextUpdate() {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const total = target - now;

      if (total <= 0) {
        setTick((t) => t + 1);
        return;
      }

      const remainder = total % MS_PER_SECOND;
      const delay = remainder + 10;

      timeoutId = setTimeout(() => {
        setTick((t) => t + 1);
        scheduleNextUpdate();
      }, delay);
    }

    scheduleNextUpdate();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [targetDate]);

  void tick;

  const timeLeft = getTimeRemaining(targetDate);

  const units = [
    { label: "weeks", abbr: "weeks", value: timeLeft.weeks },
    { label: "days", abbr: "days", value: timeLeft.days },
    { label: "hours", abbr: "hrs", value: timeLeft.hours },
    { label: "minutes", abbr: "mins", value: timeLeft.minutes },
    { label: "seconds", abbr: "sec", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center md:items-start">
      {timeLeft.total <= 0 ? (
        <p className="text-lg uppercase tracking-[.20em] sm:text-xl md:text-2xl text-center md:text-left text-white m-0">
          The moment has arrived.
        </p>
      ) : (
        <div className="flex flex-col items-center md:items-start">
          <div className="flex w-full max-w-md md:max-w-none items-stretch justify-center md:justify-start">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className={`flex flex-1 md:flex-none min-w-0 flex-col items-center pe-1.5 sm:pe-3 md:pe-4 2xl:pe-5 ${
                  i === 0 ? "" : "ps-1.5 sm:ps-3 md:ps-4 2xl:ps-5 border-l border-white/20"
                }`}
              >
                <span
                  className="
                    text-countdown-number
                    leading-none
                    tracking-[.18em]
                    font-normal
                    text-[#D9A441]
                    tabular-nums
                    -mr-[.18em]
                  "
                >
                  {String(unit.value).padStart(2, "0")}
                </span>

                {/* Label */}
                <span
                  className="
                    text-countdown-label
                    mt-1.5
                    sm:mt-2
                    tracking-[.18em]
                    uppercase
                    text-white
                    -mr-[.18em]
                  "
                >
                  {isMobile ? unit.abbr : unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 md:mt-8 md:text-start w-full text-center tracking-[.28em] uppercase text-banner-subtitle text-white">
            until we say 'I do'
          </p>
        </div>
      )}
    </div>
  );
}
