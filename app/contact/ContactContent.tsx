"use client";

import { useState, useEffect } from "react";

export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const email = "sumbotterilluiux@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowToast(true);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setCopied(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-content-sm">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I'd love to hear from you. Whether you're interested in discussing
          design opportunities, want a detailed portfolio walkthrough, or just
          want to connect, feel free to reach out!
        </p>

        {/* Contact Options */}
        <div className="mt-12 space-y-6">
          <div className="rounded-lg border border-border bg-secondary/50 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Best for detailed inquiries and portfolio walkthroughs
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                      copied
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    }`}
                    aria-label={copied ? "Copied!" : "Copy email address"}
                  >
                    {copied ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                          />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">LinkedIn</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Connect for networking and professional updates
                </p>
                <a
                  href="https://www.linkedin.com/in/summer-botterill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-medium text-primary hover:underline"
                >
                  linkedin.com/in/summerbotterill
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Location</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Based in Maryland, USA
                </p>
                <p className="mt-3 font-medium">Open to remote & hybrid opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-lg border border-border bg-muted/50 p-6 hidden">
          <h2 className="text-lg font-semibold">About Confidential Work</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Many of my case studies contain sanitized information to respect
            confidentiality agreements. I'm happy to provide deeper walkthroughs
            and additional context in a conversation. Feel free to reach out to
            discuss specific projects in more detail.
          </p>
        </div>

      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Copied to clipboard
        </div>
      </div>
    </div>
  );
}
