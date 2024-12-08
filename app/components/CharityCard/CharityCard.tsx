import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { Heart, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { formatPrice } from "@/app/utils/functions/functions";

interface FundraiserCard {
  image: string;
  title: string;
  author: {
    avatar: string;
    name: string;
  };
  raised: number;
  goal: number;
  contributors: number;
}

export default function CharityCard({
  fundraiser,
}: {
  fundraiser: FundraiserCard;
}) {
  const calculateProgress = (raised: number, goal: number) => {
    return (raised / goal) * 100;
  };

  return (
    <Card className='overflow-hidden'>
      <CardHeader className='p-0'>
        <Image
          src={fundraiser.image}
          alt={fundraiser.title}
          width={400}
          height={200}
          className='w-full h-48 object-cover'
        />
      </CardHeader>
      <CardContent className='p-4'>
        <h3 className='font-semibold text-lg mb-4 line-clamp-2'>
          {fundraiser.title}
        </h3>
        <div className='flex items-center gap-2 mb-4'>
          <div className='w-8 h-8 rounded-full bg-[#004D40] text-white flex items-center justify-center'>
            {fundraiser.author.avatar}
          </div>
          <span className='text-gray-600'>by {fundraiser.author.name}</span>
        </div>
        <div className='space-y-2'>
          <Progress
            value={calculateProgress(fundraiser.raised, fundraiser.goal)}
            className='h-2'
          />
          <div className='flex justify-between text-sm'>
            <span className='font-semibold'>
              {formatPrice(fundraiser.raised)}
            </span>
            <span className='text-gray-600'>
              raised out of {formatPrice(fundraiser.goal)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className='p-4 pt-0'>
        <div className='w-full space-y-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <Heart className='w-4 h-4 text-red-500 fill-current' />
              <span className='text-sm text-gray-600'>
                {fundraiser.contributors} Contributors
              </span>
            </div>
            <Button variant='ghost' size='sm' className='text-gray-600'>
              <Share2 className='w-4 h-4 mr-2' />
              Share
            </Button>
          </div>
          <Button className='w-full bg-[#004D40] hover:bg-[#00352C]'>
            Contribute »
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
