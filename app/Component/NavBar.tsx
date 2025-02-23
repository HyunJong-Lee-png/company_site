import HomepageLink from "./HomepageLink";
import LanguageSelector from "./LanguageSelector";
import MenuBar from "./MenuBar";
import { cookies } from "next/headers";
import AdminPageButton from "./AdminPageButton";

const translations = {
  ko: [
    {
      name: "회사소개",
      key: "about",
      items: [
        { name: "회사 개요", link: "/about?category=about" },
        { name: "회사 연혁", link: "/about?category=history" },
        { name: "팀 소개", link: "/about?category=team" },
      ],
    },
    {
      name: "사업분야",
      key: "services",
      items: [
        { name: "정기선대리점서비스", link: "/services?category=liner-agent" },
        { name: "선박대리점서비스", link: "/services?category=ship-agent" },
        { name: "국제물류서비스", link: "/services?category=logistics" },
        { name: "부동산관리대행서비스", link: "/services?category=real-estate" }
      ],
    },
    {
      name: "고객지원",
      key: "support",
      items: [
        { name: "문의하기", link: "/support" },
        { name: "공지사항", link: "/support/announcement" },
        { name: "Q&A", link: "/support/sendmail" },
      ],
    },
    {
      name: "사이트맵",
      key: 'sitemap',
      items: [
        { name: '오시는 길', link: '/sitemap' }
      ],
    }
  ],
  en: [
    {
      name: "About Us",
      key: "about",
      items: [
        { name: "Company Overview", link: "/about" },
        { name: "History", link: "/about/history" },
        { name: "Our Team", link: "/about/team" },
      ],
    },
    {
      name: "Business Areas",
      key: "services",
      items: [
        { name: "Liner Agent Service", link: "/services?category=liner-agent" },
        { name: "Ship Agent Service", link: "/services?category=ship-agent" },
        { name: "International Logistics", link: "/services?category=logistics" },
        { name: "Real Estate Management", link: "/services?category=real-estate" }
      ],
    },
    {
      name: "Customer Support",
      key: "support",
      items: [
        { name: "Contact Us", link: "/support" },
        { name: "Announcements", link: "/support/announcement" },
        { name: "Q&A", link: "/support/sendmail" },
      ],
    },
    {
      name: "Site Map",
      key: 'sitemap',
      items: [
        { name: 'Find Us', link: '/sitemap' }
      ],
    }
  ],
}




export default async function NavBar({ defaultLanguage }: { defaultLanguage: "ko" | "en" }) {
  const cookieStore = await cookies();
  const language = (cookieStore.get('langauge')?.value || 'ko') as 'ko' | 'en';
  const t = translations[language];
  const isAdmin = cookieStore.get('admin')?.value === 'true'

  return (
    <nav className="relative bg-white shadow-md py-4 px-10 text-center flex items-center justify-between">
      <HomepageLink />
      <div className="flex items-center gap-8">
        <MenuBar t={t} language={language} />
        <LanguageSelector defaultLanguage={defaultLanguage} />
      </div>
      <AdminPageButton isAdmin={isAdmin} />
    </nav>
  );
}
