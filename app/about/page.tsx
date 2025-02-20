import { cookies } from 'next/headers';
import AnumatedAboutSections from '../Component/AnimatedAboutSections';

type Language = "en" | "ko"

const translations = {
  ko: {
    title: '회사소개',
    about: '저희 회사는..',
    sections: [
      {
        key: 'company',
        intro1: '현종컴퍼니는 오로지 한길만을,',
        intro2: '수십년의 노하우로 성실히 임해왔습니다.',
        description: '부산항을 기반으로 1941년부터 선용품 및 일반관리 서비스를 시작한 이후 오늘날에는 선대관리와 화물운송, 물류솔루션, 컨설팅에 이르며, 무역솔루션을 통한 상단업무까지 도맡아 진행하는 글로벌 해운물류기업으로 성장하였습니다.'
      },
      {
        key: 'trust',
        intro1: '최고의 품질과 신뢰를 바탕으로,',
        intro2: '고객의 성공을 위해 노력합니다.',
        description: '끊임없는 혁신과 도전정신으로 미래를 선도하며, 최고의 해운 및 물류 서비스를 제공합니다.'
      },
      {
        key: 'service',
        intro1: '우리는 글로벌 시장에서 경쟁력을 갖추고,',
        intro2: '환경 친화적이고 지속 가능한 경영을 실천합니다.',
        description: '첨단 기술과 효율적인 물류 운영을 통해 고객의 기대를 뛰어넘는 서비스를 제공합니다.'
      }
    ],
  },
  en: {
    title: 'About Us',
    about: 'Our company is..',
    sections: [
      {
        key: 'company',
        intro1: 'HyunJong Company has been dedicated to a single path,',
        intro2: 'With decades of expertise and commitment.',
        description: 'Based in Busan Port, we started providing ship supplies and general management services in 1941. Today, we have grown into a global maritime logistics company handling fleet management, cargo transportation, logistics solutions, consulting, and trade solutions.'
      },
      {
        key: 'trust',
        intro1: 'With the highest quality and trust,',
        intro2: 'We strive for the success of our customers.',
        description: 'With continuous innovation and a spirit of challenge, we lead the future by providing the best maritime and logistics services.'
      },
      {
        key: 'service',
        intro1: 'We establish global competitiveness,',
        intro2: 'And practice environmentally friendly and sustainable management.',
        description: 'Through advanced technology and efficient logistics operations, we provide services that exceed customer expectations.'
      }
    ],

  }
};

export default async function Home() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ko') as Language;
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <AnumatedAboutSections t={t} />
    </div>
  );
}