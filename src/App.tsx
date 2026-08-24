import { useEffect } from 'react';
import { useRouter } from '@/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import MissionVisionPage from '@/pages/MissionVisionPage';
import ProgramsPage from '@/pages/ProgramsPage';
import DonatePage from '@/pages/DonatePage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import AccessibilityPage from '@/pages/AccessibilityPage';

export default function App() {
  const { path } = useRouter();

  useEffect(() => {
    document.title = 'Charles Workforce Readiness Foundation | Workforce Ready';
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/mission-vision':
        return <MissionVisionPage />;
      case '/programs':
        return <ProgramsPage />;
      case '/donate':
        return <DonatePage />;
      case '/get-involved':
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/accessibility':
        return <AccessibilityPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={path} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
