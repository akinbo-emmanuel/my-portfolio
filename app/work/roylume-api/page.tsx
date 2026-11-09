import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RoylumeArchitecture from "@/components/Work/RoylumeArchitecture";
import { roylume } from "@/data/roylume";

const description = "Inside Roylume API, a privately developed backend project: shared Express architecture, PostgreSQL permission boundaries, dual-runtime delivery, and automated validation with TypeScript and Vitest.";
export const metadata: Metadata = {
  title: "Roylume API — Backend Engineering Case Study",
  description,
  alternates: { canonical: "/work/roylume-api" },
  openGraph: { title: "Roylume API — Backend Engineering Case Study", description, url: "/work/roylume-api" },
  twitter: { card: "summary_large_image", title: "Roylume API — Backend Engineering Case Study", description },
};

const sections = [
  {
    id: "overview", title: "Overview", kicker: "01 / Scope",
    paragraphs: [
      "Roylume is a multi-sport platform. This API establishes its backend foundation through a deliberately bounded first workflow: accepting waitlist registrations. Health and documentation endpoints complete the current public contract; authentication and sports data remain future milestones.",
      "For me, this project extends frontend engineering into responsibility for the contract behind the interface: how input becomes persisted data, which identity can write it, how failures reach a client, and what must be checked before a release. The value is in making those boundaries explicit before expanding the product.",
    ],
  },
  {
    id: "architecture", title: "Architecture", kicker: "02 / Runtime boundaries",
    paragraphs: [
      "The shared Express application owns JSON parsing, CORS, health and waitlist routes, and centralized error handling. It accepts a database query function, keeping the waitlist behavior independent of how each runtime connects to PostgreSQL.",
      "Node uses a reusable pg connection pool and a shutdown path. Workers open and close a pg client per waitlist query, with Hyperdrive pooling the underlying connections to Neon. This keeps application behavior shared while making connection lifetime a runtime concern.",
      "Documentation follows the same principle: Node serves OpenAPI and Swagger UI through filesystem-backed middleware; Workers serve packaged static assets. The API contract stays consistent without assuming a Node filesystem at the edge.",
    ],
  },
  {
    id: "decisions", title: "Technical decisions", kicker: "03 / Correctness before breadth",
    paragraphs: [
      "POST /waitlist trims and lowercases email addresses, checks basic syntax and length, then uses a parameterized insert. A PostgreSQL unique constraint and ON CONFLICT DO NOTHING resolve duplicate submissions at the database boundary, including concurrent requests. New and duplicate registrations receive the same 200 response without returning the address or disclosing registration status.",
      "Versioned migrations are explicit operations rather than startup side effects. Direct Neon connections support the migration tool’s session-level advisory lock; application connection pooling is handled separately. NODE_ENV controls runtime mode, not database selection, so target selection must come from the correct connection configuration.",
      "Separate staging and production Worker configurations reduce accidental resource reuse. A successful production dry-run demonstrates that the configured bundle can be built; it does not establish deployment or database readiness.",
    ],
  },
  {
    id: "security", title: "Security and reliability", kicker: "04 / Explicit trust boundaries",
    paragraphs: [
      "Database URL validation rejects configurations that weaken TLS, and connections verify server certificates. Production migration tooling validates reviewed target metadata and requires an explicit branch confirmation. Migration execution remains separate from startup, CI, and deployment.",
      "Migration ownership and application traffic use separate database identities. The reviewed runtime grant artifact limits waitlist access to INSERT (email) and SELECT (email), the latter required by the conflict target. The SQL artifact is separate from migrations and is not evidence that production grants have been applied. Existing inherited privileges still require an audit.",
      "CORS restricts browser origins and the waitlist preflight contract. Worker rate limiting checks attempts before JSON parsing, including invalid and duplicate requests. Its counters are approximate and location-specific; shared IP addresses can affect legitimate users. The Node runtime needs a separate abuse control before public exposure.",
      "Centralized errors return consistent JSON without exposing internal failures. Health checks establish process liveness only, not database reachability. Structured error logs, server-generated request correlation IDs, and Cloudflare observability configuration are implemented on a feature branch in PR #22 and remain pending review.",
    ],
  },
  {
    id: "testing", title: "Testing and CI/CD", kicker: "05 / Validation before release",
    paragraphs: [
      "Vitest tests exercise API behavior, configuration parsing, database setup, and migration definitions. Database dependencies are isolated in automated tests; Worker tests use an unreachable loopback target rather than contacting Neon. These checks cannot prove live connectivity, applied permissions, or migration execution.",
      "GitHub Actions runs on pull requests and pushes to staging and main. It installs from the lockfile, runs tests, ESLint, TypeScript checks, the Node build, OpenAPI validation, and dry-run bundles for both staging and production Workers.",
      "This is a validation pipeline. Deployment and migrations are separate operations. The production Worker has not been deployed, and this case study makes no claim of production traffic. A release still requires target verification, schema and permission checks, and environment-specific smoke testing.",
    ],
  },
  {
    id: "lessons", title: "Engineering challenges and lessons learned", kicker: "06 / Beyond the interface",
    paragraphs: [
      "Supporting two runtimes makes hidden platform assumptions visible. Database connection lifetime and filesystem-backed documentation cannot simply be carried from Node into Workers. A shared application with small runtime adapters provides a practical boundary without introducing a second implementation of the waitlist workflow.",
      "Least privilege requires understanding the actual SQL, not just labeling an identity a writer. The conflict target requires column-level SELECT even though the API has no read endpoint. Permissions therefore need to be derived from query behavior and verified against the target database.",
      "The broader lesson in moving toward full-stack engineering is that passing tests and building an artifact answer different questions from operating a service. Documenting those limits, keeping migrations deliberate, and separating pending work from released behavior are part of the engineering work itself.",
    ],
  },
];

