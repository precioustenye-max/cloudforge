import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { processSteps } from '@/data/process';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
export default function HowWeWork() {
    return (_jsx("section", { className: "relative py-20 md:py-28 lg:py-32 border-section", children: _jsxs("div", { className: "container-max section-padding", children: [_jsx(SectionHeading, { eyebrow: "How We Work", title: "A clear process from idea to launch.", subtitle: "Every project follows a structured approach designed to deliver results, not just deliverables." }), _jsx("div", { className: "mt-16 relative", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: processSteps.map((step, i) => {
                            const Icon = step.icon;
                            return (_jsxs(ScrollReveal, { stagger: (i % 3) + 1, as: "article", className: "group glass-card glass-hover rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-start justify-between mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent-500/20", children: _jsx(Icon, { size: 24, className: "text-accent-600" }) }), _jsx("span", { className: "font-mono text-3xl font-bold text-black/[0.06] group-hover:text-accent-500/20 transition-colors", children: step.number })] }), _jsx("h3", { className: "text-lg font-semibold text-light-text mb-2", children: step.title }), _jsx("p", { className: "text-sm text-light-muted leading-relaxed", children: step.description })] }, step.number));
                        }) }) })] }) }));
}
