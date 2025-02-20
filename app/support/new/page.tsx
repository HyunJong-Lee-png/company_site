"use client";
import { FormEvent, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function NewInquiryPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("inquiries").insert(
      {
        title,
        content,
        password_hash: hashedPassword,
        is_private: isPrivate,
        created_at: new Date(),
      },
    );

    if (error) {
      console.error("문의 등록 실패:", error.message);
    } else {
      router.push("/support");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 text-black">
      <h1 className="text-2xl font-bold text-white">문의하기</h1>
      <input className="border p-2 w-full mt-2" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full mt-2" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
      <input className="border p-2 w-full mt-2" type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label className="flex items-center mt-2">
        <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
        <span className="ml-2">비공개 문의</span>
      </label>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">제출</button>
    </form>
  );
}
