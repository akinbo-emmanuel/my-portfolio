"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { services } from "@/config/services";

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-10 sm:py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 xl:gap-[60px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-1 flex-col justify-center gap-6 border-b border-border/70 pb-6"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent transition-all duration-500 group-hover:text-outline-hover sm:text-5xl">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground transition-all duration-500 hover:-rotate-45 group-hover:bg-accent sm:h-[70px] sm:w-[70px]"
                >
                  <BsArrowDownRight className="text-3xl text-background group-hover:text-accent-foreground" />
                </Link>
              </div>

              <h2 className="text-3xl font-bold leading-none text-foreground transition-all duration-500 group-hover:text-accent sm:text-4xl xl:text-[42px]">
                {service.title}
              </h2>

              <p className="text-foreground/60 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
