"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import React from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 91 6957 4553",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "emmaakinbo24@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "020b47ac-247e-41a2-9e30-ed3cc3958b48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      const form = event.target as HTMLFormElement;
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none mb-8 xl:mb-0">
            <form
              onSubmit={onSubmit}
              className="space-y-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s Build the Future of the Web Together
              </h3>
              <p className="text-white/60">
                As a frontend engineer bridging Web2 and Web3, I&apos;m
                passionate about creating seamless, cutting-edge user
                experiences. Whether it&apos;s a sleek Web2 interface or an
                immersive Web3 dApp, I bring technical expertise and a keen eye
                for design to every project. Let&apos;s collaborate to push
                boundaries, innovate, and bring your ideas to life on the modern
                web.
              </p>

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  required
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                />
                <Input
                  required
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                />
                <Input required type="email" name="Email" placeholder="Email" />
                <Input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number (optional)"
                />
              </div>

              {/* Select */}
              <Select name="Service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service (optional)"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text area */}
              <Textarea
                required
                name="Message"
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <div className="flex items-center gap-2">
                <Button
                  disabled={!!result}
                  type="submit"
                  size="sm"
                  className="max-w-40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send message
                </Button>

                <p className="text-white/60">{result && result}</p>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="space-y-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
