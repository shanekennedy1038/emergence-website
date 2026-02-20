import type { Metadata } from "next";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Design — Emergence Digital",
  description:
    "Bespoke web design and development in Melbourne. Purpose-driven websites that look brilliant and convert.",
};

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      label="Web Design"
      title="Websites that work as hard as you do."
      intro="Every project is tailored to your business goals, ensuring a unique, strategic solution that aligns with your vision — no off-the-shelf templates, just innovative, purpose-driven development."
      features={[
        {
          title: "Bespoke UI/UX Design",
          description:
            "Every pixel is considered. We design interfaces that are visually compelling, easy to use, and aligned with your brand identity.",
        },
        {
          title: "Next.js & Modern Development",
          description:
            "Fast, SEO-friendly websites built on Next.js and modern web standards — optimised for performance, accessibility, and search.",
        },
        {
          title: "Responsive Across All Devices",
          description:
            "Your site looks and works beautifully on every screen size, from mobile phones to large desktop displays.",
        },
        {
          title: "CMS Integration",
          description:
            "Need to update content yourself? We integrate headless CMS platforms so your team can manage content without touching code.",
        },
      ]}
      whoItsFor="Perfect for growing businesses that have outgrown a template site, service-based professionals who want to make a strong first impression, and brands that understand design is a competitive advantage."
      imageSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
      imageAlt="Web design — clean modern interface on a screen"
    />
  );
}
