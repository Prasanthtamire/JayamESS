import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  color: string;
  delay?: number;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  color,
  delay = 0,
  onClick
}) => {
  return (
    <AnimatedCard 
      delay={delay} 
      className="p-6 group" 
      onClick={onClick}
      hover3d={true}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">{value}</p>
          <div className="flex items-center">
            <span className={`
              text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105
              ${changeType === 'increase' 
                ? 'text-green-700 bg-green-100 group-hover:bg-green-200' 
                : 'text-red-700 bg-red-100 group-hover:bg-red-200'
              }
            `}>
              {change}
            </span>
          </div>
        </div>
        <div className={`
          w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
          ${color} shadow-lg group-hover:shadow-xl
        `}>
          <Icon className="text-white transition-transform duration-500 group-hover:scale-125" size={28} />
        </div>
      </div>
    </AnimatedCard>
  );
};

export default StatCard;