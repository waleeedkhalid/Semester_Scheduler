import { cn } from "@/lib/utils";

const variantClasses = {
  default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "text-foreground",
};

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof variantClasses;
};

const Badge = ({ className, variant = "default", ...props }: BadgeProps) => (
  <div
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
      variantClasses[variant],
      className,
    )}
    {...props}
  />
);

export { Badge };
