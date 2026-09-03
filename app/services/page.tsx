"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { services } from "@/config/services";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 cl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-1 flex-col justify-center gap-6 border-b border-border/70 pb-6"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-foreground transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                >
                  <BsArrowDownRight className="text-3xl text-background group-hover:text-accent-foreground" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-foreground transition-all duration-500 group-hover:text-accent">
                {service.title}
              </h2>

              <p className="text-foreground/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
