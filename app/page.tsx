import { cookies } from 'next/headers';
import { Suspense } from 'react';
import AnimatedHomeSections from './Component/AnimatedHomeSections';

const translations = {
  ko: {
    title: '현종기업',
    sections: [
      { name: '회사소개', key: 'about', image: '/about.jpg', link: '/about' },
      { name: '사업분야', key: 'services', image: '/services.jpg', link: '/services' },
      { name: '고객지원', key: 'support', image: '/support.jpg', link: '/support' },
      { name: '사이트 맵', key: 'sitemap', image: '/sitemap.jpg', link: '/sitemap' }
    ]
  },
  en: {
    title: 'HyunJong Company',
    sections: [
      { name: 'About Us', key: 'about', image: '/about.jpg', link: '/about' },
      { name: 'Business Areas', key: 'services', image: '/services.jpg', link: '/services' },
      { name: 'Customer Support', key: 'support', image: '/support.jpg', link: '/support' },
      { name: 'Site Map', key: 'sitemap', image: '/sitemap.jpg', link: '/sitemap' }
    ]
  }
};

export default async function Home() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ko') as 'ko' | 'en';
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedHomeSections title={t.title} sections={t.sections} />
      </Suspense>
    </div>
  );
}
