"use client";

import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = React.lazy<React.ComponentType<any>>(
  () => import("@/components/projects/viscose/Carousel"),
);

/** Mounts the WebGL ring only once the section is scrolled into view, so its entry animation plays for the visitor. */
function ProjectsCarousel() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-[92svh] min-h-[560px] w-full">
      {started && (
        <React.Suspense fallback={null}>
          <Carousel />
        </React.Suspense>
      )}
    </div>
  );
}

export { ProjectsCarousel };
