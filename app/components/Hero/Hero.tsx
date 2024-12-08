import Image from "next/image";
import { Button } from "../ui/button";
import WidthWrapper from "../WidthWrapper";

export default function Hero() {
  return (
    <WidthWrapper>
      <section className='bg-primary lg:h-screen text-white'>
        <div className='container mx-auto px-4 py-12 lg:py-0'>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='w-full lg:w-[40%] mb-8 lg:mb-0'>
              <Image
                src='/Picture/picture_2.webp'
                alt='Gambar kegiatan amal'
                width={500}
                height={400}
                className='w-full h-[90vh] object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full lg:w-[60%] lg:pl-12'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
                Bersama Kita Berbagi Kebaikan:
              </h1>
              <p className='text-lg md:text-xl mb-8 max-w-lg'>
                Bergabunglah dalam misi kami untuk membantu mereka yang
                membutuhkan melalui donasi dan kegiatan sukarela
              </p>
              <Button
                variant='secondary'
                className='bg-[#F8D419] text-primary hover:bg-[#E5C200] transition-colors'
                size='lg'
              >
                Donasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </WidthWrapper>
  );
}
