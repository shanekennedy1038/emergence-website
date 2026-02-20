import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your goals, and the people you serve. Through workshops and research, we define what success looks like before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Our team translates strategy into reality — designing interfaces, building robust back-ends, and iterating rapidly to keep you involved and in control throughout the process.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description:
      "We don't disappear at launch. We help you go live with confidence, then stay on hand for support, improvements, and whatever comes next as your business grows.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
            A process built for results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              {/* Circular step number */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-mid-green mb-6">
                <span className="font-serif font-bold text-mid-green text-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-green mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
