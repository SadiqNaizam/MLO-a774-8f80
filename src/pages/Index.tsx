import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelsSection from '@/components/Dashboard/FunnelsSection';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import StatsGrid from '@/components/Dashboard/StatsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const LeadsPage: React.FC = () => {
  // The "Leads Overview" page is assumed to be the primary view for this Index.tsx.
  // The tabs for "Sales" and "Leads" are derived from the provided image.

  return (
    <MainAppLayout pageTitle="Leads Overview">
      {/* Tabs for sub-navigation like Sales/Leads */}
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className={cn(
          "inline-flex h-auto items-center justify-start rounded-none bg-transparent p-0 gap-1 md:gap-4",
          "border-b border-border"
        )}>
          <TabsTrigger 
            value="sales" 
            className={cn(
              "pb-3 px-2 md:px-4 text-sm font-medium rounded-none bg-transparent text-muted-foreground hover:text-primary",
              "data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            )}
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className={cn(
              "pb-3 px-2 md:px-4 text-sm font-medium rounded-none bg-transparent text-muted-foreground hover:text-primary",
              "data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            )}
          >
            Leads
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="mt-6">
          {/* Placeholder content for the Sales tab */}
          <div className="flex items-center justify-center h-96 border border-dashed rounded-md">
            <p className="text-muted-foreground">
              Sales-specific data and components would be displayed here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-6">
          {/* Main content for the Leads Overview, arranged by MainAppLayout's gap */}
          {/* Add a wrapper div to re-apply flex-col gap-6 as TabsContent is not a flex container by default */}
          <div className="flex flex-col gap-6">
            <FunnelsSection />
            <LeadsTrackingChart />
            <StatsGrid />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default LeadsPage;
