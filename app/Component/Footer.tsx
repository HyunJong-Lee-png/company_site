export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* 회사 주소 */}
        <p className="text-sm md:text-base">
          (08759) 서울특별시 관악구 관천로 56-6, 3층 (성민빌라)
        </p>

        {/* 저작권 정보 */}
        <p className="mt-2 text-xs md:text-sm">
          Copyright © 현종선박. All rights reserved. <br className="md:hidden" />
          <span>Design by KOWEB.</span>
        </p>
      </div>
    </footer>
  );
}
