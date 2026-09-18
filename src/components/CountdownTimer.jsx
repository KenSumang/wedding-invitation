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
    { label: "weeks", value: timeLeft.weeks },
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center md:items-start font-serif">
      {timeLeft.total <= 0 ? (
        <p className="text-lg sm:text-xl md:text-2xl text-center md:text-left text-white m-0">
          The moment has arrived.
        </p>
      ) : (
        <div className="flex flex-col items-center md:items-start">
          <div className="flex w-full max-w-md md:max-w-none items-stretch justify-center md:justify-start">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className={`flex flex-1 md:flex-none min-w-0 flex-col items-center pr-1.5 sm:pr-3 md:pr-4 2xl:pr-5 ${
                  i === 0
                    ? "pl-0"
                    : "pl-1.5 sm:pl-3 md:pl-4 2xl:pl-5 border-l border-white/20"
                }`}
              >
                {/* Number */}
                <span
                  className="
                    text-lg
                    sm:text-2xl
                    md:text-3xl
                    2xl:text-4xl
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
                    mt-1.5
                    sm:mt-2
                    text-[8px]
                    sm:text-[10px]
                    md:text-[11px]
                    tracking-widest
                    uppercase
                    font-sans
                    text-white/70
                  "
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 md:mt-6 w-full text-center text-sm sm:text-base md:text-lg 2xl:text-xl font-sans text-white/60">
            until we say 'I do'
          </p>
        </div>
      )}
    </div>
  );
}