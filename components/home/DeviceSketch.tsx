/**
 * Line drawing of a MacBook, iPad and iPhone 16. Each shape uses pathLength="1"
 * so the `.sketch-line` animation in globals.css can trace it on, device by device.
 * Bodies get a solid fill so overlapping devices hide the lines behind them.
 */
export function DeviceSketch({ className = "" }: { className?: string }) {
  const body = "fill-background stroke-foreground/80";
  const screen = "fill-none stroke-foreground/30";

  return (
    <svg
      viewBox="0 0 800 470"
      className={`h-auto w-full overflow-visible ${className}`}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Line drawing of a laptop, a tablet and a phone"
    >
      {/* MacBook */}
      <g style={{ "--sketch-delay": "0s" } as React.CSSProperties}>
        <rect className={`sketch-line ${body}`} pathLength={1} x="170" y="40" width="460" height="292" rx="16" />
        <rect className={`sketch-line ${screen}`} pathLength={1} x="184" y="54" width="432" height="264" rx="5" />
        <rect className="sketch-fill fill-foreground/80" x="383" y="54" width="34" height="7" rx="3.5" />
        <path
          className={`sketch-line ${body}`}
          pathLength={1}
          d="M150 332 H650 L688 348 Q692 354 684 356 H116 Q108 354 112 348 Z"
        />
        <path className={`sketch-line ${screen}`} pathLength={1} d="M362 332 V335 Q362 339 366 339 H434 Q438 339 438 335 V332" />
      </g>

      {/* iPad (portrait), front left */}
      <g style={{ "--sketch-delay": "0.5s" } as React.CSSProperties}>
        <rect className={`sketch-line ${body}`} pathLength={1} x="58" y="168" width="196" height="270" rx="20" />
        <rect className={`sketch-line ${screen}`} pathLength={1} x="69" y="179" width="174" height="248" rx="11" />
        <circle className="sketch-fill fill-foreground/70" cx="156" cy="173.5" r="1.8" />
        <path className={`sketch-line stroke-foreground/80`} pathLength={1} d="M200 167 H222" />
      </g>

      {/* iPhone 16, front right */}
      <g style={{ "--sketch-delay": "1s" } as React.CSSProperties}>
        <rect className={`sketch-line ${body}`} pathLength={1} x="588" y="228" width="116" height="234" rx="24" />
        <rect className={`sketch-line ${screen}`} pathLength={1} x="594.5" y="234.5" width="103" height="221" rx="18" />
        <rect className="sketch-fill fill-foreground/80" x="628" y="243" width="36" height="10.5" rx="5.25" />
        <path className="sketch-line stroke-foreground/80" pathLength={1} d="M705 300 V336" />
        <path className="sketch-line stroke-foreground/80" pathLength={1} d="M587 286 V300 M587 312 V334 M587 342 V364" />
      </g>
    </svg>
  );
}
