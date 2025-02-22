"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert("로그인 실패: " + error.message);
      setIsLoading(false);
      return;
    }

    await fetch("/api/admin-login", { method: "POST" });
    router.push("/support/admin");
    router.refresh();
  };

  return (
    <motion.div
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-20 text-center text-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">🔑 관리자 로그인</h2>
      <form onSubmit={handleLogin} className="space-y-4 mt-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button className={`w-full ${isLoading ? "bg-gray-400" : "bg-blue-500"} text-white p-2 rounded-md`} disabled={isLoading ? true : false}>로그인</button>
      </form>
    </motion.div>
  );
}
