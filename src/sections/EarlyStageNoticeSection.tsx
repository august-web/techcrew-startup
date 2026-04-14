import { AlertCircle, Rocket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";

export function EarlyStageNoticeSection() {
  return (
    <section className="border-y border-amber-200/70 bg-gradient-to-b from-amber-50 to-white py-14 dark:border-amber-500/20 dark:from-amber-500/10 dark:to-zinc-950">
      <Reveal>
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
                <AlertCircle className="h-4 w-4" />
                Development Notice
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                TechCrew is in its early stage and this site is still evolving
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                As of April 2026, we are actively building our programs, team structure, and digital platforms.
                Some features, timelines, and content may change as we grow.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Ask About Current Status
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white/80 p-4 dark:border-amber-500/20 dark:bg-zinc-900/40">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300" />
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                We are currently piloting initiatives and forming foundational partnerships.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white/80 p-4 dark:border-amber-500/20 dark:bg-zinc-900/40">
              <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300" />
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Website updates are continuous as we refine our brand, programs, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
