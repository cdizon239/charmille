import type { CSSProperties } from 'react'

type Dot = { cx: number; cy: number; r: number; o: number; delay: number }

// A scent plume: particles dispersing upward from a source, fading as they
// rise — sensing smell, and data moving from lab to model.
const DOTS: Dot[] = [
  { cx: 24, cy: 39, r: 2.6, o: 1, delay: 0 },
  { cx: 22, cy: 31, r: 2, o: 0.85, delay: 0.25 },
  { cx: 27, cy: 26, r: 1.6, o: 0.7, delay: 0.5 },
  { cx: 20, cy: 21, r: 1.5, o: 0.6, delay: 0.8 },
  { cx: 26, cy: 16, r: 1.2, o: 0.5, delay: 1.05 },
  { cx: 22, cy: 11, r: 1.1, o: 0.38, delay: 1.35 },
  { cx: 25, cy: 6, r: 0.9, o: 0.28, delay: 1.6 },
]

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 48 46"
      width="38"
      height="38"
      aria-hidden="true"
    >
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="currentColor"
          style={{ '--o': d.o, animationDelay: `${d.delay}s` } as CSSProperties}
        />
      ))}
    </svg>
  )
}

export default BrandMark
