import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

const segments = [
  {
    title: "Enterprise Projects",
    description:
      "We partner with established organisations to deliver complex digital projects — from custom platforms to large-scale integrations — with the reliability and rigour enterprise teams expect.",
  },
  {
    title: "Growing Startups",
    description:
      "Move fast without breaking things. We help startups build the right product, right now — scalable foundations, clean UX, and the technical muscle to keep pace with your ambitions.",
  },
  {
    title: "Service-Based Businesses",
    description:
      "Whether you're a consultancy, agency, or professional practice, we help you streamline operations, improve your online presence, and win more of the right clients.",
  },
  {
    title: "Retail & Ecommerce",
    description:
      "From Shopify builds to custom ecommerce platforms and inventory integrations, we help retail brands create seamless shopping experiences that convert and scale.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Who We Help</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
            Built for businesses that want more.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((seg) => (
            <Card key={seg.title}>
              <h3 className="font-serif text-2xl font-semibold text-dark-green mb-3">
                {seg.title}
              </h3>
              <p className="text-muted leading-relaxed">{seg.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
