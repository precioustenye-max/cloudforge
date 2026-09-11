import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ServicesPage from '@/pages/ServicesPage';
import ProjectsPage from '@/pages/ProjectsPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import PartnersPage from '@/pages/PartnersPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import TeamMemberPage from '@/pages/TeamMemberPage';
import OngoingProjectsPage from '@/pages/OngoingProjectsPage';
import NotFound from '@/pages/NotFound';
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/projects", element: _jsx(ProjectsPage, {}) }), _jsx(Route, { path: "/projects/:slug", element: _jsx(CaseStudyPage, {}) }), _jsx(Route, { path: "/team/:id", element: _jsx(TeamMemberPage, {}) }), _jsx(Route, { path: "/ongoing-projects", element: _jsx(OngoingProjectsPage, {}) }), _jsx(Route, { path: "/partners", element: _jsx(PartnersPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
