import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroFunds() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 p-6 md:p-12'>
      <div className='md:w-1/2 text-center md:text-left space-y-4'>
        <h1 className='text-3xl md:text-5xl font-bold inline-block p-2'>
          Thousands are crowdfunding for various causes
        </h1>
        <p className='text-gray-600  inline-block p-2'>
          Join the thousands rallying behind various causes through
          crowdfunding. Make a difference by supporting a fundraiser today.
        </p>
        <div className='flex items-center border border-gray-400 rounded-lg p-4 w-full md:w-auto'>
          <div className='flex-1'>
            <p className='font-semibold'>
              The monthly donation will help save a child
            </p>
          </div>
          <Button className='bg-yellow-400 text-black font-bold py-2 px-4 rounded-md'>
            Start giving monthly
          </Button>
        </div>
      </div>

      <div className='mt-6 md:mt-0'>
        <Image
          src='/Picture/picture_2.webp'
          alt='Happy Child'
          width={500}
          height={400}
          className='rounded-lg'
        />
      </div>
    </section>
  );
}
