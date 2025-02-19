
import Image from 'next/image';
import { cookies } from 'next/headers';

type Language = "en" | "ko"

const translations = {
  ko: {
    title: '회사소개',
    about: '회사소개',
    services: '사업분야',
    support: '고객지원',
    sitemap: '사이트 맵',
    intro1: '동주마리타임은 오로지 한길만을,',
    intro2: '수십년의 노하우로 성실히 임해왔습니다.',
    description: '부산항을 기반으로 1941년부터 선용품 및 일반관리 서비스를 시작한 이후 오늘날에는 선대관리와 화물운송, 물류솔루션, 컨설팅에 이르며, 무역솔루션을 통한 상단업무까지 도맡아 진행하는 글로벌 해운물류기업으로 성장하였습니다.'
  },
  en: {
    title: 'About Us',
    about: 'About Us',
    services: 'Services',
    support: 'Support',
    sitemap: 'Site Map',
    intro1: 'Dongju Maritime has been dedicated to a single path,',
    intro2: 'With decades of expertise and commitment.',
    description: 'Based in Busan Port, we started providing ship supplies and general management services in 1941. Today, we have grown into a global maritime logistics company handling fleet management, cargo transportation, logistics solutions, consulting, and trade solutions.'
  }
};

export default async function Home() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ko') as Language;
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="relative w-full h-64 bg-cover bg-center flex justify-between items-center px-6" style={{ backgroundImage: "url('/header-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{t.title}</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">{t.title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image src="/ship.jpg" width={600} height={400} alt="Shipping" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2  text-gray-700">
            <p className="text-lg font-semibold">{t.intro1}</p>
            <p className="text-lg font-semibold">{t.intro2}</p>
            <p className="mt-4">{t.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}