import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { company } from '@/data/site';
import ScrollReveal from '@/components/ui/ScrollReveal';
export default function TrustBar() {
    return (_jsx("section", { className: "relative py-16 md:py-20 border-y border-light-border bg-light-surface", children: _jsx("div", { className: "container-max section-padding", children: _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: company.stats.map((stat, i) => (_jsxs(ScrollReveal, { stagger: i + 1, className: "text-center", children: [_jsx("div", { className: "text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-accent", children: stat.value }), _jsx("div", { className: "mt-2 text-sm text-light-muted font-medium tracking-wide", children: stat.label })] }, stat.label))) }) }) }));
}
