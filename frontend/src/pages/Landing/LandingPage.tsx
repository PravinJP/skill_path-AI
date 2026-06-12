import CTASection from "../../components/common/CTASection";
import FeaturesSection from "../../components/common/FeaturesSection";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/common/HeroSection";
import InterviewDemo from "../../components/common/InterviewDemo";
import Navbar from "../../components/common/Navbar";
import StatsSection from "../../components/common/StatsSection";
import Testimonials from "../../components/common/Testimonials";

const LandingPage = () => {
  return (
    <div className="bg-[#040814] text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <InterviewDemo />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;