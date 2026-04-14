import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { navItems, socialLinks } from "@/data/siteContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <Logo showText={true} size="md" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Building the future through innovation. Empowering individuals
              with practical digital skills and creating opportunities through
              technology.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="mailto:hello@techcrew.io"
                className="transition-colors hover:text-blue-500"
              >
                hello@techcrew.io
              </a>
              <span>Global Youth Community</span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-medium text-blue-500 transition-colors hover:text-blue-400"
              >
                Contact Us
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {currentYear} TechCrew. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Built with passion for innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
