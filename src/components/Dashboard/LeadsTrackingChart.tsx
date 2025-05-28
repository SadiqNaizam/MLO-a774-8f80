import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  AreaChart,
  Area,
} from 'recharts';

interface ChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const chartData: ChartDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 58 },
  { month: 'April', closedWon: 52, closedLost: 38 },
  { month: 'May', closedWon: 88, closedLost: 42 },
  { month: 'June', closedWon: 75, closedLost: 10 },
  { month: 'July', closedWon: 60, closedLost: 35 },
  { month: 'August', closedWon: 32, closedLost: 95 },
];

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-lg font-semibold text-primaryText mb-2 sm:mb-0">Leads tracking</CardTitle>
          <Select defaultValue="last-6-months">
            <SelectTrigger className="w-full sm:w-[180px] h-9 text-xs text-secondaryText">
              <CalendarDays className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-6-months">Last 6 months</SelectItem>
              <SelectItem value="last-12-months">Last 12 months</SelectItem>
              <SelectItem value="all-time">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3 flex space-x-6">
          <div>
            <p className="text-2xl font-bold text-primaryText">680</p>
            <p className="text-xs text-secondaryText">total closed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primaryText">70</p>
            <p className="text-xs text-secondaryText">total lost</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pl-0 pr-2 sm:pr-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2ECC71" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F06548" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              fontSize={12} 
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              fontSize={12} 
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={(value) => `${value}`}
            />
            <RechartsTooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
              itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
              labelStyle={{ fontWeight: 'bold', color: 'hsl(var(--popover-foreground))' }}
            />
            <Area type="monotone" dataKey="closedWon" stroke="#2ECC71" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth:2, fill: '#2ECC71' }} activeDot={{ r: 6 }} name="Closed Won" />
            <Area type="monotone" dataKey="closedLost" stroke="#F06548" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth:2, fill: '#F06548' }} activeDot={{ r: 6 }} name="Closed Lost" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="flex justify-center items-center space-x-6 p-4 border-t">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-sm bg-accentGreen mr-2"></span>
          <span className="text-xs text-secondaryText">Closed won</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-sm bg-accentRed mr-2"></span>
          <span className="text-xs text-secondaryText">Closed lost</span>
        </div>
      </div>
    </Card>
  );
};

export default LeadsTrackingChart;
