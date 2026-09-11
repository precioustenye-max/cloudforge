import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
export default function Services() {
    return (_jsx("section", { className: "relative py-20 md:py-28 lg:py-32", children: _jsxs("div", { className: "container-max section-padding", children: [_jsx(SectionHeading, { eyebrow: "What We Do", title: "Technology that moves your business forward.", subtitle: "We don\\u2019t just build attractive interfaces. We create practical digital solutions that help your business operate, grow and serve customers better." }), _jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((service, i) => {
                        const Icon = service.icon;
                        return (_jsxs(ScrollReveal, { stagger: (i % 3) + 1, as: "article", className: "group glass-card glass-hover rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-600/5", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent-500/20", children: _jsx(Icon, { size: 24, className: "text-accent-600" }) }), _jsx("h3", { className: "text-xl font-semibold text-light-text mb-3", children: service.title }), _jsx("p", { className: "text-sm text-light-muted leading-relaxed mb-6", children: service.shortDescription }), _jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors", children: ["Learn More", _jsx(ArrowRight, { size: 14, className: "transition-transform group-hover:translate-x-1" })] })] }, service.id));
                    }) })] }) }));
}
