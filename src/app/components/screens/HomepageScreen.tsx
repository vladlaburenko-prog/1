import { Home, Car, Smartphone, Briefcase, Wrench, Gift } from 'lucide-react';
import { CategoryCard } from '@/app/components/CategoryCard';
import { AdCard } from '@/app/components/AdCard';

const categories = [
  { icon: Home, title: 'Недвижимость', count: 1243 },
  { icon: Car, title: 'Транспорт', count: 856 },
  { icon: Smartphone, title: 'Электроника', count: 2341 },
  { icon: Briefcase, title: 'Работа', count: 432 },
  { icon: Wrench, title: 'Услуги', count: 1567 },
  { icon: Gift, title: 'Отдам даром', count: 234 },
];

const featuredAds = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    title: '2-комнатная квартира, 54 м²',
    price: 3500000,
    district: 'Центр',
    publishedAt: '2 часа назад',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800',
    title: 'Toyota Camry 2019',
    price: 1850000,
    district: 'Эжва',
    publishedAt: '4 часа назад',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800',
    title: 'iPhone 13 Pro Max 256GB',
    price: 75000,
    district: 'Орбита',
    publishedAt: '5 часов назад',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
    title: 'Игровой компьютер RTX 3070',
    price: 95000,
    district: 'Центр',
    publishedAt: '6 часов назад',
  },
];

const recentAds = [
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1565183997392-2f9e9ce2c8eb?w=800',
    title: 'Диван угловой, как новый',
    price: 15000,
    district: 'Сысола',
    publishedAt: '10 минут назад',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800',
    title: 'Детская коляска 3в1',
    price: 12000,
    district: 'Центр',
    publishedAt: '25 минут назад',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    title: 'Apple Watch Series 8',
    price: 32000,
    district: 'Эжва',
    publishedAt: '1 час назад',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800',
    title: 'Велосипед горный Trek',
    price: 28000,
    district: 'Орбита',
    publishedAt: '1 час назад',
  },
];

export function HomepageScreen() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 space-y-12">
        {/* Hero секция с категориями */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                count={category.count}
              />
            ))}
          </div>
        </section>

        {/* Избранные объявления */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Избранные объявления
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>
        </section>

        {/* Недавно добавленные */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Недавно добавленные
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
