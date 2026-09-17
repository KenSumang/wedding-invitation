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
    return {
      total: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
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
}) {
  const [tick, setTick] = useState(0);

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

      // Update on the next full second
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
    {
      label: "weeks",
      value: timeLeft.weeks,
    },
    {
      label: "days",
      value: timeLeft.days,
    },
    {
      label: "hours",
      value: timeLeft.hours,
    },
    {
      label: "minutes",
      value: timeLeft.minutes,
    },
    {
      label: "seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <div className="min-h-[260px] w-full bg-[#12141C] text-[#EDE8DD] flex flex-col items-center justify-center px-3 sm:px-6 py-10 sm:py-12 font-serif overflow-hidden">
      {timeLeft.total <= 0 ? (
        <p className="text-2xl sm:text-3xl text-center m-0">
          The moment has arrived.
        </p>
      ) : (
        <>
          {/* Countdown */}
          <div className="flex w-full max-w-4xl items-stretch justify-center">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className={`flex flex-1 min-w-0 flex-col items-center px-1 sm:px-2 md:px-7 ${
                  i === 0 ? "" : "border-l border-white/10"
                }`}
              >
                {/* Number */}
                <span
                  className="
                    text-2xl
                    sm:text-4xl
                    md:text-5xl
                    leading-none
                    font-normal
                    text-[#D9A441]
                    tabular-nums
                    font-['Tenor_Sans']
                  "
                >
                  {String(unit.value).padStart(2, "0")}
                </span>

                {/* Label */}
                <span
                  className="
                    mt-2
                    sm:mt-2.5
                    text-[8px]
                    sm:text-xs
                    tracking-wide
                    font-sans
                    text-[#EDE8DD]/60
                  "
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p className="mt-8 sm:mt-10 text-xs sm:text-sm font-sans text-[#EDE8DD]/50 text-center">
            until we say 'I do'
          </p>
        </>
      )}
    </div>
  );
}
