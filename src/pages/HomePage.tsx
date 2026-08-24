import Hero from '@/components/home/Hero';
import ImpactIntro from '@/components/home/ImpactIntro';
import MissionVision from '@/components/home/MissionVision';
import ProgramsSection from '@/components/home/ProgramsSection';
import HowItWorks from '@/components/home/HowItWorks';
import AboutSection from '@/components/home/AboutSection';
import FounderSection from '@/components/home/FounderSection';
import SuccessStories from '@/components/home/SuccessStories';
import DonateSection from '@/components/home/DonateSection';
import GetInvolvedSection from '@/components/home/GetInvolvedSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactIntro />
      <MissionVision variant="mission" />
      <MissionVision variant="vision" />
      <ProgramsSection />
      <HowItWorks />
      <AboutSection />
      <FounderSection />
      <SuccessStories />
      <DonateSection />
      <GetInvolvedSection />
    </>
  );
}
