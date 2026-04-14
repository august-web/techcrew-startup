import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { teamMembers } from "@/data/siteContent";

export function TeamPage() {
  const founder = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 py-20 md:px-8 md:py-28">
      {/* Page Header */}
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionIntro
            eyebrow="Our Team"
            title="The people behind TechCrew"
            description="A cross-functional team of leaders, educators, and community builders working together to drive innovation and empower the next generation."
            className="mx-auto text-center"
          />
        </div>
      </Reveal>

      {/* Featured Founder/CEO Card */}
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900/80">
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
          
          <div className="relative grid items-center gap-0 md:grid-cols-5">
            {/* Image - Takes more space */}
            <div className="relative aspect-[3/4] overflow-hidden md:col-span-2 md:aspect-auto md:h-full">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
            </div>

            {/* Content */}
            <div className="relative p-8 md:col-span-3 md:p-12 lg:p-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 dark:border-blue-500/30 dark:bg-blue-500/10">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {founder.role}
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white lg:text-4xl">
                {founder.name}
              </h2>

              <p className="mb-6 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400 lg:text-lg">
                {founder.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {["Leadership", "Technology", "Innovation", "Community"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/august-web/"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <Globe className="h-4 w-4" />
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Team Grid - Rest of Members */}
      <div>
        <Reveal>
          <h3 className="mb-8 text-center text-lg font-semibold text-zinc-500 dark:text-zinc-400">
            Core Team Members
          </h3>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Role badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-zinc-950 dark:text-zinc-100">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {member.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Team Structure Section */}
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-zinc-950 dark:text-white">
            Our Structure
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "Founder / CEO", desc: "Strategic direction & vision" },
              { role: "Co-founder", desc: "Operations & partnerships" },
              { role: "Facilitators", desc: "Training & skill delivery" },
              { role: "Coordinators", desc: "Events & program management" },
              { role: "Designers", desc: "Brand & visual identity" },
              { role: "Volunteers", desc: "Community growth & outreach" },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:border-blue-200 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500/30 dark:hover:bg-zinc-900"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-950 dark:text-white">
                    {item.role}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Join the Team CTA */}
      <Reveal>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
          <div className="relative">
            <h3 className="mb-3 text-2xl font-bold text-zinc-950 dark:text-zinc-100">
              Want to join the crew?
            </h3>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              We're always looking for passionate individuals who want to make an
              impact through technology.
            </p>
            <a
              href="#/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
