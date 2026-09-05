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
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Public submission key, not an account credential:
    // https://docs.web3forms.com/getting-started/faq
    formData.append("access_key", "020b47ac-247e-41a2-9e30-ed3cc3958b48");
    setIsSending(true);
    setResult("Sending your message…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: { success?: boolean; message?: string } =
        await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setResult("Message sent successfully. I’ll get back to you soon.");
      form.reset();
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none mb-8 xl:mb-0">
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-xl border border-border/60 bg-surface p-5 shadow-sm sm:space-y-6 sm:p-8 xl:p-10"
            >
              {/* Web3Forms honeypot: hidden from visitors and assistive technology.
                  A checked botcheck field lets the provider reject bot submissions. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <h3 className="text-3xl leading-tight text-accent sm:text-4xl">
                Let&apos;s Build Something Exceptional
              </h3>
              <p className="text-foreground/60">
                As a Senior Frontend Engineer, I turn complex requirements into
                fast, accessible, and maintainable web products. Whether you
                need a polished product interface, a scalable frontend system,
                or Web3 integration, I can help bring it to life.
              </p>

              {/* Input */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <Input
                  id="first-name"
                  required
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  autoComplete="given-name"
                />
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                <Input
                  id="last-name"
                  required
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email"
                  required
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number (optional)"
                  autoComplete="tel"
                />
              </div>

              {/* Select */}
              <label htmlFor="service" className="sr-only">
                Service
              </label>
              <Select name="Service">
                <SelectTrigger id="service" className="w-full">
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
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                required
                name="Message"
                className="h-40 sm:h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  disabled={isSending}
                  type="submit"
                  size="sm"
                  className="min-h-11 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSending ? "Sending…" : "Send message"}
                </Button>

                <p
                  className="text-sm text-foreground/60"
                  role="status"
                  aria-live="polite"
                >
                  {result}
                </p>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="order-1 flex flex-1 items-center xl:order-none xl:justify-end">
            <ul className="w-full space-y-6 sm:space-y-8 xl:w-auto xl:space-y-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-border/60 bg-surface text-accent shadow-sm xl:h-[72px] xl:w-[72px]">
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/60">{item.title}</p>
                    <h3 className="break-words text-base sm:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
