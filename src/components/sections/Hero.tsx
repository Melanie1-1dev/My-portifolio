"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { socials } from "@/data/socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-accent font-mono text-sm tracking-wider">
              Hi, I&apos;m Melanie 👋
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Software Developer &{" "}
              <span className="text-accent">Embedded Systems</span> Enthusiast
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              I build software and technology solutions that solve real-world
              problems. Currently studying at Rwanda Coding Academy, focused on
              web development, embedded systems, and AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Let&apos;s Connect
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="text-zinc-500 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl">
              {/* Code-like visual */}
              <div className="absolute inset-0 p-6 font-mono text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 overflow-hidden">
                <div className="space-y-1">
                  <p>
                    <span className="text-purple-500">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    name:{" "}
                    <span className="text-emerald-400">
                      &quot;Ndikubwimana Melanie&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    role:{" "}
                    <span className="text-emerald-400">
                      &quot;Software Developer&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    school:{" "}
                    <span className="text-emerald-400">
                      &quot;Rwanda Coding Academy&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    focus: [
                    <span className="text-emerald-400">
                      &quot;Web&quot;, &quot;Embedded&quot;, &quot;AI&quot;
                    </span>
                    ],
                  </p>
                  <p className="pl-4">
                    status:{" "}
                    <span className="text-emerald-400">
                      &quot;Building real solutions&quot;
                    </span>
                  </p>
                  <p>{"}"};</p>
                  <p className="mt-4 text-zinc-400">
                    // Always learning. Always building.
                  </p>
                </div>
              </div>
              {/* Soft gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
