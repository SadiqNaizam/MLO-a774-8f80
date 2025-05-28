import React from 'react';
import { cn } from '@/lib/utils';
import StatCard from './StatCard'; // Relative import for project component
import { Info } from 'lucide-react';

interface ReasonStat {
  percentage: string;
  reason: string;
}

const reasonsOfLeadsLostData: ReasonStat[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other reasons not specified' },
  { percentage: '30%', reason: 'Product market fit issues' },
];

interface OtherDataStat {
  value: string;
  label: string;
  icon?: React.ElementType;
}

const otherDataStats: OtherDataStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', icon: Info },
];

const StatsGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <StatCard title="Reasons of leads lost">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {reasonsOfLeadsLostData.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-semibold text-primaryText">{stat.percentage}</p>
              <p className="text-sm text-secondaryText mt-1">{stat.reason}</p>
            </div>
          ))}
        </div>
      </StatCard>

      <StatCard title="Other data">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-y-0 items-start">
          {otherDataStats.map((stat, index) => (
            <div key={index} className="text-center sm:text-left">
              <p className="text-3xl font-semibold text-primaryText">{stat.value}</p>
              <div className="flex items-center justify-center sm:justify-start mt-1">
                <p className="text-sm text-secondaryText">{stat.label}</p>
                {stat.icon && <stat.icon className="ml-1 h-4 w-4 text-secondaryText" />}
              </div>
            </div>
          ))}
        </div>
      </StatCard>
    </section>
  );
};

export default StatsGrid;
