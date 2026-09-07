import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ndikubwimana Melanie | Software Developer",
  description:
    "Software developer and Embedded Systems enthusiast at Rwanda Coding Academy. Building technology solutions that solve real-world problems.",
  keywords: [
    "Melanie Ndikubwimana",
    "Software Developer",
    "Rwanda Coding Academy",
    "Embedded Systems",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Ndikubwimana Melanie" }],
  openGraph: {
    title: "Ndikubwimana Melanie | Software Developer",
    description:
      "Software developer and Embedded Systems enthusiast at Rwanda Coding Academy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
