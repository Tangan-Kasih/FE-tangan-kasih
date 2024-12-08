import { fundraisers } from "@/app/utils/mock/MockCharityCard";
import { Button } from "../ui/button";
import WidthWrapper from "../WidthWrapper";
import CharityCard from "../CharityCard/CharityCard";

export default function UrgentNeed() {
  return (
    <WidthWrapper>
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            Urgent needs: Touch Lives, Save Lives!
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {fundraisers.map((fundraiser, index) => (
              <CharityCard key={index} fundraiser={fundraiser} />
            ))}
          </div>

          <div className='text-center'>
            <Button
              variant='secondary'
              size='lg'
              className='bg-[#F8D419] hover:bg-[#E5C200] text-black font-medium'
            >
              Browse all fundraisers
            </Button>
          </div>
        </div>
      </section>
    </WidthWrapper>
  );
}
