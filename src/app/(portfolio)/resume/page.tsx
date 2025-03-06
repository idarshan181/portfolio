/* eslint-disable no-console */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Download } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.mjs',
  import.meta.url,
).toString();

const maxWidth = 800;

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null);

  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(maxWidth);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, {}, onResize);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    console.log(`Document loaded successfully with ${numPages} pages`);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className={cn('mx-auto max-w-4xl shadow-lg overflow-hidden max-h-screen', containerWidth)}>
        <CardHeader className="flex flex-row justify-between items-center p-4">
          <CardTitle>Darshan's Resume</CardTitle>
          <CardDescription>
            <Button className="cursor-pointer self-end place-self-end mr-0 ml-auto text-white" size="sm" asChild>
              <a href="/resume/Darshan_Resume.pdf" download="DarshanPatel-resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div ref={setContainerRef} className="w-full h-[80vh] overflow-y-auto border rounded-lg shadow-md p-2">
            <Document
              file="/resume/Darshan_Resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="dark:invert dark:brightness-90 dark:contrast-110 dark:hue-rotate-90 rounded-lg"
            >

              {numPages && Array.from({ length: numPages }, (_el, index) => (
                <div key={`page_${index + 1}`} className="rounded-lg overflow-hidden">
                  <Page
                    pageNumber={index + 1}
                    renderTextLayer
                    renderAnnotationLayer
                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                    className=""
                  />
                </div>
              ))}

            </Document>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
