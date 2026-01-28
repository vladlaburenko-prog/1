import { useState } from 'react';
import { Home, Car, Smartphone, Briefcase, Wrench, Gift, Upload, X, ChevronLeft } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Progress } from '@/app/components/ui/progress';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const categories = [
  { icon: Home, title: 'Недвижимость', value: 'realestate' },
  { icon: Car, title: 'Транспорт', value: 'cars' },
  { icon: Smartphone, title: 'Электроника', value: 'electronics' },
  { icon: Briefcase, title: 'Работа', value: 'jobs' },
  { icon: Wrench, title: 'Услуги', value: 'services' },
  { icon: Gift, title: 'Отдам даром', value: 'free' },
];

export function PostAdScreen() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    condition: '',
    phone: '',
    telegram: '',
    district: '',
  });
  const [photos, setPhotos] = useState<string[]>([]);
  const [agreedToRules, setAgreedToRules] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).slice(0, 10 - photos.length).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos([...photos, ...newPhotos]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg border border-border p-8">
          {/* Заголовок и прогресс */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-foreground">Разместить объявление</h1>
              <span className="text-sm text-muted-foreground">
                Шаг {step} из {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Шаг 1: Выбор категории */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Выберите категорию
                </h2>
                <p className="text-muted-foreground mb-6">
                  Выберите наиболее подходящую категорию для вашего объявления
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                      selectedCategory === category.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        selectedCategory === category.value
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {category.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-6">
                <Button
                  onClick={handleNext}
                  disabled={!selectedCategory}
                  className="bg-primary hover:bg-primary/90"
                >
                  Далее
                </Button>
              </div>
            </div>
          )}

          {/* Шаг 2: Основная информация */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Основная информация
                </h2>
                <p className="text-muted-foreground mb-6">
                  Заполните детали вашего объявления
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Название объявления *</Label>
                  <Input
                    id="title"
                    placeholder="Например: iPhone 13 Pro Max 256GB"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="bg-input-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Укажите марку, модель и ключевые характеристики
                  </p>
                </div>

                <div>
                  <Label htmlFor="description">Описание *</Label>
                  <Textarea
                    id="description"
                    placeholder="Подробное описание товара или услуги..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="bg-input-background min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Цена, ₽ *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="bg-input-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="condition">Состояние *</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) =>
                        setFormData({ ...formData, condition: value })
                      }
                    >
                      <SelectTrigger className="bg-input-background">
                        <SelectValue placeholder="Выберите состояние" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Новое</SelectItem>
                        <SelectItem value="used">Б/У</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="district">Район *</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) =>
                      setFormData({ ...formData, district: value })
                    }
                  >
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
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={
                    !formData.title ||
                    !formData.description ||
                    !formData.price ||
                    !formData.condition ||
                    !formData.district
                  }
                  className="bg-primary hover:bg-primary/90"
                >
                  Далее
                </Button>
              </div>
            </div>
          )}

          {/* Шаг 3: Загрузка фотографий */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Загрузите фотографии
                </h2>
                <p className="text-muted-foreground mb-6">
                  Добавьте до 10 фотографий. Первая фотография будет главной
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Загруженные фото */}
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border group">
                    <ImageWithFallback
                      src={photo}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                        Главная
                      </div>
                    )}
                  </div>
                ))}

                {/* Кнопка загрузки */}
                {photos.length < 10 && (
                  <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-xs text-muted-foreground text-center px-2">
                      Добавить фото
                    </span>
                  </label>
                )}
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary/90"
                >
                  Далее
                </Button>
              </div>
            </div>
          )}

          {/* Шаг 4: Контакты и публикация */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Контактная информация
                </h2>
                <p className="text-muted-foreground mb-6">
                  Укажите как с вами можно связаться
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="telegram">Telegram (необязательно)</Label>
                  <Input
                    id="telegram"
                    placeholder="@username"
                    value={formData.telegram}
                    onChange={(e) =>
                      setFormData({ ...formData, telegram: e.target.value })
                    }
                    className="bg-input-background"
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="rules"
                      checked={agreedToRules}
                      onCheckedChange={(checked) =>
                        setAgreedToRules(checked as boolean)
                      }
                    />
                    <label htmlFor="rules" className="text-sm leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="#" className="text-primary hover:underline">
                        правилами размещения объявлений
                      </a>{' '}
                      и{' '}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              {/* Предпросмотр */}
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-medium text-foreground mb-4">Предпросмотр объявления</h3>
                <div className="bg-white rounded-lg border border-border p-4">
                  <div className="flex gap-4">
                    {photos[0] && (
                      <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
                        <ImageWithFallback
                          src={photos[0]}
                          alt="Главное фото"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1 line-clamp-2">
                        {formData.title || 'Название объявления'}
                      </h4>
                      <p className="text-xl font-bold text-foreground mb-2">
                        {formData.price ? `${Number(formData.price).toLocaleString('ru-RU')} ₽` : '0 ₽'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formData.district || 'Район не указан'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
                <Button
                  disabled={!formData.phone || !agreedToRules}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Опубликовать объявление
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
