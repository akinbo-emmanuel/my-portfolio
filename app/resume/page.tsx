"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiSolidity,
  SiEthereum,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "I am Emmanuel O. Akinbo, a Senior Frontend Engineer with over five years of experience building scalable, performant, and accessible web applications. I specialize in React, Next.js, TypeScript, and Tailwind CSS—translating complex product requirements into reliable interfaces and maintainable frontend systems. I also bring experience with testing, CI/CD, and Web3 integrations when products require them.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Emmanuel O. Akinbo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 91 6957 4553",
    },
    {
      fieldName: "Email",
      fieldValue: "emmaakinbo24@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have led frontend initiatives and collaborated across product teams to deliver responsive interfaces, scalable frontend architecture, and dependable user experiences. Here’s a look at my professional journey so far:",
  items: [
    {
      company: "Dukia Precious Metals",
      position: "Senior Frontend Engineer",
      duration: "05/2024 - Present",
    },
    {
      company: "Greatsome Innovations Ltd.",
      position: "Frontend Engineer (Contract)",
      duration: "03/2024 - 05/2024",
    },
    {
      company: "Colab Apes",
      position: "Founding & Lead Frontend Engineer",
      duration: "01/2023 - 03/2024",
    },
    {
      company: "Winners Chapel International",
      position: "Frontend Engineer",
      duration: "01/2022 - 12/2022",
    },
    {
      company: "Landmark University Student Council",
      position: "Frontend Engineer",
      duration: "09/2020 - 09/2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My educational history",
  description:
    "My formal computer science education and specialized Web3 certifications support my work across modern frontend systems, product delivery, and blockchain-enabled applications.",
  items: [
    {
      institution: "Cyfrin Updraft",
      degree: "Blockchain/Web3 Certification",
      duration: "09/2024 - Present",
    },
    {
      institution: "Alchemy University",
      degree: "Web3 (Ethereum) Certification",
      duration: "04/2023 - Present",
    },
    {
      institution: "Landmark University",
      degree: "Bachelor of Science (Computer Science)",
      duration: "10/2019 - 08/2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "My core expertise is frontend engineering with React, Next.js, TypeScript, Tailwind CSS, scalable UI architecture, state management, and data fetching. Jest, GitHub Actions, Docker, REST/GraphQL, Solidity, and Ethereum extend that foundation where products require them.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <SiEthereum />,
      name: "Ethereum",
    },
  ],
};


const Resume = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-10 sm:py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col gap-10 xl:flex-row xl:gap-[60px]"
        >
          <TabsList className="mx-auto grid w-full max-w-[380px] grid-cols-1 gap-3 md:max-w-none md:grid-cols-4 xl:mx-0 xl:flex xl:max-w-[380px] xl:flex-col xl:gap-6">
            <TabsTrigger value="about-me">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full xl:min-h-[70vh]">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="space-y-6 text-left xl:space-y-[30px]">
                <h3 className="text-3xl font-bold sm:text-4xl">{experience.title}</h3>
                <p className="max-w-[600px] text-foreground/60">
                  {experience.description}
                </p>

                <ScrollArea className="xl:h-[400px]">
                  <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex min-h-[160px] flex-col items-start justify-center gap-1 rounded-xl border border-border/60 bg-surface px-5 py-6 text-left shadow-sm sm:px-6 xl:h-[184px] xl:px-10"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[52px] max-w-[260px] text-lg sm:text-xl xl:min-h-[60px]">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>

                          <p className="text-foreground/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="space-y-[30px] text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-foreground/60">
                  {education.description}
                </p>

                <ScrollArea className="xl:h-[400px]">
                  <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex min-h-[160px] flex-col items-start justify-center gap-1 rounded-xl border border-border/60 bg-surface px-5 py-6 text-left shadow-sm sm:px-6 xl:h-[184px] xl:px-10"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[52px] max-w-[260px] text-lg sm:text-xl xl:min-h-[60px]">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>

                          <p className="text-foreground/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="space-y-6 xl:space-y-[30px]">
                <div className="space-y-6 text-left xl:space-y-[30px]">
                  <h3 className="text-3xl font-bold sm:text-4xl">{skills.title}</h3>
                  <p className="max-w-[600px] text-foreground/60">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="xl:h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-28 w-full items-center justify-center rounded-xl border border-border/60 bg-surface shadow-sm sm:h-[150px]">
                              <div className="text-5xl transition-all duration-300 group-hover:text-accent sm:text-6xl">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent
              value="about-me"
              className="w-full text-left"
            >
              <div className="space-y-6 xl:space-y-[30px]">
                <h3 className="text-3xl font-bold sm:text-4xl">{about.title}</h3>
                <p className="max-w-[600px] text-foreground/60">
                  {about.description}
                </p>

                <ul className="grid max-w-[620px] grid-cols-1 gap-y-4 sm:gap-y-6 xl:grid-cols-2">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        item.fieldName === "Email" && "xl:col-span-2"
                      } flex items-center justify-start gap-4`}
                    >
                      <span className="text-foreground/60">{item.fieldName}:</span>
                      <span className="break-all text-base sm:text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
