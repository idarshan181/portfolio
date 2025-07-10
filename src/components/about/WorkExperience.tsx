import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type WorkExperienceProps = {
  experience: {
    company: string;
    role: string;
    timeframe: string;
    achievements: string[];
    images: { src: string; alt: string; width: number; height: number }[];
  };
  isLast: boolean;
};

export default function WorkExperience({ experience, isLast }: WorkExperienceProps) {
  return (
    <>
      <Card className="border-none bg-background shadow-none drop-shadow-none">
        <CardHeader className="flex flex-row items-center justify-between p-1">
          <div className="flex w-fit flex-col">
            <span className="text-lg font-bold">{experience.company}</span>
            <span className="mt-0 text-sm text-primary">{experience.role}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{experience.timeframe}</span>
        </CardHeader>
        <CardContent className="p-1 ">

          {/* Achievements List */}
          <ul className="mt-3 space-y-2 text-foreground">
            {experience.achievements.map(achievement => (
              <li
                key={achievement.split(' ')[0]}
                className="relative pl-6 text-base before:absolute before:left-0 before:text-primary before:content-['•']"
              >
                {achievement}
              </li>
            ))}
          </ul>

          {/* Experience Images */}
          {experience.images.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {experience.images.map(image => (
                <div key={image.alt} className="overflow-hidden rounded-md ">
                  <Image
                    className="object-cover"
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Separator except for the last item */}
      {!isLast && <Separator className="mt-6" />}
    </>
  );
}
