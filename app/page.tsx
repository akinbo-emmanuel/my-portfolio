import Photo from "@/components/Home/Photo";
import Role from "@/components/Home/Role";
import Socials from "@/components/Home/Socials";
import Stats from "@/components/Home/Stats";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="xl:min-h-[80vh] xl:flex xl:flex-col xl:justify-between">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <Role />
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />{" "}
              <span className="text-accent">Emmanuel Akinbo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I create seamless digital journeys with a strong command of
              diverse coding languages and cutting-edge tech.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://raw.githubusercontent.com/akinbo-emmanuel/my-portfolio/main/public/assets/resume/Emmanuel-Akinbo-RESUME.pdf"
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FileDown className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
