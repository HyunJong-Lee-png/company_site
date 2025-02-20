import { cookies } from 'next/headers';
import { Suspense } from 'react';
import AnimatedServicesSections from '../Component/AnimatedServicesSections';

const translations = {
  ko: {
    title: '사업분야',
    categories: [
      { name: '정기선대리점서비스', key: 'liner-agent' },
      { name: '선박대리점서비스', key: 'ship-agent' },
      { name: '국제물류서비스', key: 'logistics' },
      { name: '부동산관리대행서비스', key: 'real-estate' }
    ],
    services: {
      'liner-agent': {
        title: '정기선대리점서비스',
        description: '한국에서 가장 오래된 Liner Agent 중 하나인 현종컴퍼니는 최적의 해운 서비스를 제공합니다.',
        serviceTitle: 'Liner Agent Service',
        image: '/ship.jpg',
        serviceList: [
          'Local & Feeder 컴퍼 운영',
          '화물 운송, 선박 Booking 접수, 입/출항 및 벌킹',
          '선적문서 작성 및 각종 비딩 검수',
          'Container 운송 관리'
        ]
      },
      'ship-agent': {
        title: '선박대리점서비스',
        description: '전문적인 선박 대리점 서비스로 선주와 화주를 연결합니다.',
        serviceTitle: 'Ship Agent Service',
        image: '/ship.jpg',
        serviceList: [
          '선박 입출항 지원',
          '선박 유지보수 및 공급 관리',
          '항만 내 서류 및 행정 처리 지원'
        ]
      },
      'logistics': {
        title: '국제물류서비스',
        description: '최적의 국제 물류 솔루션을 제공합니다.',
        serviceTitle: 'Global Logistics Service',
        image: '/ship.jpg',
        serviceList: [
          '글로벌 해상 및 항공 운송',
          '맞춤형 물류 솔루션 제공',
          '창고 및 재고 관리 서비스'
        ]
      },
      'real-estate': {
        title: '부동산관리대행서비스',
        description: '부동산 관리 및 대행 서비스로 자산을 효율적으로 운영합니다.',
        serviceTitle: 'Real Estate Management Service',
        image: '/ship.jpg',
        serviceList: [
          '부동산 임대 및 유지보수 관리',
          '부동산 투자 컨설팅 제공',
          '재산 가치 평가 및 분석'
        ]
      }
    }
  },
  en: {
    title: 'Business Areas',
    categories: [
      { name: 'Liner Agent Service', key: 'liner-agent' },
      { name: 'Ship Agent Service', key: 'ship-agent' },
      { name: 'International Logistics', key: 'logistics' },
      { name: 'Real Estate Management', key: 'real-estate' }
    ],
    services: {
      'liner-agent': {
        title: 'Liner Agent Service',
        description: 'HyunJong Company, one of the oldest Liner Agents in Korea, provides optimal shipping services.',
        serviceTitle: 'Liner Agent Service',
        image: '/ship.jpg',
        serviceList: [
          'Local & Feeder company operation',
          'Cargo transport, vessel booking, arrival/departure, and bulk handling',
          'Preparation of shipping documents and bid verification',
          'Container transport management'
        ]
      },
      'ship-agent': {
        title: 'Ship Agent Service',
        description: 'Professional ship agency services connecting shipowners and cargo owners.',
        serviceTitle: 'Ship Agent Service',
        image: '/ship.jpg',
        serviceList: [
          'Support for vessel entry and departure',
          'Ship maintenance and supply management',
          'Administrative processing in ports'
        ]
      },
      'logistics': {
        title: 'International Logistics',
        description: 'Providing optimal global logistics solutions.',
        serviceTitle: 'Global Logistics Service',
        image: '/ship.jpg',
        serviceList: [
          'Global maritime and air transport',
          'Customized logistics solutions',
          'Warehouse and inventory management services'
        ]
      },
      'real-estate': {
        title: 'Real Estate Management',
        description: 'Efficient property management and agency services.',
        serviceTitle: 'Real Estate Management Service',
        image: '/ship.jpg',
        serviceList: [
          'Property rental and maintenance management',
          'Real estate investment consulting',
          'Asset valuation and analysis'
        ]
      }
    }
  }
};

export default async function Business({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value || 'ko') as 'ko';
  const t = translations[language];
  const categoryKey = ((await searchParams).category || 'liner-agent') as 'liner-agent' | 'ship-agent' | 'logistics' | 'real-estate';
  const selectedCategory = t.services[categoryKey];

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<div>loading...</div>}>
        <AnimatedServicesSections selectedCategory={selectedCategory} title={t.title} categories={t.categories} />
      </Suspense>
    </div>
  );
}
