import Image from "next/image";
import { Button } from "../ui/button";

import {
  CircleDollarSign,
  DollarSign,
  HandCoins,
  LineChart,
  Share2,
  Trophy,
} from "lucide-react";
import WidthWrapper from "../WidthWrapper";
import { Separator } from "../ui/separator";

export default function InfoSection() {
  const MockInfoSection = [
    {
      icon: <LineChart className='w-6 h-6' />,
      text: "Track your impact",
    },
    {
      icon: <CircleDollarSign className='w-6 h-6' />,
      text: "100% Transparency",
    },
    {
      icon: <CircleDollarSign className='w-6 h-6' />,
      text: "Tax benefits",
    },
    {
      icon: <Trophy className='w-6 h-6' />,
      text: "Win rewards",
    },
  ];
  return (
    <WidthWrapper className=' mx-6 lg:mx-8'>
      <div className='flex flex-col lg:flex-row-reverse border rounded-md'>
        <div className='w-full lg:w-1/2'>
          <div className='aspect-[16/9] md:aspect-[16/10] lg:aspect-auto lg:h-full relative'>
            <Image
              src='/Picture/picture_6.webp'
              alt='Child in need'
              fill
              className='object-cover rounded-md'
            />
          </div>
        </div>

        <div className='w-full lg:w-1/2 px-6 py-12 md:px-8 lg:px-12 lg:py-20'>
          <div className='max-w-2xl lg:max-w-none'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Donate Every month
            </h2>
            <p className='text-3xl md:text-4xl font-bold mb-12'>
              To save those kind souls. 💛
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mb-12'>
              {MockInfoSection.map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-full bg-[#004D40] text-white flex items-center justify-center shrink-0'>
                    {feature.icon}
                  </div>
                  <span className='text-lg text-gray-700'>{feature.text}</span>
                </div>
              ))}
            </div>

            <Button
              className='bg-[#F8D419] hover:bg-[#E5C200] text-black font-medium text-lg px-8'
              size='lg'
            >
              Donate now!!
            </Button>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>How to raise funds?</h1>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Find out how to successfully raise funds for your cause or project.
            Learn how to make fundraising efforts a success step by step.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12 relative'>
          <div className='p-6'>
            <div className='mb-6 flex justify-center'>
              <div className='p-3 rounded-full bg-yellow-100'>
                <HandCoins className='w-6 h-6 text-yellow-600' />
              </div>
            </div>
            <h2 className='text-xl font-semibold text-center mb-3'>
              Start your fundraiser
            </h2>
            <p className='text-muted-foreground text-center'>
              Lectus mauris ultrices eros in cursus. Magna eget est lorem ipsum.
              Sed egestas egestas fringilla phasellus faucibus scelerisque
              eleifend.
            </p>
          </div>
          <Separator className='hidden md:block lg:hidden' />
          <div className='hidden lg:block absolute top-0 bottom-0 left-1/3 -ml-px'>
            <Separator orientation='vertical' />
          </div>

          <div className='p-6'>
            <div className='mb-6 flex justify-center'>
              <div className='p-3 rounded-full bg-blue-100'>
                <Share2 className='w-6 h-6 text-blue-600' />
              </div>
            </div>
            <h2 className='text-xl font-semibold text-center mb-3'>
              Share your fundraiser
            </h2>
            <p className='text-muted-foreground text-center'>
              Lectus mauris ultrices eros in cursus. Magna eget est lorem ipsum.
              Sed egestas egestas fringilla phasellus faucibus scelerisque
              eleifend.
            </p>
          </div>
          <Separator className='hidden md:block lg:hidden' />
          <div className='hidden lg:block absolute top-0 bottom-0 left-2/3 -ml-px'>
            <Separator orientation='vertical' />
          </div>

          <div className='p-6'>
            <div className='mb-6 flex justify-center'>
              <div className='p-3 rounded-full bg-green-100'>
                <DollarSign className='w-6 h-6 text-green-600' />
              </div>
            </div>
            <h2 className='text-xl font-semibold text-center mb-3'>
              Withdraw Funds
            </h2>
            <p className='text-muted-foreground text-center'>
              Lectus mauris ultrices eros in cursus. Magna eget est lorem ipsum.
              Sed egestas egestas fringilla phasellus faucibus scelerisque
              eleifend.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 mb-12'>
          <Button className='bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg'>
            Start a fundraiser for free
          </Button>
          <Button className='bg-[#0B4B3C] hover:bg-[#0B4B3C]/90 text-white px-8 py-6 text-lg'>
            Talk to us now
          </Button>
        </div>

        <div className='text-center'>
          <p className='text-lg mb-4'>
            Have any questions for us? Chat with our team on Facebook or
            WhatsApp now.
          </p>
          <div className='flex justify-center gap-4'>
            <Button className='bg-[#1877F2] hover:bg-[#1877F2]/90 text-white'>
              <svg
                className='w-5 h-5 mr-2'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
              Chat with us
            </Button>
            <Button className='bg-[#25D366] hover:bg-[#25D366]/90 text-white'>
              <svg
                className='w-5 h-5 mr-2'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
              </svg>
              Chat with us
            </Button>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}
