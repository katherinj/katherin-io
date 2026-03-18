import { useEffect } from "react";

export default function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll(selector);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      els.forEach((el) => observer.observe(el));
      return observer;
    };

    // Run immediately
    let observer = observe();

    // Also re-run shortly after any DOM mutation (e.g. search filter changes)
    const mutationObserver = new MutationObserver(() => {
      observer.disconnect();
      observer = observe();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [selector]);
}