export default function RoylumeCaseStudy() {
  return (
    <article className="container mx-auto pb-20 pt-6 sm:pt-10">
      <Link href="/work" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-accent hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All selected work</Link>
      <header className="grid gap-10 xl:grid-cols-2 xl:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Backend engineering / Case study</p>
          <h1 className="h1 mb-6">Roylume API</h1>
          <p className="mb-6 text-xl leading-relaxed">Building the system behind the interface.</p>
          <p className="mb-8 text-foreground/70">{roylume.summary}</p>
          <p className="mb-3 inline-flex rounded-full border border-border px-3 py-1 text-xs text-foreground/70">{roylume.repositoryLabel}</p>
          <p className="text-sm text-foreground/70">{roylume.sourceNote}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border"><RoylumeArchitecture /></div>
      </header>
      <aside aria-label="Project status" className="my-10 rounded-xl border border-accent/40 bg-muted/50 p-5 sm:p-7">
        <h2 className="mb-2 font-semibold">Implementation status</h2>
        <p className="text-sm text-foreground/80">Core API, migrations, runtime adapters, and CI validation are implemented. The production Worker has not been deployed.</p>
        <p className="mt-3 text-sm text-foreground/80">Pending review: structured logging, request IDs, and Cloudflare observability in PR #22. Planned: authentication and sports data.</p>
      </aside>
      <ul aria-label="Technology stack" className="mb-10 flex flex-wrap gap-2">{roylume.stack.map((item) => <li key={item} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground/80">{item}</li>)}</ul>
      <div className="grid gap-10 xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-16">
        <nav aria-label="Case study sections" className="self-start rounded-xl border border-border p-5 xl:sticky xl:top-6">
          <p className="mb-3 text-sm font-semibold">In this case study</p>
          <ul className="space-y-2">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="inline-block py-1 text-sm text-foreground/70 hover:text-accent hover:underline">{section.title}</a></li>)}</ul>
        </nav>
        <div className="min-w-0 max-w-3xl">
          {sections.map((section) => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="mb-12 scroll-mt-8 border-t border-border/60 pt-8 sm:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">{section.kicker}</p>
            <h2 id={`${section.id}-title`} className="mb-6 text-2xl font-semibold sm:text-3xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5 text-foreground/75">{paragraph}</p>)}
          </section>)}
          <footer className="border-t border-border pt-6 text-sm text-foreground/70">This privately developed backend engineering project is documented here independently of public source access. {roylume.sourceNote} Implementation status reflects private repository documentation and CI configuration, with pending work tracked in PR #22. Status reviewed November 9, 2026.</footer>
        </div>
      </div>
    </article>
  );
}
