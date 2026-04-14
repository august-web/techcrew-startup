import { ArrowRight, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function AboutPreviewSection() {
  return (
    <section className="bg-white py-24 dark:bg-black">
      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 md:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="About Us"
            title="A youth-driven startup creating practical pathways into technology"
            description="TechCrew is focused on equipping individuals with real-world tech skills through collaboration, mentorship, and hands-on projects. We bring together learners, graduates, and professionals to build solutions and grow together."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-zinc-950 dark:text-zinc-100">
                Our Mission
              </h3>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                To empower individuals with practical digital skills and create
                opportunities through technology.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-zinc-950 dark:text-zinc-100">
                Our Vision
              </h3>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                To build a global network of innovators solving real-world
                problems through technology.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
          >
            Read our full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
