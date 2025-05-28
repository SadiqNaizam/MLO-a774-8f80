import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip as RechartsTooltip } from 'recharts';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  avgDays: number;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, avgDays: 2, color: 'bg-red-500' },
  { name: 'Qualified', count: 100, value: 100, avgDays: 2, color: 'bg-yellow-500' },
  { name: 'In conversation', count: 50, value: 100, avgDays: 0, color: 'bg-indigo-500' }, // avgDays set to 0 for tooltip example
  { name: 'Negotiations', count: 20, value: 50, avgDays: 8, color: 'bg-green-500' },
  { name: 'Closed won', count: 20, value: 50, avgDays: 10, color: 'bg-purple-500' },
];

const totalActiveLeads = funnelData.reduce((sum, stage) => sum + stage.count, 0);
const maxCount = Math.max(...funnelData.map(s => s.count));

interface SourceData {
  name: string;
  value: number; // This would be amount or percentage based on selected tab
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F06548' }, // accentRed
  { name: 'Behance', value: 1000, percentage: 40, color: '#FFC107' }, // A yellow/orange
  { name: 'Instagram', value: 1000, percentage: 10, color: '#299CDB' }, // accentBlue
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#2ECC71' }, // accentGreen
];

const FunnelsSection: React.FC = () => {
  const [activeSourcesTab, setActiveSourcesTab] = React.useState<string>('leadsConverted');

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <Card className="lg:col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-primaryText">Funnel count</CardTitle>
            <span className="text-2xl font-bold text-primaryText">{totalActiveLeads} <span className="text-sm font-normal text-secondaryText">active leads</span></span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex w-full h-3 rounded-full overflow-hidden">
            {funnelData.map((stage) => (
              <TooltipProvider key={stage.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn("h-full", stage.color)}
                      style={{ width: `${(stage.count / totalActiveLeads) * 100}%` }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stage.name}: {stage.count} leads ({((stage.count / totalActiveLeads) * 100).toFixed(1)}%)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <ul className="space-y-3">
            {funnelData.map((stage) => (
              <li key={stage.name} className="text-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <span className={cn("mr-2 inline-block h-3 w-3 rounded-sm", stage.color)}></span>
                    <span className="text-primaryText">{stage.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-secondaryText">
                    <span>{stage.count}</span>
                    <span>${stage.value}</span>
                    {stage.name === 'In conversation' ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-help underline decoration-dashed">{stage.avgDays} days</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Average time on this stage</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <span>{stage.avgDays} days</span>
                    )}
                  </div>
                </div>
                <Progress value={(stage.count / maxCount) * 100} className={cn("h-1.5 [&>*]:", stage.color.replace('bg-','[&>*]:bg-'))} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-primaryText">Sources</CardTitle>
            {/* Placeholder for date filter if needed specific to Sources */}
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50}
                  fill="#8884d8"
                  dataKey="percentage"
                  stroke="var(--card)"
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                  itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span style={{ backgroundColor: source.color }} className="mr-2 inline-block h-3 w-3 rounded-sm"></span>
                  <span className="text-primaryText">{source.name}</span>
                </div>
                <div className="text-secondaryText">
                  <span className="mr-2">${source.value}</span>
                  <span>{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
          <Tabs value={activeSourcesTab} onValueChange={setActiveSourcesTab} className="mt-4">
            <TabsList className="grid w-full grid-cols-3 h-8">
              <TabsTrigger value="leadsCame" className="text-xs h-6">Leads came</TabsTrigger>
              <TabsTrigger value="leadsConverted" className="text-xs h-6">Leads Converted</TabsTrigger>
              <TabsTrigger value="totalDealsSize" className="text-xs h-6">Total deals size</TabsTrigger>
            </TabsList>
            {/* TabsContent could be used to change data/interpretation if needed */}
          </Tabs>
           <p className="text-xs text-center text-secondaryText mt-2">from leads total</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default FunnelsSection;
