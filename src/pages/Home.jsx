import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SEO from '@/components/ui/SEO';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import OngoingProjects from '@/components/sections/OngoingProjects';
import HowWeWork from '@/components/sections/HowWeWork';
import Technologies from '@/components/sections/Technologies';
import Partners from '@/components/sections/Partners';
import WhyCloudforge from '@/components/sections/WhyCloudforge';
import Team from '@/components/sections/Team';
import AboutPreview from '@/components/sections/AboutPreview';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { company } from '@/data/site';
export default function Home() {
    return (_jsxs("div", { className: "home-page", children: [_jsx(SEO, { title: `${company.name} — ${company.tagline}`, description: company.description }), _jsx(Hero, {}), _jsx(TrustBar, {}), _jsx(Services, {}), _jsx(FeaturedProjects, {}), _jsx(OngoingProjects, {}), _jsx(HowWeWork, {}), _jsx(Technologies, {}), _jsx(Partners, {}), _jsx(WhyCloudforge, {}), _jsx(Team, {}), _jsx(AboutPreview, {}), _jsx(Testimonials, {}), _jsx(FAQSection, {}), _jsx(CTASection, {})] }));
}
