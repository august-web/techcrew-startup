import { ArrowRight, Building2, GraduationCap, Handshake, Landmark, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

const partnerGroups = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Co-design practical learning tracks, workshops, and student innovation programs.",
  },
  {
    icon: Building2,
    title: "Companies & Startups",
    description: "Sponsor skill programs, host product challenges, and support early tech talent.",
  },
  {
    icon: Landmark,
    title: "NGOs & Institutions",
    description: "Deliver inclusive digital empowerment initiatives with measurable local impact.",
  },
  {
    icon: Users,
    title: "Communities & Hubs",
    description: "Run events, hackathons, and collaborative build sessions for youth innovators.",
  },
];

const collaborationModels = [
  {
    title: "Training Partnerships",
    description: "Structured programs in programming, cybersecurity, AI, and robotics for your learners.",
  },
  {
    title: "Project Co-Creation",
    description: "Build real solutions together through guided sprints, mentors, and delivery support.",
  },
  {
    title: "Sponsorship & Grants",
    description: "Fund scholarships, tools, and community projects that expand access to tech education.",
  },
  {
    title: "Events & Outreach",
    description: "Host high-impact talks, workshops, and demo days to accelerate talent and awareness.",
  },
];

const processSteps = [
  "Discovery call to align goals and audience",
  "Co-create a custom partnership plan",
  "Launch programs, events, or project tracks",
  "Measure outcomes and scale what works",
];

export function PartnerPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-blue-50/50 p-8 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-blue-500/5 md:p-12">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative max-w-3xl space-y-6">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              <Handshake className="h-4 w-4" />
              Partner With Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 md:text-5xl">
              Build meaningful technology impact with TechCrew
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              We collaborate with schools, companies, NGOs, and communities to deliver practical tech education,
              mentorship, and innovation programs that empower the next generation.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
              >
                Start a Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Explore Initiatives
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="space-y-8">
        <Reveal>
          <SectionIntro
            eyebrow="Who We Partner With"
            title="Flexible collaboration across education, industry, and community"
            description="Our model adapts to your goals so we can deliver programs that create practical and lasting outcomes."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {partnerGroups.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-blue-500/30">
                <item.icon className="mb-4 h-6 w-6 text-blue-500" />
                <h3 className="mb-2 text-lg font-semibold text-zinc-950 dark:text-zinc-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <Reveal>
          <SectionIntro
            eyebrow="Partnership Models"
            title="Ways we can work together"
            description="Choose one model or combine multiple tracks depending on your timeline, audience, and expected outcomes."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {collaborationModels.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-3 text-xl font-semibold text-zinc-950 dark:text-zinc-100">{item.title}</h3>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <Reveal>
          <SectionIntro
            eyebrow="How It Works"
            title="Simple process, measurable outcomes"
            description="From first conversation to execution, we keep collaboration clear, structured, and impact-focused."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.06}>
              <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="pt-1 text-zinc-700 dark:text-zinc-300">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-10 text-white dark:border-zinc-800">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-blue-500/20" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-4 w-4" />
                Let us collaborate
              </p>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to launch a partnership track?</h3>
              <p className="text-zinc-300">
                Share your goals and we will propose a tailored plan for training, events, mentorship, or project delivery.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600"
            >
              Contact Partnership Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
