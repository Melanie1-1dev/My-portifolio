"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock3,
  MapPin,
  Send,
  Code2,
  Briefcase,
  GraduationCap,
  MessageSquareMore,
  UserRound,
  Home,
} from "lucide-react";
import { socials } from "@/data/socials";

const quickLinks = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: UserRound, label: "About" },
  { href: "#skills", icon: Code2, label: "Skills" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#contact", icon: MessageSquareMore, label: "Contact" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f5f5f5] dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black uppercase tracking-tight text-[#0d1b2a] dark:text-white leading-none">
            LET&apos;S HAVE A CHAT
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Have a project in mind or want to collaborate? Drop a message—I&apos;ll get back to you soon as possible.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[0.95fr_1.25fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <div className="rounded-[28px] border border-[#dfe7eb] bg-[#f3f6f6] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3ecbe7] to-[#5cd8d8] text-white shadow-lg shadow-cyan-200/50">
                  <Mail className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Email Me
                  </p>
                  <a
                    href={`mailto:${socials.email}`}
                    className="mt-2 block text-lg font-semibold text-[#0d1b2a] transition-colors hover:text-cyan-600"
                  >
                    {socials.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dfe7eb] bg-[#f3f6f6] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3ecbe7] to-[#5cd8d8] text-white shadow-lg shadow-cyan-200/50">
                  <Phone className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Phone
                  </p>
                  <div className="mt-2 text-lg font-semibold text-[#0d1b2a]">
                    <a href={`tel:${socials.phone}`} className="block hover:text-cyan-600">
                      {socials.phone}
                    </a>
                    <a
                      href={`https://wa.me/${socials.whatsapp.replace("+", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-base font-medium text-zinc-600 hover:text-cyan-600"
                    >
                      WhatsApp: {socials.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dfe7eb] bg-[#f3f6f6] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3ecbe7] to-[#5cd8d8] text-white shadow-lg shadow-cyan-200/50">
                  <Clock3 className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Working Hours
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#0d1b2a]">
                    Mon - Sat, 8AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dfe7eb] bg-[#f3f6f6] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3ecbe7] to-[#5cd8d8] text-white shadow-lg shadow-cyan-200/50">
                  <MapPin className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#0d1b2a]">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[30px] border border-[#dfe7eb] bg-[#f5f6f7] p-5 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-left">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[#dfe7eb] bg-[#eef2f3] px-4 py-3.5 text-base text-[#0d1b2a] placeholder:text-zinc-400 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block text-left">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-[#dfe7eb] bg-[#eef2f3] px-4 py-3.5 text-base text-[#0d1b2a] placeholder:text-zinc-400 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <label className="mt-6 block text-left">
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Message
              </span>
              <textarea
                rows={7}
                placeholder="Tell me about your project or idea..."
                className="w-full resize-none rounded-[24px] border border-[#dfe7eb] bg-[#eef2f3] px-4 py-4 text-base text-[#0d1b2a] placeholder:text-zinc-400 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />
            </label>

            <button
              type="button"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-[22px] bg-gradient-to-r from-[#3ecbe7] to-[#4db7d3] px-6 py-4 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(61,186,216,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </motion.div>
        </div>

        <div className="mt-9 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-[#dfe7eb] bg-white/80 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
            Testimonials
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {quickLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dfe7eb] bg-white text-zinc-600 shadow-sm transition-all hover:-translate-y-0.5 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-md"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
