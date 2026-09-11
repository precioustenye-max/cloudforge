import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout({ children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (_jsxs("div", { className: "min-h-screen w-full max-w-full overflow-x-hidden bg-light-bg flex flex-col", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1 page-transition", children: children }), _jsx(Footer, {})] }));
}
