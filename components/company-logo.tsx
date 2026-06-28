import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Company logo tile. Renders the brand mark on a clean light chip (brand marks
 * are designed for light backgrounds, so we keep the chip light in both themes
 * for fidelity). Falls back to a lavender monogram when no logo is supplied.
 */
export function CompanyLogo({
  logo,
  company,
  size = 44,
  className,
}: {
  logo?: string
  company: string
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 grid place-items-center overflow-hidden rounded-xl ring-1 ring-black/10",
        logo ? "bg-white" : "bg-primary/10",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${company} logo`}
          width={Math.round(size * 0.68)}
          height={Math.round(size * 0.68)}
          className="object-contain"
        />
      ) : (
        <span
          className="font-bold text-primary"
          style={{ fontSize: size * 0.4 }}
        >
          {company[0]}
        </span>
      )}
    </div>
  )
}
