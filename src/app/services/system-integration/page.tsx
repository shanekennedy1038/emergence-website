import type { Metadata } from "next";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

export const metadata: Metadata = {
  title: "System Integration — Emergence Digital",
  description:
    "Connect your tools, platforms, and data sources. Future-proof system integration for Melbourne businesses.",
};

export default function SystemIntegrationPage() {
  return (
    <ServicePageLayout
      label="System Integration"
      title="Your systems, working as one."
      intro="We build future-proof applications and websites designed to grow with your business, ensuring long-term stability, adaptability, and seamless performance as your needs evolve."
      features={[
        {
          title: "Third-Party API Integration",
          description:
            "We connect your existing tools — CRMs, ERPs, payment gateways, logistics platforms — into a single, cohesive system.",
        },
        {
          title: "Data Pipeline Architecture",
          description:
            "Design and build reliable data pipelines that move information between systems accurately and on time.",
        },
        {
          title: "Legacy System Modernisation",
          description:
            "Bridge old infrastructure with new platforms, extending the life of existing investments while enabling modern capabilities.",
        },
        {
          title: "Real-Time Synchronisation",
          description:
            "Ensure data stays consistent across all your platforms with real-time sync and conflict resolution strategies.",
        },
      ]}
      whoItsFor="Ideal for businesses running multiple disconnected tools, companies undergoing digital transformation, and operations teams frustrated by manual data entry and siloed information."
      imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      imageAlt="System integration — server infrastructure and network connections"
    />
  );
}
