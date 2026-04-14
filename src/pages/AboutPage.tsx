import { Eye, Heart, Lightbulb, Target, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { whatWeDo } from "@/data/siteContent";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and practical experimentation.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Everything we build is shaped by and for our community members.",
  },
  {
    icon: Heart,
    title: "Inclusive Growth",
    description: "We welcome everyone regardless of background or experience level.",
  },
  {
    icon: Zap,
    title: "Practical Impact",
    description: "We focus on skills and projects that create real-world value.",
  },
];

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-24 px-4 py-20 md:px-8 md:py-28">
      {/* Hero */}
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionIntro
            eyebrow="About TechCrew"
            title="A community designed to turn ambition into practical technology impact"
            className="text-center mx-auto"
          />
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-300">
            <p className="text-lg leading-relaxed">
              TechCrew is a youth-driven startup focused on equipping
              individuals with real-world tech skills through collaboration,
              mentorship, and hands-on projects.
            </p>
            <p className="leading-relaxed">
              We bring together learners, graduates, and professionals to build
              solutions, share knowledge, and grow together. Our approach is
              practical, community-first, and future-focused.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50 dark:bg-blue-500/5" />
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-zinc-950 dark:text-zinc-100">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                To empower individuals with practical digital skills and create
                opportunities through technology.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50 dark:bg-blue-500/5" />
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-zinc-950 dark:text-zinc-100">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                To build a global network of innovators solving real-world
                problems through technology.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="space-y-10">
        <Reveal>
          <SectionIntro
            eyebrow="Our Values"
            title="What we stand for"
            description="These principles guide every decision we make and every program we build."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500/30">
                <value.icon className="mb-4 h-6 w-6 text-blue-500" />
                <h4 className="mb-2 font-semibold text-zinc-950 dark:text-zinc-100">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <Reveal>
        <section className="space-y-8">
          <SectionIntro
            eyebrow="Our Focus"
            title="What we do"
            description="From training to real-world projects, here's how we create impact."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 transition-all hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-blue-500/30">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
