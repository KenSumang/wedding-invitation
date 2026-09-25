import OurStoryImage from '../assets/OurStoryImage.jpg'

export default function OurStory() {
  return(
     <section className="bg-[#f3efe9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-[#f8f5f0]">
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
          <div className="relative flex items-center px-7 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20 xl:px-16">

            <div className="relative z-10 w-full max-w-xl">

              {/* Section Label */}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-7 bg-[#777168]" />

                <span className=" text-[11px] uppercase tracking-[0.3em] text-[#55504a]">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-lg  text-title leading-[1.12] tracking-[-0.02em] text-[#252525] sm:text-5xl lg:text-[46px] xl:text-[50px]">
                A Simple Beginning,
                <br />
                A Forever to Come
              </h2>

              {/* Story */}
              <div className="mt-8 space-y-6 text-base leading-[1.75] tracking-[0.06em] text-[#49443f] sm:text-[15px]">
                
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
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-[#8b847b]" />

                <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.32em] text-[#777168]">
                  Same Journey, A Brighter Tomorrow.
                </span>

                <span className="h-px w-12 bg-[#8b847b]" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}