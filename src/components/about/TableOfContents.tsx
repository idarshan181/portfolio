/* eslint-disable no-console */
'use client';

import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';

type TableOfContentsProps = {
  structure: { title: string; display: boolean; items: string[] }[];
  about: { tableOfContent: { display: boolean; subItems: boolean } };
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionElements = structure
      .filter(section => section.display)
      .map(section => document.getElementById(section.title));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Observed Section:', entry.target.id, 'Is Intersecting:', entry.isIntersecting);
        });
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) {
          console.log('Active Section:', visibleSection.target.id);
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null, // viewport
        rootMargin: '-20% 0px -60% 0px', // Adjust these values
        threshold: [0.2, 0.4, 0.6, 0.8, 1.0],
      },
    );

    sectionElements.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [structure]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(id, typeof id);

    if (id === 'Introduction') {
      // Scroll to the top of the page for 'Introduction'
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
      // Scroll to the section normally
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!about.tableOfContent.display) {
    return null;
  }

  return (

    <div className="fixed left-0 top-1/2 hidden -translate-y-1/2 space-y-4 pl-6 md:block">
      {structure.filter(section => section.display).map(section => (
        <Card
          key={section.title}
          className={`cursor-pointer border-none bg-background shadow-none drop-shadow-none hover:translate-x-3 ${
            activeSection === section.title ? 'bg-muted text-foreground' : 'hover:bg-muted'
          }`}
          onClick={() => scrollTo(section.title)}
        >
          <CardContent
            className="group flex items-center space-x-2 p-4"
          >
            <div
              className={`h-[2px] w-4 ${
                activeSection === section.title ? 'bg-primary' : 'bg-foreground group-hover:bg-primary'
              }`}
            >
            </div>
            <span
              className={`text-sm ${
                activeSection === section.title ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
              }`}
            >
              {section.title}
            </span>
          </CardContent>

          {about.tableOfContent.subItems && (
            <div className="pl-6">
              {section.items.map(item => (
                <CardContent
                  key={item}
                  className="cursor-pointer p-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </CardContent>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default TableOfContents;
