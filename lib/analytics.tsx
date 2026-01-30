"use client";

/**
 * Analytics wrapper component
 *
 * This component is set up to support Vercel Analytics or Plausible Analytics.
 * By default, analytics are DISABLED.
 *
 * To enable:
 * 1. For Vercel Analytics:
 *    - Install: npm install @vercel/analytics
 *    - Uncomment the Vercel Analytics code below
 *
 * 2. For Plausible Analytics:
 *    - Add your domain to the data-domain attribute
 *    - Uncomment the Plausible script below
 *
 * Never commit API keys or secrets to this file.
 */

export function Analytics() {
  // Vercel Analytics (disabled by default)
  // Uncomment to enable:
  // import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
  // return <VercelAnalytics />;

  // Plausible Analytics (disabled by default)
  // Uncomment to enable:
  // return (
  //   <script
  //     defer
  //     data-domain="summerbotterill.com"
  //     src="https://plausible.io/js/script.js"
  //   />
  // );

  // Analytics disabled
  return null;
}
