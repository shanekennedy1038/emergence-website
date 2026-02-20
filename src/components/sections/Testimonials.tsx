import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "[QUOTE PLACEHOLDER] — Working with Emergence Digital transformed how we operate. The team brought fresh thinking and delivered on every promise.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "CEO",
  },
  {
    quote:
      "[QUOTE PLACEHOLDER] — The level of care and technical expertise they brought to our project was exceptional. We launched on time and ahead of expectations.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Founder",
  },
  {
    quote:
      "[QUOTE PLACEHOLDER] — From discovery to launch, the experience was seamless. They understood our vision and brought it to life better than we imagined.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Head of Product",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col">
              <p className="text-body italic leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-dark-green/10 pt-4">
                <p className="font-semibold text-dark-green text-sm">{t.name}</p>
                <p className="text-muted text-xs mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
