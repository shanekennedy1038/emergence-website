import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services — Emergence Digital",
  description:
    "App development, web design, system integration and workflow automation for Melbourne businesses.",
};

const services = [
  {
    number: "01",
    title: "App Development",
    description:
      "From concept to launch, we build performant, scalable mobile and web applications tailored to your users and business goals. Whether you need a consumer-facing app or an internal tool, we have the depth to deliver it.",
    href: "/services/app-development",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="2" width="20" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="26" r="1.5" fill="currentColor" />
        <line x1="11" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Every project is tailored to your business goals, ensuring a unique, strategic solution that aligns with your vision — no off-the-shelf templates, just innovative, purpose-driven development.",
    href: "/services/web-design",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="5" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <line x1="2" y1="11" x2="30" y2="11" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6" cy="8" r="1.2" fill="currentColor" />
        <circle cx="10" cy="8" r="1.2" fill="currentColor" />
        <circle cx="14" cy="8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "We build future-proof applications and integrations designed to grow with your business, ensuring long-term stability, adaptability, and seamless performance as your needs evolve.",
    href: "/services/system-integration",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="1.8" />
        <line x1="12" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.8" />
        <line x1="10" y1="12" x2="14" y2="20" stroke="currentColor" strokeWidth="1.8" />
        <line x1="22" y1="12" x2="18" y2="20" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Yes, we have favourites and can make recommendations, but if you use a certain software or have a dream technology stack, we'll adapt to deliver the automation solution you need.",
    href: "/services/workflow-automation",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 16a10 10 0 0 1 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 16a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="16,6 20,6 20,10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16,26 12,26 12,22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-cream pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-dark-green mb-6">
            Our Services
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We offer end-to-end digital services — from building apps and websites
            to connecting your systems and automating your workflows. Everything
            custom, nothing off the shelf.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.href}
              className="bg-white rounded-2xl shadow-sm p-10 flex flex-col"
            >
              <div className="text-mid-green mb-6">{s.icon}</div>
              <span className="text-xs font-semibold tracking-widest text-mid-green mb-2">
                {s.number}
              </span>
              <h2 className="font-serif text-3xl font-bold text-dark-green mb-4">
                {s.title}
              </h2>
              <p className="text-muted leading-relaxed flex-1 mb-8">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="text-sm font-medium text-dark-green border-b border-dark-green/30 hover:border-mid-green hover:text-mid-green transition-colors duration-200 self-start"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
