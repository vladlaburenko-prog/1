import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count?: number;
  onClick?: () => void;
}

export function CategoryCard({ icon: Icon, title, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-sm font-medium text-foreground text-center mb-1">{title}</h3>
      {count !== undefined && (
        <span className="text-xs text-muted-foreground">{count} объявлений</span>
      )}
    </div>
  );
}
