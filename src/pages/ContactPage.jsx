import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { insertProjectInquiry } from '@/lib/supabase';
import { company } from '@/data/site';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
const serviceOptions = [
    'Website',
    'E-commerce',
    'Custom Software',
    'Automation',
    'UI/UX Design',
    'Digital Transformation',
    'Other',
];
const budgetOptions = [
    'Under $500',
    '$500\u2013$1,000',
    '$1,000\u2013$2,500',
    '$2,500\u2013$5,000',
    '$5,000+',
];
const timelineOptions = [
    'ASAP',
    '1\u20132 weeks',
    '1\u20132 months',
    '3+ months',
    'Flexible',
];
export default function ContactPage() {
    const [formData, setFormData] = useState({
        full_name: '',
        business: '',
        email: '',
        phone: '',
        service_needed: '',
        estimated_budget: '',
        preferred_timeline: '',
        project_description: '',
    });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});
    const validate = () => {
        const e = {};
        if (!formData.full_name.trim())
            e.full_name = 'Please enter your name';
        if (!formData.email.trim())
            e.email = 'Please enter your email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            e.email = 'Please enter a valid email';
        if (!formData.service_needed)
            e.service_needed = 'Please select a service';
        if (!formData.project_description.trim())
            e.project_description = 'Please describe your project';
        setErrors(e);
        return Object.keys(e).length === 0;
    };
    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field])
            setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate())
            return;
        setStatus('loading');
        const { error } = await insertProjectInquiry(formData);
        if (error) {
            setStatus('error');
        }
        else {
            setStatus('success');
            setFormData({
                full_name: '',
                business: '',
                email: '',
                phone: '',
                service_needed: '',
                estimated_budget: '',
                preferred_timeline: '',
                project_description: '',
            });
        }
    };
    const inputBase = 'w-full px-4 py-3 rounded-xl bg-black/[0.03] border text-sm text-light-text placeholder:text-light-subtle transition-colors duration-200 outline-none';
    const inputOk = 'border-light-border focus:border-accent-500/50 focus:bg-black/[0.04]';
    const inputErr = 'border-red-500/40 focus:border-red-500/60';
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Contact \u2014 Cloudforge", description: "Start a project with Cloudforge. Tell us what you're building and we'll help you find the right digital solution." }), _jsx(PageHeader, { eyebrow: "Contact", title: "Start a Project", subtitle: "Tell us what you're building, what you're trying to improve, or where you're stuck. We'll help you find the right digital solution." }), _jsx("section", { className: "pb-16 pt-4", children: _jsx("div", { className: "container-max section-padding", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12", children: [_jsx("div", { className: "lg:col-span-3", children: _jsx(ScrollReveal, { className: "glass-card rounded-2xl p-8 md:p-10", children: status === 'success' ? (_jsxs("div", { className: "flex flex-col items-center text-center py-16", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6", children: _jsx(CheckCircle2, { size: 32, className: "text-accent-600" }) }), _jsx("h3", { className: "text-2xl font-bold text-light-text mb-3", children: "Project request sent!" }), _jsx("p", { className: "text-light-muted max-w-md leading-relaxed", children: "Thank you for reaching out. We'll review your request and get back to you within 24\\u201348 hours." }), _jsx("button", { onClick: () => setStatus('idle'), className: "mt-8 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors", children: "Send another request" })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [status === 'error' && (_jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-2", children: [_jsx(AlertCircle, { size: 18, className: "text-red-500 shrink-0" }), _jsx("p", { className: "text-sm text-red-600", children: "Something went wrong. Please try again or email us directly." })] })), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-light-text mb-2", children: ["Full Name ", _jsx("span", { className: "text-accent-600", children: "*" })] }), _jsx("input", { type: "text", value: formData.full_name, onChange: (e) => handleChange('full_name', e.target.value), className: `${inputBase} ${errors.full_name ? inputErr : inputOk}`, placeholder: "John Doe" }), errors.full_name && (_jsx("p", { className: "mt-1.5 text-xs text-red-500", children: errors.full_name }))] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-light-text mb-2", children: "Business / Company" }), _jsx("input", { type: "text", value: formData.business, onChange: (e) => handleChange('business', e.target.value), className: `${inputBase} ${inputOk}`, placeholder: "Your company" })] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-light-text mb-2", children: ["Email ", _jsx("span", { className: "text-accent-600", children: "*" })] }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => handleChange('email', e.target.value), className: `${inputBase} ${errors.email ? inputErr : inputOk}`, placeholder: "you@business.com" }), errors.email && (_jsx("p", { className: "mt-1.5 text-xs text-red-500", children: errors.email }))] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-light-text mb-2", children: "Phone / WhatsApp" }), _jsx("input", { type: "tel", value: formData.phone, onChange: (e) => handleChange('phone', e.target.value), className: `${inputBase} ${inputOk}`, placeholder: "+1 (555) 000-0000" })] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-light-text mb-2", children: ["Service Needed ", _jsx("span", { className: "text-accent-600", children: "*" })] }), _jsxs("select", { value: formData.service_needed, onChange: (e) => handleChange('service_needed', e.target.value), className: `${inputBase} ${errors.service_needed ? inputErr : inputOk} appearance-none cursor-pointer`, children: [_jsx("option", { value: "", className: "bg-light-surface", children: "Select a service" }), serviceOptions.map((s) => (_jsx("option", { value: s, className: "bg-light-surface", children: s }, s)))] }), errors.service_needed && (_jsx("p", { className: "mt-1.5 text-xs text-red-500", children: errors.service_needed }))] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-light-text mb-2", children: "Estimated Budget" }), _jsxs("select", { value: formData.estimated_budget, onChange: (e) => handleChange('estimated_budget', e.target.value), className: `${inputBase} ${inputOk} appearance-none cursor-pointer`, children: [_jsx("option", { value: "", className: "bg-light-surface", children: "Select a range" }), budgetOptions.map((b) => (_jsx("option", { value: b, className: "bg-light-surface", children: b }, b)))] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-light-text mb-2", children: "Preferred Timeline" }), _jsxs("select", { value: formData.preferred_timeline, onChange: (e) => handleChange('preferred_timeline', e.target.value), className: `${inputBase} ${inputOk} appearance-none cursor-pointer`, children: [_jsx("option", { value: "", className: "bg-light-surface", children: "Select a timeline" }), timelineOptions.map((t) => (_jsx("option", { value: t, className: "bg-light-surface", children: t }, t)))] })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-light-text mb-2", children: ["Project Description ", _jsx("span", { className: "text-accent-600", children: "*" })] }), _jsx("textarea", { value: formData.project_description, onChange: (e) => handleChange('project_description', e.target.value), rows: 5, className: `${inputBase} ${errors.project_description ? inputErr : inputOk} resize-none`, placeholder: "Tell us about your project, goals and any specific requirements..." }), errors.project_description && (_jsx("p", { className: "mt-1.5 text-xs text-red-500", children: errors.project_description }))] }), _jsx("button", { type: "submit", disabled: status === 'loading', className: "w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/20 hover:shadow-accent-600/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none", children: status === 'loading' ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { size: 18, className: "animate-spin" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 18 }), "Send Project Request"] })) })] })) }) }), _jsxs("div", { className: "lg:col-span-2 space-y-4", children: [_jsxs(ScrollReveal, { stagger: 1, className: "glass-card rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx(Mail, { size: 20, className: "text-accent-600" }), _jsx("h3", { className: "text-base font-semibold text-light-text", children: "Email" })] }), _jsx("a", { href: `mailto:${company.email}`, className: "text-sm text-light-muted hover:text-light-text transition-colors", children: company.email })] }), _jsxs(ScrollReveal, { stagger: 2, className: "glass-card rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx(Phone, { size: 20, className: "text-accent-600" }), _jsx("h3", { className: "text-base font-semibold text-light-text", children: "Phone" })] }), _jsx("a", { href: `tel:${company.phone}`, className: "text-sm text-light-muted hover:text-light-text transition-colors", children: company.phone })] }), _jsxs(ScrollReveal, { stagger: 3, className: "glass-card rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx(MessageCircle, { size: 20, className: "text-accent-600" }), _jsx("h3", { className: "text-base font-semibold text-light-text", children: "WhatsApp" })] }), _jsx("a", { href: `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-light-muted hover:text-light-text transition-colors", children: company.whatsapp })] }), _jsxs(ScrollReveal, { stagger: 4, className: "glass-card rounded-2xl p-8", children: [_jsx("h3", { className: "text-base font-semibold text-light-text mb-4", children: "Connect" }), _jsx("div", { className: "flex gap-3", children: [
                                                    { label: 'Twitter', href: company.social.twitter },
                                                    { label: 'LinkedIn', href: company.social.linkedin },
                                                    { label: 'GitHub', href: company.social.github },
                                                    { label: 'Instagram', href: company.social.instagram },
                                                ].map((s) => (_jsx("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "text-xs font-medium text-light-muted hover:text-light-text transition-colors", children: s.label }, s.label))) })] })] })] }) }) })] }));
}
