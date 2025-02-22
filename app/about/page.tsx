import { cookies } from 'next/headers';
import AnimatedAboutSections from '../Component/AnimatedAboutSections';

const translations = {
  ko: {
    title: '회사소개',
    categories: [
      { name: '회사 개요', key: 'about' },
      { name: '회사 연혁', key: 'history' },
      { name: '팀 소개', key: 'team' },
    ]
  },
  en: {
    title: 'About Us',
    categories: [
      { name: 'Company Overview', key: 'about' },
      { name: 'Company History', key: 'history' },
      { name: 'Our Team', key: 'team' },
    ]
  }
}

export default async function About({ searchParams }: { searchParams: Promise<{ category: string }> }) {

  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ko') as 'ko' | 'en';
  const t = translations[language];
  const { category: selectedCategory = 'about' } = await searchParams;

  return (
    <div className="min-h-screen bg-gray-100">
      <AnimatedAboutSections title={t?.title} categories={t?.categories} selectedCategory={selectedCategory} language={language} />
    </div>
  );
}