import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  stagger,
  as: Tag = 'div',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const staggerClass = stagger ? `stagger-${stagger}` : '';

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${staggerClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
