import {
  BookOpen,
  Cog,
  Code2,
  Shield,
  Brain,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

const activities = [
  {
    title: "Tech Training Sessions",
    description: "Regular hands-on sessions covering modern tools and frameworks.",
    icon: BookOpen,
  },
  {
    title: "Robotics Workshops",
    description: "Build and program physical devices that interact with the real world.",
    icon: Cog,
  },
  {
    title: "Cybersecurity Awareness",
    description: "Learn to protect yourself and organizations from digital threats.",
    icon: Shield,
  },
  {
    title: "Programming Education",
    description: "Structured learning paths from beginner to advanced development.",
    icon: Code2,
  },
  {
    title: "AI Exploration",
    description: "Discover machine learning, neural networks, and intelligent systems.",
    icon: Brain,
  },
  {
    title: "Community Projects",
    description: "Collaborate on real-world projects that create meaningful impact.",
    icon: Users,
  },
];

export function WhatWeDoSection() {
  return (
    <section className="bg-white py-24 dark:bg-black">
      <div className="mx-auto w-full max-w-7xl space-y-14 px-4 md:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="What We Do"
            title="Hands-on programs that bridge learning and real-world application"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.08}>
              <div className="flex gap-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-blue-500/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <activity.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-950 dark:text-zinc-100">
                    {activity.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
