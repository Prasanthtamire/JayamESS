import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  hover3d?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  onClick,
  hover3d = true 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
        transform hover:-translate-y-2 animate-fade-in-up cursor-pointer
        ${hover3d ? 'hover:rotate-1 hover:scale-105' : 'hover:scale-102'}
        border border-gray-100 backdrop-blur-sm
        ${onClick ? 'active:scale-95' : ''}
        ${className}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {children}
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default AnimatedCard;