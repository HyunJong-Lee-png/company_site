"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SendMail() {
  const [formData, setFormData] = useState({ title: "", message: "", contact: "" });
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("success");
      setFormData({ title: "", message: "", contact: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <motion.div
        className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-lg rounded-lg mt-32 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &#x1F4E9; 문의메일
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          {/* 제목 입력 */}
          <motion.input
            type="text"
            name="title"
            placeholder="제목"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            whileFocus={{ scale: 1.02 }}
          />
          {/* 내용 입력 */}
          <motion.textarea
            name="message"
            placeholder="문의 내용을 입력하세요."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            required
            whileFocus={{ scale: 1.02 }}
          />
          {/* 연락처 입력 */}
          <motion.input
            type="text"
            name="contact"
            placeholder="이메일 또는 연락처"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            whileFocus={{ scale: 1.02 }}
          />
          {/* 제출 버튼 */}
          <motion.button
            type="submit"
            className={`w-full ${status === 'loading' ? 'bg-gray-400' : 'bg-blue-500'} text-white p-3 rounded-md font-bold ${status === 'loading' ? '' : 'hover:bg-blue-600'}`}
            whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
            transition={{ duration: 0.2 }}
            disabled={status === 'loading'}
          >
            문의 보내기
          </motion.button>
        </form>
        {/* 상태 메시지 */}
        {status === "loading" && <p className="text-gray-500 text-center mt-4">전송 중...</p>}
        {status === "success" && (
          <motion.p
            className="text-green-500 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            문의가 성공적으로 전송되었습니다! 🎉
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-red-500 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            전송 중 오류가 발생했습니다. 다시 시도해주세요.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
