import { useEffect } from 'react';

/**
 * Observes multiple section elements and calls setCurrentSection
 * with the id (without #) of the most visible/intersecting element.
 */
const useSectionObserver = (sectionIds = [], setCurrentSection) => {
  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0 || !setCurrentSection) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.25, 0.5, 0.75]
    };

    const observer = new IntersectionObserver((entries) => {
      // Choose the entry with highest intersectionRatio that isIntersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target && visible.target.id) {
        setCurrentSection(visible.target.id);
      }
    }, options);

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, setCurrentSection]);
};

export default useSectionObserver;
