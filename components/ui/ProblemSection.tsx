import Image from "next/image";

interface ProblemSectionProps {
  children: React.ReactNode;
  src?: string;
  srcDark?: string;
  alt?: string;
}

export function ProblemSection({ children, src, srcDark, alt = "Problem illustration" }: ProblemSectionProps) {
  const hasImage = src || srcDark;

  return (
    <div className="not-prose">
      {/* Problem text content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
      {/* Illustration below the text */}
      <div className="mt-6 mx-auto max-w-2xl">
        <div className="w-full overflow-hidden rounded-[25px] border border-border bg-secondary/50 flex items-center justify-center">
          {hasImage ? (
            <>
              {/* Light mode image */}
              <Image
                src={src || srcDark!}
                alt={alt}
                width={800}
                height={400}
                className={`w-full h-auto ${srcDark ? "dark:hidden" : ""}`}
              />
              {/* Dark mode image */}
              {srcDark && (
                <Image
                  src={srcDark}
                  alt={alt}
                  width={800}
                  height={400}
                  className="w-full h-auto hidden dark:block"
                />
              )}
            </>
          ) : (
            <div className="aspect-[2/1] w-full flex items-center justify-center text-center text-muted-foreground p-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-10 w-10 mx-auto mb-2 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="text-xs">Problem Illustration</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
