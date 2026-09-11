import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export default function ScrollReveal({ children, className = '', stagger, as: Tag = 'div', once = true, }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                if (once)
                    observer.unobserve(el);
            }
            else if (!once) {
                setVisible(false);
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);
    const staggerClass = stagger ? `stagger-${stagger}` : '';
    return (_jsx(Tag, { ref: ref, className: `reveal ${staggerClass} ${visible ? 'is-visible' : ''} ${className}`, children: children }));
}
