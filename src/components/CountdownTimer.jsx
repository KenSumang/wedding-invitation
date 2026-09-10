import { useState, useEffect } from "react";

const MS_PER_MINUTE = 60_000;
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
    };
  }

  return {
    total,
    weeks: Math.floor(total / MS_PER_WEEK),
    days: Math.floor((total % MS_PER_WEEK) / MS_PER_DAY),
    hours: Math.floor((total % MS_PER_DAY) / MS_PER_HOUR),
    minutes: Math.floor((total % MS_PER_HOUR) / MS_PER_MINUTE),
  };
}

export default function CountdownTimer({
  // Philippine Time (UTC+8)
  targetDate = "2027-01-27T00:00:00+08:00",
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

      const remainder = total % MS_PER_MINUTE;

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
  ];

  const formattedTarget = new Date(targetDate).toLocaleDateString(
    "en-PH",
    {
      timeZone: "Asia/Manila",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="min-h-[260px] bg-[#12141C] text-[#EDE8DD] flex flex-col items-center justify-center px-6 py-12 font-serif">
      {timeLeft.total <= 0 ? (
        <p className="text-3xl m-0">
          The moment has arrived.
        </p>
      ) : (
        <>
          <div className="flex items-stretch">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className={`flex flex-col items-center px-7 ${
                  i === 0
                    ? ""
                    : "border-l border-white/10"
                }`}
              >
                <span className="text-5xl leading-none font-normal text-[#D9A441] tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>

                <span className="mt-2.5 text-xs tracking-wide font-sans text-[#EDE8DD]/60">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm font-sans text-[#EDE8DD]/50">
            until we say 'I do' on {formattedTarget}
          </p>
        </>
      )}
    </div>
  );
}
