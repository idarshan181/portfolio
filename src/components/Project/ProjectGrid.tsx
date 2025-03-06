'use client';

import { projects as allProjects } from '@/resources/projects';

import { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectsFilter } from './ProjectFilter';

type ProjectsGridProps = {
  featuredOnly?: boolean;
};
export function ProjectsGrid({ featuredOnly = false }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState(
    (featuredOnly ? allProjects.filter(project => project.featured) : allProjects).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
  );

  useEffect(() => {
    if (featuredOnly) {
      setFilteredProjects(allProjects.filter(project => project.featured));
    }

    return () => {};
  }, [featuredOnly]);

  return (
    <div className="space-y-8">
      {!featuredOnly && (
        <ProjectsFilter
          projects={allProjects}
          onFilterChange={setFilteredProjects}
        />
      )}

      {filteredProjects.length === 0
        ? (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-muted-foreground">No projects found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your filters</p>
            </div>
          )
        : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
    </div>
  );
}
