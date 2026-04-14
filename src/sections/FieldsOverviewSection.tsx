import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fields } from "@/data/siteContent";

export function FieldsOverviewSection() {
  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl space-y-14 px-4 md:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Core Fields"
            title="Learning tracks designed for real-world impact"
            description="TechCrew focuses on Programming, Cybersecurity, Artificial Intelligence, and Robotics to prepare members for real-world innovation."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((field, index) => (
            <Reveal key={field.title} delay={index * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-500/30">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500">
                  <field.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2.5 text-lg font-semibold text-zinc-950 dark:text-zinc-100">
                  {field.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {field.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/fields"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
          >
            Explore all fields in detail
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
