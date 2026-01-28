import { useState } from 'react';
import { Settings, Eye, Archive, Heart, MessageSquare, TrendingUp, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AdCard } from '@/app/components/AdCard';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

const myActiveAds = [
  {
    id: 'my1',
    image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800',
    title: 'iPhone 13 Pro Max 256GB',
    price: 75000,
    district: 'Центр',
    publishedAt: '5 часов назад',
  },
  {
    id: 'my2',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800',
    title: 'Игровой ноутбук MSI',
    price: 95000,
    district: 'Эжва',
    publishedAt: '2 дня назад',
  },
  {
    id: 'my3',
    image: 'https://images.unsplash.com/photo-1565183997392-2f9e9ce2c8eb?w=800',
    title: 'Велосипед горный Trek',
    price: 28000,
    district: 'Орбита',
    publishedAt: '4 дня назад',
  },
];

const favoriteAds = [
  {
    id: 'fav1',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    title: '2-комнатная квартира, 54 м²',
    price: 3500000,
    district: 'Центр',
    publishedAt: '2 часа назад',
    isFavorite: true,
  },
  {
    id: 'fav2',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800',
    title: 'Детская коляска 3в1',
    price: 12000,
    district: 'Центр',
    publishedAt: '25 минут назад',
    isFavorite: true,
  },
];

const archivedAds = [
  {
    id: 'arch1',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
    title: 'Игровой компьютер (ПРОДАНО)',
    price: 85000,
    district: 'Центр',
    publishedAt: '1 неделю назад',
  },
];

export function UserProfileScreen() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Профиль пользователя */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-primary text-white text-2xl">
                АИ
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-foreground">Александр Иванов</h1>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  Проверен
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">На сайте с января 2023</p>

              {/* Статистика */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Просмотры</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">1,234</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Активные</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{myActiveAds.length}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Избранное</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{favoriteAds.length}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Сообщения</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">5</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Табы */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start bg-white border border-border">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Мои объявления
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              Архив
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Сообщения
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Активные объявления */}
          <TabsContent value="active" className="mt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-foreground">
                  Активные объявления ({myActiveAds.length})
                </h2>
                <Button className="bg-primary hover:bg-primary/90">
                  Добавить объявление
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {myActiveAds.map((ad) => (
                  <div key={ad.id} className="relative">
                    <AdCard {...ad} />
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Редактировать
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Снять с публикации
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Архив */}
          <TabsContent value="archived" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Архивные объявления ({archivedAds.length})
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {archivedAds.map((ad) => (
                  <div key={ad.id} className="relative opacity-60">
                    <AdCard {...ad} />
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Опубликовать снова
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Избранное */}
          <TabsContent value="favorites" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Избранное ({favoriteAds.length})
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favoriteAds.map((ad) => (
                  <AdCard key={ad.id} {...ad} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Сообщения */}
          <TabsContent value="messages" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Сообщения</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((msg) => (
                  <div
                    key={msg}
                    className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-muted">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium text-foreground">Иван Петров</p>
                        <span className="text-xs text-muted-foreground">2 часа назад</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Здравствуйте! Интересует iPhone...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        iPhone 13 Pro Max 256GB
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Настройки */}
          <TabsContent value="settings" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Настройки профиля</h2>
              <div className="space-y-6 max-w-xl">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    defaultValue="Александр Иванов"
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="aleksandr@example.com"
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+7 (912) 345-67-89"
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="telegram">Telegram</Label>
                  <Input
                    id="telegram"
                    defaultValue="@aleksandr_ivanov"
                    className="bg-input-background"
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium text-foreground mb-3">Уведомления</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Новые сообщения</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Просмотры объявлений</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Новости и акции</span>
                      <input type="checkbox" className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Сохранить изменения
                  </Button>
                  <Button variant="outline">Отмена</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
