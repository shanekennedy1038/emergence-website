/**
 * Generic white card with subtle shadow and rounded corners.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-8 ${className}`}
    >
      {children}
    </div>
  );
}
