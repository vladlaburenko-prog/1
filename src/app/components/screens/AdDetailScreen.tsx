import { useState } from 'react';
import { Heart, Share2, Flag, Phone, CheckCircle2, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { AdCard } from '@/app/components/AdCard';

const adImages = [
  'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=1200',
  'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200',
  'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200',
  'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200',
];

const similarAds = [
  {
    id: 's1',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    title: 'iPhone 13 128GB синий',
    price: 65000,
    district: 'Центр',
    publishedAt: '3 часа назад',
  },
  {
    id: 's2',
    image: 'https://images.unsplash.com/photo-1592286927505-b0c2fc1f5194?w=800',
    title: 'iPhone 14 Pro 256GB',
    price: 95000,
    district: 'Эжва',
    publishedAt: '5 часов назад',
  },
  {
    id: 's3',
    image: 'https://images.unsplash.com/photo-1603891220228-dec31c6d4d7f?w=800',
    title: 'iPhone 12 Pro Max 512GB',
    price: 70000,
    district: 'Орбита',
    publishedAt: '1 день назад',
  },
  {
    id: 's4',
    image: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800',
    title: 'iPhone SE 2022 64GB',
    price: 35000,
    district: 'Сысола',
    publishedAt: '2 дня назад',
  },
];

export function AdDetailScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % adImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + adImages.length) % adImages.length);
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка - изображения и описание */}
          <div className="lg:col-span-2 space-y-6">
            {/* Галерея изображений */}
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="relative aspect-[4/3] bg-muted">
                <ImageWithFallback
                  src={adImages[currentImageIndex]}
                  alt="Изображение товара"
                  className="w-full h-full object-contain"
                />
                
                {/* Навигация по изображениям */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Индикатор текущего изображения */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {adImages.length}
                </div>
              </div>

              {/* Миниатюры */}
              <div className="p-4 flex gap-2 overflow-x-auto">
                {adImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex
                        ? 'border-primary'
                        : 'border-transparent'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Описание */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Описание</h2>
              <div className="prose prose-sm max-w-none text-foreground">
                <p>
                  Продаю iPhone 13 Pro Max в отличном состоянии. Память 256GB, цвет Sierra Blue.
                  Телефон куплен год назад в официальном магазине, на гарантии до конца 2024 года.
                </p>
                <p className="mt-3">
                  Комплектация: коробка, зарядное устройство USB-C, кабель Lightning, документы.
                  Дополнительно отдам 2 чехла и защитное стекло.
                </p>
                <p className="mt-3">
                  Состояние идеальное, всегда носил в чехле и с защитным стеклом. Никаких царапин,
                  сколов или других повреждений. Батарея держит отлично, все функции работают исправно.
                </p>
                <p className="mt-3 font-medium">
                  Торг возможен при осмотре. Встреча в центре города, можем проверить телефон
                  в сервисном центре при желании.
                </p>
              </div>

              {/* Характеристики */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-3">Характеристики</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-sm text-muted-foreground">Состояние:</span>
                    <p className="text-sm font-medium">Б/У</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Память:</span>
                    <p className="text-sm font-medium">256 GB</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Цвет:</span>
                    <p className="text-sm font-medium">Sierra Blue</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Модель:</span>
                    <p className="text-sm font-medium">iPhone 13 Pro Max</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - цена и продавец */}
          <div className="space-y-4">
            {/* Цена и действия */}
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              <div className="mb-4">
                <p className="text-3xl font-bold text-foreground">75 000 ₽</p>
              </div>

              <div className="space-y-3 mb-4">
                <Button
                  onClick={() => setShowPhone(true)}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {showPhone ? '+7 (912) 345-67-89' : 'Показать телефон'}
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        isFavorite ? 'fill-destructive text-destructive' : ''
                      }`}
                    />
                    В избранное
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Информация о местоположении */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">Центр, Сыктывкар</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Опубликовано 5 часов назад</span>
                </div>
              </div>

              {/* Продавец */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-3">Продавец</h3>
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-white">АИ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">Александр Иванов</p>
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">На сайте с января 2023</p>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      Телефон подтвержден
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Пожаловаться */}
              <Button variant="ghost" className="w-full mt-4 text-muted-foreground" size="sm">
                <Flag className="w-4 h-4 mr-2" />
                Пожаловаться
              </Button>
            </div>
          </div>
        </div>

        {/* Похожие объявления */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Похожие объявления</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {similarAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
