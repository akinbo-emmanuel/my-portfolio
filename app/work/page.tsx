"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/Work/WorkSliderBtns";
import { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "Web2 Frontend",
    title: "Real Estate Website",
    description:
      "A modern real estate website built for Leke Sanni and Associates, featuring property listings, company information, and contact forms. The website showcases available properties, provides detailed information about the real estate firm's services, and enables potential clients to easily get in touch.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "Shadcn",
      },
    ],
    image: "/assets/work/thumb.png",
    live: "https://lekesanniandassociates.com.ng",
    github: "https://github.com/akinbo-emmanuel/walmart-clone",
  },
  {
    num: "02",
    category: "Web2 Frontend",
    title: "Walmart Clone",
    description:
      "Walmart Clone is a web application built using Next.js, Oxylabs, Shadcn, and Zustand. It replicates the functionality of the Walmart website, featuring a homepage, search page, product page, and cart. The content is currently unavailable as my free trial for Oxylabs has expired",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Oxylabs",
      },
      {
        name: "Shadcn",
      },
      {
        name: "Zustand",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://walmartclone.vercel.app",
    github: "https://github.com/akinbo-emmanuel/walmart-clone",
  },
  {
    num: "03",
    category: "Web2 Frontend",
    title: "Google Clone",
    description:
      "Google Clone was aimed at building a search engine website that closely resembles Google. The project was implemented using HTML, CSS, and JavaScript, and all codes were hosted on GitHub for version control. The goal of the project was to provide an opportunity for me to improve my front-end web development skills by working on a real-world project. The project involved building a user interface similar to Google's search engine.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://googleclonedark.vercel.app/",
    github: "https://github.com/akinbo-emmanuel/googleclonedark",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Pond5 Clone",
    description:
      "Pond5 Clone was aimed at creating a replica of Pond5, a popular online marketplace for stock videos, music, and images. The project involved using HTML, CSS, and JavaScript to develop a functional and visually appealing platform that users can easily navigate. The clone has the key features of the original Pond5 (UI). The project was completed using GitHub as a version control system.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://pond5-clone.vercel.app//",
    github: "https://github.com/akinbo-emmanuel/pond5_clone",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Twitter Clone",
    description:
      "The Twitter Clone project aimed at replicating the core functionalities of the popular social media platform Twitter. The project timeline was from December 2019 to January 2020 and the technology stacks used are CSS, JS, Git, React, Material UI, and GitHub. The project involved creating a responsive user interface. The Twitter Clone project provided a hands-on opportunity for me to practice front-end development skills.",
    stack: [
      {
        name: "React",
      },
      {
        name: "CSS",
      },
      {
        name: "Material UI",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Firebase",
      },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://twitterclone21.netlify.app/",
    github: "https://github.com/akinbo-emmanuel/twitterclone",
  },
  // {
  //   num: "05",
  //   category: "Frontend",
  //   title: "Clone",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, amet? Minus deleniti magnam ipsa consectetur harum fuga corporis aperiam asperiores officia, et modi repellendus quaerat. Quam quidem voluptates facere voluptas.",
  //   stack: [
  //     {
  //       name: "HTML5",
  //     },
  //     {
  //       name: "CSS3",
  //     },
  //   ],
  //   image: "/assets/work/thumb2.png",
  //   live: "https://google.com",
  //   github: "https://github.com/akinbo-emmanuel",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update the project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="space-y-[30px] h-1/2">
              {/* Outline page */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-y-1 gap-x-2 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] sm:h-[460px] md:h-[550px] lg:h-[670px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="objext-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-11 h-11 flex justify-center items-center transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
