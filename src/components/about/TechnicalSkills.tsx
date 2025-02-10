import Image from 'next/image';
import { Badge } from '../ui/badge';

type TechnologyProps = {
  title: string;
  icon: string | any;
};
type SkillProps = {
  skill: {
    category: string;
    technologies: TechnologyProps[] ;
  };
};

export default function TechnicalSkills({ skill }: SkillProps) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-bold">{skill.category}</h2>
      <div className="flex flex-wrap gap-2 text-base text-muted-foreground">
        {skill.technologies.map(technology => (
          <Badge
            className="mr-2 h-10 items-center border border-muted-foreground bg-background text-foreground hover:cursor-pointer hover:bg-blue-200/60 hover:dark:bg-blue-400/35"
            key={technology.title}
          >
            <Image
              src={`/assets/images/skills/${technology.icon}`} // Dynamically use the icon path
              alt={`${technology.title} logo`}
              width={20}
              height={20}
              className={`mr-2 ${
                ['Next.js', 'Vercel', 'Kafka', 'Pandas', 'AWS', 'Express', 'Java'].includes(technology.title) ? 'dark:invert' : ''
              }`}
            />
            {technology.title}
          </Badge>
        ))}
      </div>
    </div>
  );
}
