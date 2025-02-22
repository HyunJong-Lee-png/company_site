"use client";
import { motion } from "framer-motion";

const translations = {
  ko: {
    title: '이렇게 성장해왔습니다!',
    historyDatas: [
      { year: "1990", event: "📍 회사 설립" },
      { year: "1995", event: "🚢 첫 해외 해운 계약 체결" },
      { year: "2000", event: "🏢 본사 확장 이전" },
      { year: "2005", event: "🌏 글로벌 네트워크 구축 (미국, 유럽, 아시아)" },
      { year: "2010", event: "📦 스마트 물류 시스템 도입" },
      { year: "2015", event: "🔗 대형 파트너사와 협력 체결" },
      { year: "2020", event: "🚀 친환경 선박 프로젝트 착수" },
      { year: "2023", event: "🏆 해운 물류 서비스 우수 기업 선정" },
    ]
  },
  en: {
    title: "This is how we have grown!",
    historyDatas: [
      { year: "1990", event: "📍 Company Founded" },
      { year: "1995", event: "🚢 Signed First Overseas Shipping Contract" },
      { year: "2000", event: "🏢 Expanded and Relocated Headquarters" },
      { year: "2005", event: "🌏 Established Global Network (USA, Europe, Asia)" },
      { year: "2010", event: "📦 Introduced Smart Logistics System" },
      { year: "2015", event: "🔗 Partnered with Major Corporations" },
      { year: "2020", event: "🚀 Launched Eco-friendly Ship Project" },
      { year: "2023", event: "🏆 Recognized as an Outstanding Maritime Logistics Company" },
    ]
  }
};

interface Props {
  language: 'ko' | 'en'
}

export default function HistorySection({ language }: Props) {
  const t = translations[language];

  return (
    <div className="max-w-6xl mx-auto py-8 px-6 text-black">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.title}
      </motion.h1>
      <div className="w-1/2 ml-[50%] relative border-l-4 border-blue-500 space-y-32 pb-16 my-12">

        {t.historyDatas.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            className="relative h-1"
            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {index % 2 === 0
              ? (<div className="ml-3 flex items-center gap-4">
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h3 className="text-xl font-semibold">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>)
              : (<div className="absolute top-full right-full flex items-center gap-4 mr-3 text-nowrap">
                <div>
                  <h3 className="text-xl font-semibold text-right">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              </div>)}
          </motion.div>
        ))}

        {t.historyDatas.slice(3).map((item, index) => (
          <motion.div
            key={index}
            className="relative h-1"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            // animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {index % 2 === 1
              ? (<div className="ml-3 flex items-center gap-4">
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h3 className="text-xl font-semibold">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>)
              : (<div className="absolute top-full right-full flex items-center gap-4 mr-3 text-nowrap">
                <div>
                  <h3 className="text-xl font-semibold text-right">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              </div>)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
