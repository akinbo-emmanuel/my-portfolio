"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 27,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 808,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="shrink-0 py-5 sm:py-6 xl:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-8 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[84px]" : "max-w-[108px]"
                } text-sm leading-snug text-foreground/50 sm:text-base xl:text-base`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
