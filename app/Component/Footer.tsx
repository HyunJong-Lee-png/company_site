export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* 회사 주소 */}
        <p className="text-sm md:text-base">
          (48943) 부산광역시 중구 중앙대로 42번길 5, 6층 (중앙동, 동주빌딩)
        </p>

        {/* 저작권 정보 */}
        <p className="mt-2 text-xs md:text-sm">
          Copyright © 동주마리타임. All rights reserved. <br className="md:hidden" />
          <span className="block md:inline">Design by KOWEB.</span>
        </p>
      </div>
    </footer>
  );
}
