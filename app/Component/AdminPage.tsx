'use client'

import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation";

interface Props {
  inquiries: {
    id: string;
    title: string;
    content: string;
  }[]
}

export default function AdminPage({ inquiries }: Props) {
  const router = useRouter();

  return (
    <motion.div
      className="relative p-6 max-w-4xl mx-auto bg-gray-100 min-h-screen text-black rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <h1 className="flex-1 text-3xl font-bold text-center text-red-600">관리자 페이지</h1>
        <LogoutButton />
      </div>

      <ul className="mt-6 space-y-4">
        {inquiries?.map((inquiry) => (
          <motion.li
            key={inquiry.id}
            className="border p-4 rounded-md shadow-md bg-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">{inquiry.title}</h3>
            <p className="text-gray-700">{inquiry.content}</p>
            <button
              onClick={async () => {
                await supabase.from("inquiries").delete().eq("id", inquiry.id);
                alert('삭제되었습니다.');
                router.refresh();
              }}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md"
            >
              삭제
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}