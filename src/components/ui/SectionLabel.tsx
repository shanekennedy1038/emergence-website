/**
 * Small pill/badge label displayed above section headings.
 * e.g. "OUR SERVICES" in small caps, mid-green.
 */
interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean; // use when on a dark background
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-widest uppercase mb-4 ${
        light ? "text-[#7EB893]" : "text-mid-green"
      }`}
    >
      {children}
    </span>
  );
}
