import React from 'react';

function DetailItems({ detailItems }) {
    return (
        <>
            {detailItems.map((detail) => (
                <div
                    key={detail.id}
                    className="flex items-center gap-6 justify-start w-full h-[94px] bg-[#F5F5F5]"
                >
                    <img src="" alt="Detail Image" />

                    <div className="w-[0.4px] h-10 bg-black"></div>

                    <div className="details flex flex-col gap-[5px]">
                        <p className="text-[8px] font-light">
                            {detail.label}
                        </p>

                        <h2 className="text-[10px] font-normal">
                            {detail.title}
                        </h2>

                        <p className="text-[8px] font-normal">
                            {detail.details}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

function Details() {
    const details = [
        {
            id: 1,
            label: "DATE",
            title: "SEPTEMBER 20, 2026",
            details: "SUNDAY • 4:00 PM"
        },
        {
            id: 2,
            label: "VENUE",
            title: "THE GARDEN VALLEY HOTEL",
            details: "TAGAYTAY CITY, PHILIPPINES"
        },
        {
            id: 3,
            label: "ATTIRE",
            title: "FORMAL",
            details: "STRICTLY MONOCHROME"
        }
    ];

    return (
        <section className="details w-full h-fit">
            <div className="container w-full px-4 sm:px-6 max-w-[380px]">
                <div className="wrapper w-full h-full">
                    <div className="contents flex flex-col items-center">
                        <DetailItems detailItems={details} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;