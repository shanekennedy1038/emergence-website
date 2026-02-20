import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Fast Effective Solutions",
    description:
      "We cut through complexity to deliver working solutions quickly — without sacrificing quality or long-term maintainability.",
  },
  {
    title: "Custom-Built for Your Needs",
    description:
      "No off-the-shelf templates. Every project is tailored to your business goals, ensuring a unique, strategic solution.",
  },
  {
    title: "Reliable & Scalable",
    description:
      "We build future-proof applications designed to grow with your business, ensuring long-term stability and seamless performance.",
  },
  {
    title: "Technology Agnostic",
    description:
      "We have favourites and can make recommendations, but we'll adapt to deliver the solution you need on your preferred stack.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-dark-green py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — headline */}
          <div>
            <SectionLabel light>Why Choose Emergence</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The agency that delivers, every time.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We&apos;re a Melbourne-based team of digital specialists who care deeply
              about the work we produce and the businesses we build it for. We
              combine technical excellence with genuine partnership to help you
              achieve results that matter.
            </p>
          </div>

          {/* Right — feature checkpoints */}
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                {/* Checkmark */}
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-mid-green flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
