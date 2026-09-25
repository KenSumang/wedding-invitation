import OurStoryImage from '../assets/OurStoryImage.jpg'

export default function OurStory() {
  return(
     <section className="ourstory w-full h-full">
      <div className="container relative z-10 max-w-full h-full px-4 sm:px-6 md:px-10 2xl:px-18 max-w-380 py-16">
        <div className="wrapper w-full h-full overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* =========================
                IMAGE
            ========================== */}
            <div className="relative h-[500px] self-center sm:h-[650px] lg:h-[650px]">
              <img
                src={OurStoryImage}
                alt="Our story"
                className="h-full w-full object-cover"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* =========================
                STORY CONTENT
            ========================== */}
            <div className="relative flex items-center px-7 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20 xl:px-16 min-w-0">

              <div className="relative z-10 w-full max-w-2xl min-w-0">

                {/* Section Label */}
                <div className="mb-6 flex flex-col items-start gap-4">
                  <span className="text-subtitle uppercase tracking-[0.28em] text-subtitle-color">
                    Our Story
                  </span>

                  <span className="line w-9 h-[.5px] bg-[#BDBDBD]" />
                </div>

                {/* Heading */}
                <h2 className="max-w-lg text-title uppercase leading-[1.12] tracking-[0.18em] text-title-color">
                  A Simple Beginning,
                  <br />
                  A Forever to Come
                </h2>

                {/* Story */}
                <div className="mt-8 space-y-6 text-content tracking-wider text-title-color">
                  
                  <p>
                    What began as a simple date on one rainy afternoon,
                    ordinary meeting and uneventful. The slow and quiet
                    moments that we often mistake as boring, there buds a
                    love story between two dreamers, Armand and Edelyn.
                  </p>

                  <p>
                    Behind the quiet moments they set goals, shared dreams,
                    fought to what they believe even with disagreements,
                    their lives intertwined through shared laughter, joy,
                    struggles and a thousand unspoken moments.
                  </p>

                  <p>
                    We learned that real love isn&apos;t just made of grand
                    gestures or extraordinary milestones—it&apos;s found in
                    the gentle, everyday choice to show up for each other,
                    side by side without compromise and inhibitions.
                  </p>

                  <p>
                    The idea of forever becomes inevitable. On January 15,
                    2027, that choice turns into a lifelong promise as we
                    begin our next chapter as husband and wife.
                  </p>

                  <p>
                    Walking into forever isn&apos;t just about the path ahead,
                    but honoring the journey that brought us here, supported
                    by the people who have filled our story with warmth and
                    joy every step of the way.
                  </p>
                </div>

                {/* Bottom Decoration */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="h-px w-8 bg-[#BDBDBD] sm:w-12" />

                <span className="text-center text-subtitle uppercase tracking-[0.32em] text-subtitle-color sm:whitespace-nowrap">
                  Same Journey, A Brighter Tomorrow.
                </span>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}