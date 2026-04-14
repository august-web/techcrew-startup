import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fields } from "@/data/siteContent";

export function FieldsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionIntro
            eyebrow="Fields"
            title="Core technology tracks built for practical growth"
            description="Each field combines fundamentals, real projects, and mentorship so members can grow from beginner level to practical confidence."
            className="mx-auto text-center"
          />
        </div>
      </Reveal>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <Reveal key={field.title} delay={index * 0.1}>
            <article className="group grid gap-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500/30 md:grid-cols-[auto,1fr] md:p-10">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500">
                <field.icon className="h-8 w-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-100">
                  {field.title}
                </h3>
                <p className="max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {field.longDescription}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                  >
                    Start learning
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
