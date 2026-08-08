"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Company logo tile. Renders the brand mark on a clean light chip (brand marks
 * are designed for light backgrounds, so we keep the chip light in both themes
 * for fidelity). Falls back to a lavender monogram when no logo is supplied —
 * or when the file is missing, so a not-yet-committed mark degrades to the
 * monogram instead of a broken image.
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
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(logo) && !failed

  return (
    <div
      className={cn(
        "relative shrink-0 grid place-items-center overflow-hidden rounded-xl ring-1 ring-black/10",
        loaded ? "bg-white" : "bg-primary/10",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* Monogram holds the tile until the mark actually paints; swapping rather
          than layering keeps a transparent logo from showing the letter through. */}
      {!loaded && (
        <span className="font-bold text-primary" style={{ fontSize: size * 0.4 }}>
          {company[0]}
        </span>
      )}

      {showImage && (
        <Image
          src={logo!}
          alt={`${company} logo`}
          width={Math.round(size * 0.68)}
          height={Math.round(size * 0.68)}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 m-auto object-contain",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  )
}
