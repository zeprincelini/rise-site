import { useState, useEffect } from "react";

export const useIntersect = (cardRef) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(entry.isIntersecting);
      }
    });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  });

  return visible;
};
