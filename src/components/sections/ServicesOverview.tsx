import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    number: "01",
    title: "App Development",
    subtitle: "Mobile & Web Apps",
    description:
      "From concept to launch, we build performant, scalable applications tailored to your users and business goals.",
    href: "/services/app-development",
  },
  {
    number: "02",
    title: "Web Design",
    subtitle: "Design & Development",
    description:
      "Purpose-driven websites that look brilliant, load fast, and convert — no templates, just bespoke builds.",
    href: "/services/web-design",
  },
  {
    number: "03",
    title: "System Integration",
    subtitle: "Connected Infrastructure",
    description:
      "We connect your tools, platforms, and data sources so your business runs as one cohesive system.",
    href: "/services/system-integration",
  },
  {
    number: "04",
    title: "Workflow Automation",
    subtitle: "Process Efficiency",
    description:
      "Eliminate manual work. We automate the repetitive so your team can focus on what actually matters.",
    href: "/services/workflow-automation",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-dark-green py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel light>Our Services</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            What we do best.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-200"
            >
              <span className="text-xs font-semibold tracking-widest text-mid-green">
                {s.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-3 mb-1">
                {s.title}
              </h3>
              <p className="text-mid-green text-sm font-medium mb-4">{s.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
              <span className="inline-block mt-6 text-xs text-white/40 group-hover:text-white/80 transition-colors duration-200 tracking-widest uppercase">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
