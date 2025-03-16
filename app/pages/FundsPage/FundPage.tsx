import CharityCard from "@/app/components/CharityCard/CharityCard";
import { HeroFunds } from "@/app/components/Hero";
import WidthWrapper from "@/app/components/WidthWrapper";
import { fundraisersFundPages } from "@/app/utils/mock/MockCharityCard";

export default function FundPage() {
  return (
    <WidthWrapper>
      <div>
        <HeroFunds />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-3'>
          {fundraisersFundPages.map((fundraiser, index) => (
            <CharityCard key={index} fundraiser={fundraiser} />
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
}
