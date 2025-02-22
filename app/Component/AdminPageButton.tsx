'use client'

import { useRouter } from "next/navigation";

export default function AdminPageButton({ isAdmin }: { isAdmin: boolean }) {
  const router = useRouter();


  return (
    <button
      onClick={() => {
        if (isAdmin) {
          router.push("/support/admin"); // 관리자는 관리자 페이지로 이동
        } else {
          router.push("/admin/login"); // 관리자가 아니면 로그인 페이지로 이동
        }
      }}
      className="absolute top-2 right-2 text-gray-400 text-xs "
    >
      관리자 페이지
    </button>
  );
}