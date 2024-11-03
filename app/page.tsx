import { HeroSection } from '@/components/hero-section';
import { ServicesGrid } from '@/components/services-grid';
import { CaseStudies } from '@/components/case-studies';
import { Stats } from '@/components/stats';
import { Industries } from '@/components/industries';
import { Solutions } from '@/components/solutions';
import { Spotlight } from '@/components/spotlight';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <ServicesGrid />
      <CaseStudies />
      <Stats />
      <Industries />
      <Solutions />
      <Spotlight />
    </div>
  );
}