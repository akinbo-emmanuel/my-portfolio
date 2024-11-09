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
import { motion } from "framer-motion";
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
    "I am Emmanuel O. Akinbo, a dedicated Web2 and Web3 Frontend Engineer with over five years of experience in building efficient, scalable, and visually appealing applications. My expertise spans from crafting intuitive frontend interfaces to developing robust smart contracts for decentralized applications. With a passion for innovation and technology, I aim to bridge the gap between traditional web technologies and the evolving blockchain space.",
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
      fieldValue: "emmanuelakinbo176@gmail.com",
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
    "With a strong background in frontend development and Web3 technology, I've had the privilege of working with various teams and companies, contributing to projects that range from building dynamic UIs to deploying secure smart contracts. Here’s a look at my professional journey so far:",
  items: [
    {
      company: "Dukia Precious Metals",
      position: "Frontend Engineer",
      duration: "05/2024 - Present",
    },
    {
      company: "Greatsome Innovations Ltd.",
      position: "Frontend Engineer",
      duration: "05/2024 - 10/2024",
    },
    {
      company: "Colab Apes",
      position: "Founding and Lead Frontend Engineer",
      duration: "01/2023 - 03/2024",
    },
    {
      company: "Winners Chapel International",
      position: "Frontend Engineer",
      duration: "08/2021 - 12/2022",
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
    "Committed to continuous learning, I have pursued education in computer science and specialized blockchain programs to enhance my technical knowledge. My formal education, alongside specialized courses, equips me with the tools to excel in both Web2 and Web3 development.",
  items: [
    {
      institution: "Cyfrin Updraft",
      degree: "Blockchain/Web3",
      duration: "09/2024 - Present",
    },
    {
      institution: "Alchemy University",
      degree: "Blockchain/Web3",
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
    "Throughout my career, I’ve developed a versatile skill set covering both frontend and blockchain technologies. From traditional Web2 frameworks to Web3-specific tools, these skills enable me to deliver high-quality applications that are both functional and secure.",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about-me">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="space-y-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>

                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="space-y-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>

                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="space-y-[30px]">
                <div className="space-y-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
              className="w-full text-center xl:text-left"
            >
              <div className="space-y-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        item.fieldName === "Email" && "xl:col-span-2"
                      } flex items-center justify-center xl:justify-start gap-4`}
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
