import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About — Emergence Digital",
  description:
    "Melbourne-based digital agency. Learn about our story, values, and the team behind Emergence Digital.",
};

const values = [
  {
    title: "Honest Partnership",
    description:
      "[PLACEHOLDER] We believe the best work happens when clients and agency operate as genuine partners — with full transparency, honest advice, and shared accountability for outcomes.",
  },
  {
    title: "Craft Over Commodity",
    description:
      "[PLACEHOLDER] We take pride in the quality of what we build. Every project, regardless of size, receives the same attention to detail and commitment to excellence.",
  },
  {
    title: "Speed With Intention",
    description:
      "[PLACEHOLDER] We move fast — but never recklessly. We combine agile delivery with thoughtful decision-making so speed never comes at the cost of quality.",
  },
  {
    title: "Technology as a Tool",
    description:
      "[PLACEHOLDER] We're not in love with technology for its own sake. We use it because it solves real problems and creates real value for the businesses we work with.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-dark-green mt-2 mb-6 max-w-3xl">
            About Emergence Digital
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            A Melbourne-based digital agency built on the belief that smart technology,
            thoughtful design, and genuine partnership produce exceptional results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-serif text-4xl font-bold text-dark-green mt-2 mb-6">
              Where we came from.
            </h2>
            <p className="text-body leading-relaxed mb-4">
              [PLACEHOLDER PARAGRAPH] Emergence Digital was founded with a simple
              conviction: that businesses deserve digital partners who are as invested
              in their success as they are. We started small, worked hard, and built
              a reputation for delivering work that genuinely moves the needle.
            </p>
            <p className="text-body leading-relaxed">
              [PLACEHOLDER PARAGRAPH] Today we work with clients across Australia —
              from fast-growing startups to established enterprises — helping them
              build the digital products and systems that power their next chapter.
              Every engagement is a partnership, and every partnership is taken
              seriously.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-dark-green/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern professional workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
              What drives us.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="font-serif text-2xl font-semibold text-dark-green mb-3">
                  {v.title}
                </h3>
                <p className="text-muted leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
              The people behind the work.
            </h2>
          </div>

          {/* Single team member card */}
          <div className="max-w-sm mx-auto">
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-dark-green/10 mx-auto mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-dark-green">
                [TEAM MEMBER NAME]
              </h3>
              <p className="text-mid-green text-sm font-medium mt-1 mb-4">[ROLE]</p>
              <p className="text-muted text-sm leading-relaxed">
                [BIO PLACEHOLDER] A passionate digital professional with deep experience
                in software development and digital strategy. Dedicated to building
                products that make a real difference for clients and their customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
