import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onDark,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("relative z-10 inline-flex shrink-0 items-center", className)}
      aria-label="IAA Kochi home"
    >
      <Image
        src="/brand/iaa-logo.png"
        alt="Institute of Advanced Aesthetics Kochi"
        width={859}
        height={498}
        className={cn("logo-mark object-contain object-left", onDark && "logo-halo")}
        priority
      />
    </Link>
  );
}
