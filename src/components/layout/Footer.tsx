import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Ndikubwimana Melanie. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
