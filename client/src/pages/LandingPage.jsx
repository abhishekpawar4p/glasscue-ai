import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

function LandingPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="min-h-screen px-6 py-7 md:px-[8%]">
        <Navbar />
        <HeroSection />
      </section>

      <FeaturesSection />
    </main>
  );
}

export default LandingPage;