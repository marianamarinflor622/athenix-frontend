import { useEffect, useRef } from 'react';

export default function useInfiniteScroll(callback) {
  const observer = useRef();
  const lastElementRef = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) callback();
    }, { threshold: 1 });

    const current = lastElementRef.current;
    if (current) observer.current.observe(current);
    return () => observer.current.disconnect();
  }, [callback]);

  return lastElementRef;
}