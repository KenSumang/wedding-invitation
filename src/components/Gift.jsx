

export default function Gift() {
  return(
    <section className="Gifts w-full min-h-screen bg-[#F8F8F6] py-[30px]">
      <div className="w-full h-full">
        <div className="max-w-full h-full flex flex-col items-end mr-[15px] md:items-center md:mr-[0px]">

          {/* ================= HEADER CENTER ================= */}
          <div className="flex items-start justify-between">

            {/* Date */}
            <div className="pt-1 text-2xl tracking-[0.25em] sm:text-3xl">
              01 . 15 . 27
            </div>

          </div>


          {/* ================= GIFT GUIDE ================= */}
          <div className="mt-10 text-right md:text-center">

            <h2 className="font-['cursive'] text-2xl italic tracking-wide">
              Gift Guide
            </h2>

            <p className="ml-auto mt-5 max-w-xl  text-sm font-semibold uppercase leading-[1.55] tracking-[0.08em] sm:text-base">
              Your presence at our wedding
              <br />
              is already the greatest gift we could
              <br />
              ask for. Should you wish to bless us
              <br />
              with a gift, a monetary gift toward
              <br />
              our future together
              <br />
              would be sincerely appreciated.
            </p>

          </div>


          {/* ================= DECORATIVE DIVIDER ================= */}
          <div className="relative flex items-center my-[40px] mr-[0px] w-[60%] md:my-[20px] md:w-[30%] md:mr-[0px] text-stone-500">
            <div className="h-px flex-1 bg-current" />

            <svg
              className="relative z-10 -mx-[1px]"
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
            >
              <path
                d="M18 3
                  C15 3 15 7 11 10
                  C15 13 15 17 18 17
                  C21 17 21 13 25 10
                  C21 7 21 3 18 3Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <circle
                cx="18"
                cy="10"
                r="2"
                fill="currentColor"
              />

              <path
                d="M11 10H2M25 10H34"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <div className="h-px flex-1 bg-current" />
          </div>


          {/* ================= NOTE FROM COUPLE ================= */}
          <div className="text-right md:text-center">

            <h2 className="font-['cursive'] text-2xl italic tracking-wide">
              A Note from the Couple
            </h2>


            <div className="mt-5 text-sm font-semibold uppercase leading-[1.6] tracking-[0.08em] sm:text-base">

              <p>
                Having you with us as we begin this new
                <br />
                chapter means more to us than we can
                <br />
                put into words.
              </p>


              <p className="mt-6">
                We are grateful for the love, friendship,
                <br />
                and memories we have shared with you,
                <br />
                and we would be honored to have you
                <br />
                witness one of the most meaningful days
                <br />
                of our lives.
              </p>


              <p className="mt-6">
                We cannot wait to celebrate with you!
              </p>

            </div>


            {/* ================= SIGNATURE ================= */}
            <div className="mt-8 text-right md:text-center">

              <p className=" text-sm font-semibold uppercase tracking-[0.08em] sm:text-base">
                With Love,
              </p>

              <p className="mt-5 text-base font-semibold uppercase tracking-[0.08em] sm:text-lg">
                Armand <span className="text-xl">&amp;</span> Edelyn
              </p>

            </div>
          </div>


        </div>
      </div>
    </section>
  )
}