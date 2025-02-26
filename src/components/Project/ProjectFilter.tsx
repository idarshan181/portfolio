'use client';
import type { Project } from '@/resources/projects';

import { Search, X } from 'lucide-react';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type ProjectsFilterProps = {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
};

export function ProjectsFilter({ projects, onFilterChange }: ProjectsFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setShowFeaturedOnly(false);
    onFilterChange(projects);
  };

  const applyFilters = (search: string, tags: string[], featured: boolean) => {
    let filtered = projects;

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        project =>
          project.title.toLowerCase().includes(searchLower)
          || project.description.toLowerCase().includes(searchLower),
      );
    }

    // Filter by selected tags
    if (tags.length > 0) {
      filtered = filtered.filter(project =>
        tags.some(tag => project.tags.includes(tag)),
      );
    }

    // Filter by featured
    if (featured) {
      filtered = filtered.filter(project => project.featured);
    }

    onFilterChange(filtered);
  };

  const hasActiveFilters = searchTerm || selectedTags.length > 0 || showFeaturedOnly;

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags)),
  ).sort();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, selectedTags, showFeaturedOnly);
  };

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newSelectedTags);
    applyFilters(searchTerm, newSelectedTags, showFeaturedOnly);
  };

  const toggleFeatured = () => {
    const newShowFeatured = !showFeaturedOnly;
    setShowFeaturedOnly(newShowFeatured);
    applyFilters(searchTerm, selectedTags, newShowFeatured);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-8"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={showFeaturedOnly ? 'default' : 'outline'}
          size="sm"
          onClick={toggleFeatured}
          className="h-8"
        >
          Featured
        </Button>

        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTags.includes(tag) ? 'default' : 'outline'}
            size="sm"
            onClick={() => toggleTag(tag)}
            className="h-8"
          >
            {tag}
          </Button>
        ))}

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto h-8"
          >
            <X className="mr-1 size-4" />
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
}
