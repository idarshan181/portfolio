/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DocumentWithNoSSR = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  { ssr: false },
);
const PageWithNoSSR = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  { ssr: false },
);

const maxWidth = 800;

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(maxWidth);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className={cn('mx-auto max-w-4xl shadow-lg overflow-hidden max-h-screen')}>
        <CardHeader className="flex flex-row justify-between items-center p-4">
          <CardTitle>Darshan's Resume</CardTitle>
          <CardDescription>
            <Button
              className="cursor-pointer self-end place-self-end mr-0 ml-auto text-white"
              size="sm"
              asChild
            >
              <a
                href="/resume/Darshan_Resume.pdf"
                download="DarshanPatel-resume.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="w-full h-[80vh] overflow-y-auto border rounded-lg shadow-md p-2">
            <DocumentWithNoSSR
              file="/resume/Darshan_Resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="dark:invert dark:brightness-90 dark:contrast-110 dark:hue-rotate-90 rounded-lg"
            >
              {numPages
                && Array.from({ length: numPages }, (_el, index) => (
                  <div key={`page_${index + 1}`} className="rounded-lg overflow-hidden">
                    <PageWithNoSSR
                      pageNumber={index + 1}
                      renderTextLayer
                      renderAnnotationLayer
                      width={
                        containerWidth
                          ? Math.min(containerWidth, maxWidth)
                          : maxWidth
                      }
                      className=""
                    />
                  </div>
                ))}
            </DocumentWithNoSSR>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
