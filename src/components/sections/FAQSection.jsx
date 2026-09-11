import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    return (_jsx("section", { className: "relative py-20 md:py-28 lg:py-32 border-section", children: _jsxs("div", { className: "container-max section-padding", children: [_jsx(SectionHeading, { eyebrow: "FAQ", title: "Questions, answered.", subtitle: "Everything you need to know before starting a project with Cloudforge." }), _jsx("div", { className: "mt-16 max-w-3xl mx-auto space-y-3", children: faqs.map((faq, i) => (_jsx(ScrollReveal, { stagger: (i % 4) + 1, children: _jsxs("div", { className: `glass-card rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-accent-500/30' : ''}`, children: [_jsxs("button", { onClick: () => setOpenIndex(openIndex === i ? null : i), className: "w-full flex items-center justify-between gap-4 p-6 text-left", children: [_jsx("span", { className: "text-base font-medium text-light-text", children: faq.question }), _jsx(ChevronDown, { size: 20, className: `text-accent-600 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}` })] }), _jsx("div", { className: `grid transition-all duration-300 ${openIndex === i
                                        ? 'grid-rows-[1fr] opacity-100'
                                        : 'grid-rows-[0fr] opacity-0'}`, children: _jsx("div", { className: "overflow-hidden", children: _jsx("p", { className: "px-6 pb-6 text-sm text-light-muted leading-relaxed", children: faq.answer }) }) })] }) }, i))) })] }) }));
}
