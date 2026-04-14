import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";

export function CommunityCtaSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 dark:bg-zinc-950">
      {/* Decorative gradient */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-blue-500/8 blur-3xl" />

      <Reveal>
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-2xl space-y-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span className="h-px w-8 bg-blue-400" />
              Join TechCrew
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to build the future with us?
            </h2>
            <p className="max-w-lg text-zinc-400">
              Collaborate with a fast-growing network of students and
              professionals building practical tech skills that matter.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
            >
              Join Community
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
