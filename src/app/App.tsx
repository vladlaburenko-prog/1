import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomepageScreen } from '@/app/components/screens/HomepageScreen';
import { CategoryListingScreen } from '@/app/components/screens/CategoryListingScreen';
import { AdDetailScreen } from '@/app/components/screens/AdDetailScreen';
import { PostAdScreen } from '@/app/components/screens/PostAdScreen';
import { UserProfileScreen } from '@/app/components/screens/UserProfileScreen';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Навигация между экранами для демонстрации */}
        <div className="bg-white border-b border-border sticky top-[73px] z-40">
          <div className="container mx-auto px-4">
            <Tabs value={activeScreen} onValueChange={setActiveScreen}>
              <TabsList className="w-full justify-start bg-transparent border-0 h-auto p-0">
                <TabsTrigger 
                  value="home" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
                >
                  Главная
                </TabsTrigger>
                <TabsTrigger 
                  value="category" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
                >
                  Каталог
                </TabsTrigger>
                <TabsTrigger 
                  value="detail" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
                >
                  Объявление
                </TabsTrigger>
                <TabsTrigger 
                  value="post" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
                >
                  Разместить
                </TabsTrigger>
                <TabsTrigger 
                  value="profile" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
                >
                  Профиль
                </TabsTrigger>
              </TabsList>

              <TabsContent value="home" className="mt-0">
                <HomepageScreen />
              </TabsContent>

              <TabsContent value="category" className="mt-0">
                <CategoryListingScreen />
              </TabsContent>

              <TabsContent value="detail" className="mt-0">
                <AdDetailScreen />
              </TabsContent>

              <TabsContent value="post" className="mt-0">
                <PostAdScreen />
              </TabsContent>

              <TabsContent value="profile" className="mt-0">
                <UserProfileScreen />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
