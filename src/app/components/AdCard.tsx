import { Heart, MapPin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface AdCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  district: string;
  publishedAt: string;
  isFavorite?: boolean;
  onClick?: () => void;
}

export function AdCard({
  image,
  title,
  price,
  district,
  publishedAt,
  isFavorite = false,
  onClick,
}: AdCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${favorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-foreground mb-2 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <p className="text-xl font-bold text-foreground mb-3">
          {price.toLocaleString('ru-RU')} ₽
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{district}</span>
          </div>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
}
