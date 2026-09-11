import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-light-border py-3'
                    : 'bg-transparent py-5'}`, children: _jsxs("nav", { className: "container-max section-padding flex items-center justify-between", children: [_jsx(Logo, {}), _jsx("div", { className: "hidden lg:flex items-center gap-1", children: navLinks.map((link) => {
                                const active = location.pathname === link.path;
                                return (_jsx(Link, { to: link.path, className: `px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${active
                                        ? 'text-light-text'
                                        : 'text-light-muted hover:text-light-text'}`, children: link.label }, link.path));
                            }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "hidden lg:block", children: _jsx(Button, { to: "/contact", size: "sm", children: "Start a Project" }) }), _jsx("button", { className: "lg:hidden text-light-text p-2 -mr-2", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }) }), open && (_jsxs("div", { className: "fixed inset-0 z-40 lg:hidden", children: [_jsx("div", { className: "absolute inset-0 bg-white/95 backdrop-blur-xl", onClick: () => setOpen(false) }), _jsxs("div", { className: "relative flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto", children: [_jsx("div", { className: "flex flex-col gap-1", children: navLinks.map((link, i) => {
                                    const active = location.pathname === link.path;
                                    return (_jsx(Link, { to: link.path, className: `text-2xl font-display font-semibold py-4 border-b border-light-border transition-all duration-300 ${active
                                            ? 'text-light-text'
                                            : 'text-light-muted'}`, style: {
                                            animation: open
                                                ? `fadeUp 0.4s ease-out ${i * 0.06}s both`
                                                : 'none',
                                        }, children: link.label }, link.path));
                                }) }), _jsx("div", { className: "mt-8", children: _jsx(Button, { to: "/contact", fullWidth: true, size: "lg", children: "Start a Project" }) })] })] }))] }));
}
