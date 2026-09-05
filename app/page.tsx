import Photo from "@/components/Home/Photo";
import Role from "@/components/Home/Role";
import Socials from "@/components/Home/Socials";
import Stats from "@/components/Home/Stats";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100svh-5.5rem)] flex-col pt-5 sm:pt-6 xl:min-h-[calc(100svh-9rem)] xl:pt-12">
      <div className="container mx-auto flex flex-1 items-center">
        <div className="flex w-full flex-col items-center justify-between gap-8 sm:gap-12 md:grid md:grid-cols-[minmax(0,1fr)_260px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_506px] xl:gap-0">
          {/* Text */}
          <div className="order-2 w-full text-left md:order-none md:min-w-0 xl:w-auto">
            <Role />
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />{" "}
              <span className="text-accent">Emmanuel Akinbo</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-foreground/75">
              <span className="mb-5 block font-semibold text-foreground">
                I build high-performance React and Next.js products for
                complex, workflow-heavy systems.
              </span>
              <span>
                I specialize in scalable frontend architecture, real-time
                interfaces, performance, and turning complicated business
                requirements into reliable user experiences.
              </span>
            </p>

            {/* Calls to action and social links */}
            <div className="flex flex-col items-center gap-6 sm:items-start">
              <div className="flex w-full flex-nowrap justify-center gap-3 sm:w-auto sm:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 gap-2 px-4 text-xs sm:h-14 sm:px-8 sm:text-sm"
                >
                  <Link href="/work" aria-label="View selected work">
                    <span>View work</span>
                    <ArrowRight className="text-xl" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 gap-2 px-4 text-xs sm:h-14 sm:px-8 sm:text-sm"
                >
                  <a
                    href="/assets/resume/emmanuel-akinbo.pdf"
                    download
                    aria-label="Download résumé"
                  >
                    <span>Résumé</span>
                    <FileDown className="text-xl" />
                  </a>
                </Button>
              </div>

              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-accent-foreground hover:transition-all duration-500"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-none md:w-[260px] lg:w-[300px] xl:mb-0 xl:w-[506px]">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
