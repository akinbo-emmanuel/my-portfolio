import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const featuredProjects = [
  {
    num: "01",
    category: "EdTech product platform",
    title: "Teen Africa Academy",
    summary:
      "A multi-role platform that helps teenagers explore careers through weekly missions, stories, assessments, and personalized insights.",
    contribution:
      "Owned frontend implementation across the student, parent, organization, and admin experiences, including protected workflows and shared data patterns.",
    highlights: [
      "Structured role-based journeys without duplicating application behavior.",
      "Built mission, story, assessment, and career-recommendation experiences.",
      "Centralized API access and server-state handling with React Query.",
      "Added parent management, admin tooling, SEO metadata, and structured data.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Radix UI",
      "Tiptap",
    ],
    image: "/assets/work/teen-africa-academy.svg",
    imageAlt:
      "Teen Africa Academy dashboard showing missions, career insights, and admin tools",
    live: "https://taa25.vercel.app",
    github: "",
  },
  {
    num: "02",
    category: "Client website · Real estate",
    title: "Leke Sanni & Associates",
    summary:
      "A responsive real-estate website that presents the firm, its services, and available properties while giving prospective clients clear ways to make contact.",
    contribution:
      "Designed and built the frontend experience, turning the firm's content and property offering into a clear, credible, mobile-friendly website.",
    highlights: [
      "Created a clear information architecture for services, properties, and company content.",
      "Built responsive layouts and reusable interface sections with Next.js.",
      "Used focused calls to action to support enquiries and lead generation.",
      "Added purposeful motion while keeping the core experience easy to navigate.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    image: "/assets/work/thumb.png",
    imageAlt: "Leke Sanni & Associates real-estate website homepage",
    live: "https://lekesanniandassociates.com.ng",
    github: "",
  },
  {
    num: "03",
    category: "Ecommerce interface",
    title: "FASCO Shop",
    summary:
      "A fashion ecommerce landing page built around strong editorial imagery, product discovery, social proof, and conversion-focused calls to action.",
    contribution:
      "Translated a detailed storefront concept into a responsive Next.js interface with reusable sections and consistent visual behavior.",
    highlights: [
      "Built a high-impact hero, brand showcase, benefits, and product sections.",
      "Created responsive navigation and clear shopping calls to action.",
      "Added testimonial, Instagram, newsletter, and footer experiences.",
      "Maintained consistent spacing, typography, and interaction patterns across breakpoints.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/assets/work/fasco-shop.png",
    imageAlt: "FASCO fashion ecommerce landing page",
    live: "https://fascoshop.vercel.app/",
    github: "https://github.com/akinbo-emmanuel/online-shopping/",
  },
];

const earlierWork = [
  {
    title: "Walmart Clone",
    description:
      "An ecommerce exploration covering product search, product details, and cart state.",
    stack: ["Next.js", "TypeScript", "Zustand", "Oxylabs"],
    image: "/assets/work/thumb1.png",
    live: "https://walmartclone.vercel.app",
    github: "https://github.com/akinbo-emmanuel/walmart-clone",
  },
  {
    title: "Google Clone",
    description:
      "An earlier interface exercise focused on recreating a familiar search experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets/work/thumb2.png",
    live: "https://googleclonedark.vercel.app/",
    github: "https://github.com/akinbo-emmanuel/googleclonedark",
  },
  {
    title: "Pond5 Clone",
    description:
      "An earlier responsive UI exercise based on a digital media marketplace.",
    stack: ["HTML", "CSS"],
    image: "/assets/work/thumb3.png",
    live: "https://pond5-clone.vercel.app/",
    github: "https://github.com/akinbo-emmanuel/pond5_clone",
  },
  {
    title: "Twitter Clone",
    description:
      "An earlier React project exploring social-feed UI, responsive behavior, and Firebase.",
    stack: ["React", "JavaScript", "Material UI", "Firebase"],
    image: "/assets/work/thumb4.png",
    live: "https://twitterclone21.netlify.app/",
    github: "https://github.com/akinbo-emmanuel/twitterclone",
  },
];

const ProjectLinks = ({
  live,
  github,
}: {
  live: string;
  github: string;
}) => (
  <div className="flex flex-wrap gap-3">
    <Link
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
    >
      View live site
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>

    {github && (
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        View source
        <Github className="h-4 w-4" aria-hidden="true" />
      </Link>
    )}
  </div>
);

export default function Work() {
  return (
    <div className="pb-24 pt-8 xl:pt-12">
      <section className="container mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-medium uppercase tracking-[0.2em] text-accent">
            Selected work
          </p>
          <h1 className="h2 mb-5">Products built around real user needs.</h1>
          <p className="text-lg text-foreground/60">
            A closer look at how I approach frontend architecture, product
            workflows, responsive interfaces, and dependable delivery.
          </p>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm"
            >
              <div className="grid xl:grid-cols-2">
                <div
                  className={`relative min-h-[280px] sm:min-h-[420px] xl:min-h-[620px] ${
                    index % 2 === 1 ? "xl:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    fill
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="object-cover"
                    alt={project.imageAlt}
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 xl:p-14">
                  <div className="mb-7 flex items-center justify-between gap-5">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
                      {project.category}
                    </p>
                    <span className="text-4xl font-bold text-foreground/10">
                      {project.num}
                    </span>
                  </div>

                  <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mb-7 text-foreground/60">{project.summary}</p>

                  <div className="mb-7 border-l-2 border-accent pl-5">
                    <p className="mb-1 text-sm font-medium uppercase tracking-wider text-foreground/45">
                      My contribution
                    </p>
                    <p className="text-foreground/80">{project.contribution}</p>
                  </div>

                  <h3 className="mb-3 font-semibold">What I delivered</h3>
                  <ul className="mb-8 space-y-2 text-sm text-foreground/60">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mb-8 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-foreground/70"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <ProjectLinks live={project.live} github={project.github} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-24 border-t border-border/60 pt-14">
        <div className="mb-9 max-w-2xl">
          <p className="mb-2 font-medium uppercase tracking-[0.2em] text-accent">
            Earlier work
          </p>
          <h2 className="text-3xl font-bold">Experiments and learning projects</h2>
          <p className="mt-3 text-foreground/60">
            Selected projects from earlier stages of my frontend journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {earlierWork.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-border/60 bg-surface shadow-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  alt={`${project.title} interface preview`}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm text-foreground/60">
                  {project.description}
                </p>
                <ul className="mb-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-accent">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <ProjectLinks live={project.live} github={project.github} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
