import type { RiskLevel } from '../../types';
import { ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react';

interface RiskBadgeProps {
  level: RiskLevel;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const config = {
  alto: {
    label: 'Alto',
    icon: ShieldX,
    classes: 'bg-red-100 text-red-800 border-red-200',
    dot: 'bg-red-500',
  },
  medio: {
    label: 'Medio',
    icon: ShieldAlert,
    classes: 'bg-amber-100 text-amber-800 border-amber-200',
    dot: 'bg-amber-500',
  },
  bajo: {
    label: 'Bajo',
    icon: ShieldCheck,
    classes: 'bg-green-100 text-green-800 border-green-200',
    dot: 'bg-green-500',
  },
};

export function RiskBadge({ level, size = 'md', showIcon = true }: RiskBadgeProps) {
  const cfg = config[level];
  const Icon = cfg.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3 py-1.5 gap-2',
  };

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${cfg.classes} ${sizeClasses[size]}`}>
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      Riesgo {cfg.label}
    </span>
  );
}

export function RiskDot({ level }: { level: RiskLevel }) {
  return (
    <span className={`inline-block w-2.5 h-2.5 rounded-full ${config[level].dot}`} />
  );
}
