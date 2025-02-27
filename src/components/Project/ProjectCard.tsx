import type { Project } from '@/resources/projects';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../general/icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
          width={400}
          height={250}
          placeholder="empty"
          style={{
            objectFit: 'cover',
          }}
        />
        {project.featured && (
          <div className="absolute right-2 top-2">
            <Badge variant="default" className="text-xs text-white">Featured</Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><CardDescription className="line-clamp-2">{project.description}</CardDescription></TooltipTrigger>
            <TooltipContent className="w-full max-w-[100px] sm:max-w-[250px] md:max-w-[350px]">
              <p>{project.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </CardHeader>
      <CardContent className="grow">
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Icons.gitHub className="size-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" asChild>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white">
              <ExternalLink className="size-4" />
              <span>Demo</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
