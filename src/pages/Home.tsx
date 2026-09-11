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
  return (
    <div className="home-page">
      <SEO
        title={`${company.name} — ${company.tagline}`}
        description={company.description}
      />
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedProjects />
      <OngoingProjects />
      <HowWeWork />
      <Technologies />
      <Partners />
      <WhyCloudforge />
      <Team />
      <AboutPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
