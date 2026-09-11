import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { whyCloudforge } from '@/data/whyCloudforge';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
export default function WhyCloudforge() {
    return (_jsxs("section", { className: "relative py-20 md:py-28 lg:py-32 border-section bg-light-surface", children: [_jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-[150px]" }), _jsxs("div", { className: "container-max section-padding relative z-10", children: [_jsx(SectionHeading, { eyebrow: "Why Cloudforge", title: "A partner you can rely on.", subtitle: "We bring more than technical skills. We bring business thinking, clear communication and a commitment to long-term success." }), _jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: whyCloudforge.map((point, i) => {
                            const Icon = point.icon;
                            return (_jsxs(ScrollReveal, { stagger: (i % 3) + 1, as: "article", className: "group glass-card glass-hover rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent-500/20", children: _jsx(Icon, { size: 20, className: "text-accent-600" }) }), _jsx("h3", { className: "text-base font-semibold text-light-text", children: point.title })] }), _jsx("p", { className: "text-sm text-light-muted leading-relaxed", children: point.description })] }, point.title));
                        }) })] })] }));
}
