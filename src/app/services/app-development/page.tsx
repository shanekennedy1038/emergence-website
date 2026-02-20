import type { Metadata } from "next";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

export const metadata: Metadata = {
  title: "App Development — Emergence Digital",
  description:
    "Custom mobile and web app development in Melbourne. We build scalable, performant applications tailored to your business.",
};

export default function AppDevelopmentPage() {
  return (
    <ServicePageLayout
      label="App Development"
      title="Apps built to perform, built to scale."
      intro="From concept to launch, we design and develop mobile and web applications that solve real problems for real users. Whether you need a customer-facing product or an internal tool, we bring the technical depth and product thinking to make it exceptional."
      features={[
        {
          title: "Custom Mobile Apps (iOS & Android)",
          description:
            "Native and cross-platform mobile development using React Native, Swift, or Kotlin — whatever best fits your product requirements.",
        },
        {
          title: "Web Application Development",
          description:
            "Full-stack web apps built on modern frameworks like Next.js, with robust back-ends that scale as your user base grows.",
        },
        {
          title: "API Design & Development",
          description:
            "Clean, well-documented REST or GraphQL APIs that power your front-end and integrate seamlessly with third-party services.",
        },
        {
          title: "Ongoing Support & Iteration",
          description:
            "We don't disappear at launch. We provide ongoing support, monitor performance, and continue improving your product over time.",
        },
      ]}
      whoItsFor="This service is ideal for startups building their first product, established businesses replacing legacy systems, and organisations that need a custom internal tool. If you have a problem that no off-the-shelf software solves cleanly, we can build the right solution."
      imageSrc="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
      imageAlt="App development — abstract code and technology"
    />
  );
}
