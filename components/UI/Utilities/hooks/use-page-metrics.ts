import { useState, useEffect } from 'react';

interface PageMetricsAndScroll {
  width: number;
  height: number;
  scrollWidth: number;
  scrollHeight: number;
  scrollX: number;
  scrollY: number;
}

const usePageMetricsAndScroll = (): PageMetricsAndScroll => {
  const [metrics, setMetrics] = useState<PageMetricsAndScroll>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  });

  useEffect(() => {
    const handleResizeAndScroll = () => {
      setMetrics({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    window.addEventListener('resize', handleResizeAndScroll);
    window.addEventListener('scroll', handleResizeAndScroll);

    // Initial call to set the correct values
    handleResizeAndScroll();

    return () => {
      window.removeEventListener('resize', handleResizeAndScroll);
      window.removeEventListener('scroll', handleResizeAndScroll);
    };
  }, []);

  return metrics;
};

export default usePageMetricsAndScroll;
