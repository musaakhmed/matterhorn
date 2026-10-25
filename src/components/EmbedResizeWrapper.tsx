'use client';

import React, { useEffect, useRef } from 'react';

interface EmbedResizeWrapperProps {
  children: React.ReactNode;
  widgetId?: string;
}

export default function EmbedResizeWrapper({
  children,
  widgetId = 'default',
}: EmbedResizeWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === 'undefined') return;

    const notifyParent = () => {
      if (!containerRef.current) return;
      const height = Math.ceil(
        containerRef.current.getBoundingClientRect().height
      );
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'matterhorn-widget-resize',
            widgetId,
            height,
          },
          '*'
        );
      }
    };

    notifyParent();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        notifyParent();
      });
      observer.observe(el);
    }

    window.addEventListener('resize', notifyParent);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', notifyParent);
    };
  }, [widgetId]);

  return (
    <div ref={containerRef} className="w-full inline-block">
      {children}
    </div>
  );
}
