import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { AdCard } from '@/app/components/AdCard';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Label } from '@/app/components/ui/label';
import { Checkbox } from '@/app/components/ui/checkbox';

const mockAds = Array.from({ length: 12 }, (_, i) => ({
  id: `ad-${i}`,
  image: `https://images.unsplash.com/photo-${1560518883 + i * 10000}-ce09059eeffa?w=800`,
  title: `Объявление ${i + 1}: Интересное предложение в хорошем состоянии`,
  price: Math.floor(Math.random() * 1000000) + 10000,
  district: ['Центр', 'Эжва', 'Орбита', 'Сысола'][Math.floor(Math.random() * 4)],
  publishedAt: `${Math.floor(Math.random() * 24)} часов назад`,
}));

export function CategoryListingScreen() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        {/* Заголовок категории */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Электроника</h1>
          <p className="text-muted-foreground">Найдено 2 341 объявление</p>
        </div>

        <div className="flex gap-6">
          {/* Панель фильтров */}
          <aside
            className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 shrink-0`}
          >
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Фильтры</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Сбросить
                </Button>
              </div>

              {/* Цена */}
              <div className="space-y-2">
                <Label>Цена, ₽</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="От"
                    className="bg-input-background"
                  />
                  <Input
                    type="number"
                    placeholder="До"
                    className="bg-input-background"
                  />
                </div>
              </div>

              {/* Состояние */}
              <div className="space-y-3">
                <Label>Состояние</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="new" />
                    <label
                      htmlFor="new"
                      className="text-sm text-foreground cursor-pointer"
                    >
                      Новое
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="used" />
                    <label
                      htmlFor="used"
                      className="text-sm text-foreground cursor-pointer"
                    >
                      Б/У
                    </label>
                  </div>
                </div>
              </div>

              {/* Район */}
              <div className="space-y-2">
                <Label>Район</Label>
                <Select>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Выберите район" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center">Центр</SelectItem>
                    <SelectItem value="ezhva">Эжва</SelectItem>
                    <SelectItem value="orbita">Орбита</SelectItem>
                    <SelectItem value="sysola">Сысола</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Кнопка применить */}
              <Button className="w-full bg-primary hover:bg-primary/90">
                Применить фильтры
              </Button>
            </div>
          </aside>

          {/* Список объявлений */}
          <div className="flex-1">
            {/* Сортировка и переключатель фильтров */}
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Фильтры
              </Button>

              <div className="flex items-center gap-2 ml-auto">
                <Label className="text-sm text-muted-foreground">Сортировка:</Label>
                <Select defaultValue="date">
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">По дате</SelectItem>
                    <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                    <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Сетка объявлений */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {mockAds.map((ad) => (
                <AdCard key={ad.id} {...ad} />
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline">Предыдущая</Button>
              <Button variant="outline" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Следующая</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
