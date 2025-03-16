import DonationForm from "./components/DonationForm/DonationForm";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import ServiceHighlights from "./components/ServiceHighlights/ServiceHighlights";
import UrgentNeed from "./components/UrgentNeed/UrgentNeed";
import WidthWrapper from "./components/WidthWrapper";

export default function Home() {
  return (
    <WidthWrapper className='min-h-screen'>
      <Hero />
      <div className='relative -mt-[20px] lg:-mt-[30px] z-10 container mx-auto px-4'>
        <DonationForm />
      </div>
      <UrgentNeed />
      <InfoSection />
      <ServiceHighlights />
      <Footer />
    </WidthWrapper>
  );
}
