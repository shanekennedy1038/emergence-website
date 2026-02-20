import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-dark-green py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Something Brilliant?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Let&apos;s talk about your project. A free strategy session is the best
          place to start.
        </p>
        <Button href="/contact" variant="outline-light" className="text-base px-10 py-4">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
