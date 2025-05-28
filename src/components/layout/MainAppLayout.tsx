import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string; // For the header
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <Header title={pageTitle} />
      <main 
        className={cn(
          "min-w-0 overflow-y-auto", // layoutRequirements.overall.sizing.mainContent
          "p-6", // layoutRequirements.mainContent.layout
          "mt-[70px]", // layoutRequirements.mainContent.layout (to offset fixed header)
          "ml-64" // To offset fixed sidebar (width w-64)
        )}
      >
        <div className={cn(
          "flex flex-col gap-6" // layoutRequirements.mainContent.container
        )}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
