import { Award, Coins, DollarSign, Headphones } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function ServiceHighlights() {
  const features = [
    {
      icon: DollarSign,
      title: "Donations via all popular payment modes",
      description:
        "Tellus molestie nunc non blandit massa enim nec dui tincidunt lobortis feugiat vivamus at augue eget arcu dictum.",
    },
    {
      icon: Headphones,
      title: "Get Expert Support 24/7",
      description:
        "Tellus molestie nunc non blandit massa enim nec dui tincidunt lobortis feugiat vivamus at augue eget arcu dictum.",
    },
    {
      icon: Coins,
      title: "Withdraw Funds, Without Hassle",
      description:
        "Tellus molestie nunc non blandit massa enim nec dui tincidunt lobortis feugiat vivamus at augue eget arcu dictum.",
    },
    {
      icon: Award,
      title: "Industry's best fundraising success rate",
      description:
        "Tellus molestie nunc non blandit massa enim nec dui tincidunt lobortis feugiat vivamus at augue eget arcu dictum.",
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          How can GoLife span help you?
        </h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Together, we can alleviate financial burdens, offer hope, and ensure
          access to essential medical care. Every donation brings us one step
          closer to a healthier tomorrow.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((feature, index) => (
          <Card key={index} className='border-none shadow-lg'>
            <CardContent className='pt-6'>
              <div className='mb-6 flex justify-center'>
                <div className='p-4 rounded-full bg-[#E7F4F0]'>
                  <feature.icon className='w-6 h-6 text-[#0B4B3C]' />
                </div>
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground text-center'>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
