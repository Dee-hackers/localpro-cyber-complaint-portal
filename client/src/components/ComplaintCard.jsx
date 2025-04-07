
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ArrowRight } from 'lucide-react';

const ComplaintCard = ({
  title,
  description,
  icon: Icon,
  type,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/complaint/${type}`);
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 md:p-8 glassmorphism card-hover cursor-pointer group animate-scale-in',
        className
      )}
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 w-1 h-full opacity-80 transition-all duration-300 group-hover:w-2"
        style={{
          backgroundColor: 
            type === 'women-children' ? 'hsl(var(--accent))' :
            type === 'online-fraud' ? 'hsl(var(--primary))' :
            'hsl(var(--secondary))'
        }}
      />

      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div 
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
            style={{
              backgroundColor: 
                type === 'women-children' ? 'hsl(var(--accent) / 0.1)' :
                type === 'online-fraud' ? 'hsl(var(--primary) / 0.1)' :
                'hsl(var(--secondary) / 0.1)',
              color:
                type === 'women-children' ? 'hsl(var(--accent))' :
                type === 'online-fraud' ? 'hsl(var(--primary))' :
                'hsl(var(--secondary))'
            }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-foreground/80 mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center text-sm font-medium transition-colors group-hover:text-primary">
          <span>File a complaint</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;
