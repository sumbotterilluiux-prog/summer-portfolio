"use client";

import { useEffect, useState } from "react";

export function ProblemIllustration() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const bgColor = isDark ? "#1a1a2e" : "#f8f7ff";
  const cardBg = isDark ? "#252540" : "#ffffff";
  const borderColor = isDark ? "#3d3d5c" : "#e2e0f0";
  const textPrimary = isDark ? "#e8e8f0" : "#2d2d3a";
  const textMuted = isDark ? "#8888a0" : "#6b6b80";
  const accentPurple = isDark ? "#C6B8CC" : "#7A5C7D";
  const warningColor = isDark ? "#f59e0b" : "#d97706";
  const arrowColor = isDark ? "#6b6b80" : "#9999a8";

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-secondary/30 p-6">
      <svg
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background */}
        <rect width="500" height="320" fill={bgColor} rx="8" />

        {/* Title */}
        <text
          x="250"
          y="30"
          textAnchor="middle"
          fill={textMuted}
          fontSize="12"
          fontWeight="500"
        >
          Fragmented Workflow
        </text>

        {/* Central user icon */}
        <circle cx="250" cy="160" r="28" fill={accentPurple} opacity="0.15" />
        <circle cx="250" cy="152" r="10" fill={accentPurple} />
        <path
          d="M232 175c0-10 8-18 18-18s18 8 18 18"
          stroke={accentPurple}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Confused indicators around user */}
        <text x="280" y="140" fill={warningColor} fontSize="16" fontWeight="bold">?</text>
        <text x="215" y="145" fill={warningColor} fontSize="14" fontWeight="bold">!</text>

        {/* App 1 - Spreadsheet (top left) */}
        <g transform="translate(60, 60)">
          <rect width="90" height="70" rx="6" fill={cardBg} stroke={borderColor} strokeWidth="1.5" />
          <rect x="10" y="12" width="70" height="6" rx="2" fill={accentPurple} opacity="0.3" />
          <rect x="10" y="24" width="20" height="4" rx="1" fill={textMuted} opacity="0.5" />
          <rect x="35" y="24" width="20" height="4" rx="1" fill={textMuted} opacity="0.5" />
          <rect x="60" y="24" width="20" height="4" rx="1" fill={textMuted} opacity="0.5" />
          <rect x="10" y="32" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="35" y="32" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="60" y="32" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="10" y="40" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="35" y="40" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="60" y="40" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="10" y="48" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="35" y="48" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="60" y="48" width="20" height="4" rx="1" fill={textMuted} opacity="0.3" />
          <text x="45" y="66" textAnchor="middle" fill={textMuted} fontSize="8">Spreadsheets</text>
        </g>

        {/* Arrow from App 1 to user */}
        <path
          d="M150 105 Q 180 120 220 145"
          stroke={arrowColor}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* App 2 - Email (top right) */}
        <g transform="translate(350, 60)">
          <rect width="90" height="70" rx="6" fill={cardBg} stroke={borderColor} strokeWidth="1.5" />
          <rect x="10" y="12" width="70" height="8" rx="2" fill={accentPurple} opacity="0.2" />
          <circle cx="18" cy="16" r="4" fill={accentPurple} opacity="0.5" />
          <rect x="26" y="14" width="30" height="3" rx="1" fill={textMuted} opacity="0.5" />
          <rect x="10" y="26" width="70" height="6" rx="1" fill={textMuted} opacity="0.2" />
          <rect x="10" y="36" width="70" height="6" rx="1" fill={textMuted} opacity="0.2" />
          <rect x="10" y="46" width="70" height="6" rx="1" fill={textMuted} opacity="0.2" />
          <text x="45" y="66" textAnchor="middle" fill={textMuted} fontSize="8">Email</text>
        </g>

        {/* Arrow from App 2 to user */}
        <path
          d="M350 105 Q 320 120 280 145"
          stroke={arrowColor}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* App 3 - Invoice tool (bottom left) */}
        <g transform="translate(60, 190)">
          <rect width="90" height="70" rx="6" fill={cardBg} stroke={borderColor} strokeWidth="1.5" />
          <rect x="10" y="10" width="40" height="5" rx="1" fill={textPrimary} opacity="0.3" />
          <rect x="10" y="20" width="70" height="1" fill={borderColor} />
          <text x="15" y="32" fill={textMuted} fontSize="7" opacity="0.7">Invoice #1042</text>
          <rect x="55" y="27" width="25" height="8" rx="2" fill={accentPurple} opacity="0.3" />
          <text x="15" y="44" fill={textMuted} fontSize="7" opacity="0.7">Invoice #1041</text>
          <rect x="55" y="39" width="25" height="8" rx="2" fill={warningColor} opacity="0.3" />
          <text x="45" y="66" textAnchor="middle" fill={textMuted} fontSize="8">Invoicing</text>
        </g>

        {/* Arrow from App 3 to user */}
        <path
          d="M150 215 Q 180 195 220 175"
          stroke={arrowColor}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* App 4 - Banking (bottom right) */}
        <g transform="translate(350, 190)">
          <rect width="90" height="70" rx="6" fill={cardBg} stroke={borderColor} strokeWidth="1.5" />
          <rect x="10" y="10" width="50" height="6" rx="1" fill={accentPurple} opacity="0.4" />
          <text x="15" y="30" fill={textMuted} fontSize="8" opacity="0.8">$12,450.00</text>
          <rect x="10" y="38" width="70" height="1" fill={borderColor} />
          <rect x="10" y="44" width="45" height="3" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="60" y="44" width="20" height="3" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="10" y="50" width="45" height="3" rx="1" fill={textMuted} opacity="0.3" />
          <rect x="60" y="50" width="20" height="3" rx="1" fill={textMuted} opacity="0.3" />
          <text x="45" y="66" textAnchor="middle" fill={textMuted} fontSize="8">Banking</text>
        </g>

        {/* Arrow from App 4 to user */}
        <path
          d="M350 215 Q 320 195 280 175"
          stroke={arrowColor}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* Time wasted indicator */}
        <g transform="translate(200, 270)">
          <rect width="100" height="30" rx="4" fill={warningColor} opacity="0.15" />
          <text x="50" y="18" textAnchor="middle" fill={warningColor} fontSize="10" fontWeight="600">
            8+ hrs/week lost
          </text>
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill={arrowColor} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
