import type { Metadata } from "next";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

export const metadata: Metadata = {
  title: "Workflow Automation — Emergence Digital",
  description:
    "Automate repetitive processes and free up your team. Custom workflow automation for Melbourne businesses.",
};

export default function WorkflowAutomationPage() {
  return (
    <ServicePageLayout
      label="Workflow Automation"
      title="Less manual work. More meaningful work."
      intro="Yes, we have favourites and can make recommendations, but if you use a certain software or have a dream technology stack, we'll adapt to deliver the automation solution you need."
      features={[
        {
          title: "Process Mapping & Audit",
          description:
            "We start by understanding how your business actually operates, identifying bottlenecks and automation opportunities before writing a single line.",
        },
        {
          title: "No-Code & Custom Automation",
          description:
            "From Zapier and Make to fully custom-coded automation pipelines — we choose the right tool for your scale and complexity.",
        },
        {
          title: "Document & Approval Workflows",
          description:
            "Automate contracts, approvals, notifications, and reporting so your team spends less time on admin.",
        },
        {
          title: "Monitoring & Maintenance",
          description:
            "Automated systems need oversight. We set up monitoring, alerts, and provide ongoing maintenance to keep everything running smoothly.",
        },
      ]}
      whoItsFor="Best suited to service businesses drowning in admin, operations teams doing repetitive manual tasks, and any organisation that wants to scale without proportionally scaling their headcount."
      imageSrc="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
      imageAlt="Workflow automation — gears and process visualisation"
    />
  );
}
