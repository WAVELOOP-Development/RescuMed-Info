import { Navbar1 } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { SystemOverview } from "../components/system-overview";
import { KeyFeatures } from "../components/key-features";
import { MobileAppSection } from "../components/mobile-app-section";
import { WebDashboardSection } from "../components/web-dashboard-section";
import { ImpactSection } from "../components/impact-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar1 />
      <HeroSection />
      <AboutSection />
      <SystemOverview />
      <KeyFeatures />
      <MobileAppSection />
      <WebDashboardSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
