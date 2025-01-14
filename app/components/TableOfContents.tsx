'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';

interface TOCItem {
  id: string;
  title: string;
  level: number;
  parentId?: string;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = React.useState<string>('');
  const [headings, setHeadings] = React.useState<TOCItem[]>([]);

  React.useEffect(() => {
    // Only select headings within the main content area
    const elements = document.querySelector('[role="main"]')?.querySelectorAll('h2, h3, h4') || [];
    const usedIds = new Set<string>();
    let currentParentId: string | undefined;
    let lastItem: TOCItem | undefined;

    const items: TOCItem[] = Array.from(elements).map((el) => {
      let baseId = el.id || el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
      let id = baseId;
      let counter = 1;
      
      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`;
        counter++;
      }
      
      usedIds.add(id);
      if (!el.id) el.id = id;
      
      const level = parseInt(el.tagName[1]);
      
      // Update parent tracking
      if (lastItem) {
        if (level > lastItem.level) {
          currentParentId = lastItem.id;
        } else if (level <= lastItem.level) {
          currentParentId = undefined;
        }
      }
      
      const item: TOCItem = {
        id,
        title: el.textContent || '',
        level,
        parentId: currentParentId
      };
      
      lastItem = item;
      return item;
    });

    setHeadings(items);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
      }
    );

    headings.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  // Find the current main section based on active section
  const activeHeading = headings.find(h => h.id === activeSection);
  const currentMainSection = activeHeading
    ? activeHeading.level === 2  // h2 is now our top level
      ? activeHeading
      : headings
          .slice(0, headings.indexOf(activeHeading))
          .reverse()
          .find(h => h.level === 2)
    : null;

  // Get main sections and subsections
  const mainSections = headings.filter(h => h.level === 2);
  const subsections = currentMainSection
    ? headings.filter(h => {
        const index = headings.indexOf(h);
        const mainSectionIndex = headings.indexOf(currentMainSection);
        const nextMainSectionIndex = headings.findIndex(
          (h, i) => i > mainSectionIndex && h.level === 2
        );
        
        return (
          h.level > 1 &&
          index > mainSectionIndex &&
          (nextMainSectionIndex === -1 || index < nextMainSectionIndex)
        );
      })
    : [];

  const relevantHeadings = [...mainSections, ...subsections].sort(
    (a, b) => headings.indexOf(a) - headings.indexOf(b)
  );

  const getItemStyles = (level: number) => {
    switch (level) {
      case 2: return 'font-medium text-xs';  // Main sections (h2)
      case 3: return 'ml-3 text-[11px] text-gray-600 dark:text-gray-400';  // Subsections (h3)
      case 4: return 'ml-6 text-[11px] text-gray-500 dark:text-gray-400';  // Detailed sections (h4)
      default: return '';
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <div className="border-l border-gray-200 dark:border-gray-800 pl-3">
          <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-medium">
            Contents
          </div>
          <nav className="flex flex-col">
            {relevantHeadings.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'block transition-colors',
                  // Base styles for all levels
                  'leading-tight hover:text-gray-900 dark:hover:text-gray-100',
                  // Level-specific styles
                  getItemStyles(item.level),
                  // Spacing between sections
                  item.level === 2 && index > 0 && 'mt-2',
                  // Active states
                  activeSection === item.id && 'text-gray-900 dark:text-gray-100 font-medium',
                  // Current main section
                  item.level === 2 && item.id === currentMainSection?.id && 'text-gray-900 dark:text-gray-100'
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
