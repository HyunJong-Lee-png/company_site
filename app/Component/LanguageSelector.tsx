"use client";

import { useState, useTransition } from "react";

export default function LanguageSelector({ defaultLanguage }: { defaultLanguage: "ko" | "en" }) {
  const language = defaultLanguage;
  const [isPending, startTransition] = useTransition();

  async function changeLanguage(lang: "ko" | "en") {
    document.cookie = `language=${lang}; path=/`;
    startTransition(() => {
      window.location.reload();
    });
  }

  return (
    <select
      className="relative z-10 bg-white p-2 rounded-md border text-black"
      value={language}
      onChange={(e) => changeLanguage(e.target.value as "ko" | "en")}
      disabled={isPending} // 로딩 중일 때 비활성화
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}
