"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { verifyPasswordClient } from "@/utilities/verifyPasswordClient";
import { Fragment } from "react";

interface Props {
  inquiries: {
    id: string;
    title: string;
    is_private: boolean;
    created_at: Date;
  }[];
  totalPage: number | null;
  currentPage: number
}

export default function InquiryList({ inquiries, totalPage, currentPage }: Props) {
  const router = useRouter();

  const handleClick = async (isPrivate: boolean, id: string) => {
    if (isPrivate) {
      const success = await verifyPasswordClient(id);
      if (success) {
        router.push(`/support/${id}`);
      }
    } else {
      router.push(`/support/${id}`);
    }
  };



  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto bg-white min-h-screen text-black mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <motion.div
        className="flex items-center justify-center space-x-4 py-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          📢
        </motion.span>

        <motion.h1
          className="text-3xl font-bold text-center text-gray-900"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          고객센터 문의사항
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          📝
        </motion.span>
      </motion.div>


      <motion.ul className="mt-6 space-y-4">
        {inquiries.map((inquiry, index) => (
          <motion.li
            key={inquiry.id}
            className="border p-4 rounded-md shadow-md bg-gray-50"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              onClick={() => handleClick(inquiry.is_private, inquiry.id)}
              className="flex justify-between items-center cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-lg flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inquiry.is_private ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="mr-2"
                >
                  🔒
                </motion.div>
                {inquiry.title}
              </span>
              <span className="text-gray-500 text-sm">
                {new Date(inquiry.created_at).toLocaleDateString()}
              </span>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/support/new"
          className="text-blue-500 underline text-lg font-semibold"
        >
          <motion.div
            whileHover={{ scale: 1.1, color: "#1d4ed8" }}
          >
            ➕ 문의 등록하기
          </motion.div>
        </Link>
      </motion.div>

      {/* 총 페이지 */}
      <div className="mt-5 text-black  flex justify-center flex-nowrap gap-5">
        {Array(totalPage).fill(null).map((_, index) =>
        (<Fragment key={index}>
          <Link
            href={`/support/list/${index + 1}`}
            className={`${currentPage === index + 1 ? "pointer-events-none text-gray-400" : ''} hover:text-blue-500`}
          >
            {index + 1}
          </Link>
          {totalPage === index + 1 ? '' : '/'}
        </Fragment>))
        }
      </div>


    </motion.div>
  );
}
