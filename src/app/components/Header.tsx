import { Search, MapPin, Plus, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Логотип */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-white">K</span>
            </div>
            <h1 className="text-xl font-bold text-foreground hidden sm:block">KomiADS</h1>
          </div>

          {/* Выбор города */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-muted rounded-lg cursor-pointer hover:bg-accent transition-colors">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Сыктывкар</span>
          </div>

          {/* Поиск */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск объявлений..."
                className="pl-10 bg-input-background border-border"
              />
            </div>
          </div>

          {/* Кнопка подать объявление */}
          <Button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            <span>Подать объявление</span>
          </Button>

          {/* Мобильная кнопка */}
          <Button size="icon" className="sm:hidden bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4" />
          </Button>

          {/* Аватар пользователя */}
          <Avatar className="w-9 h-9 cursor-pointer">
            <AvatarFallback className="bg-muted">
              <User className="w-4 h-4 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
