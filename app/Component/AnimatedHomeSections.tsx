'use client'

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string
  sections: {
    name: string;
    key: string;
    image: string;
    link: string;
  }[]
}

export default function AnimatedSections({ title, sections }: Props) {

  return (
    <>
      {/* Header */}
      <motion.header
        className="relative w-full h-64 bg-cover bg-center flex justify-center items-center px-6"
        style={{ backgroundImage: "url('/header.jpg')" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl font-bold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >{title}</motion.h1>
        </div>
      </motion.header>

      {/* Sections Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {sections.map((section, index) => {
            const animationVariants = [
              { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } }, // 첫 번째 항목 (위에서 아래로)
              { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },  // 두 번째 항목 (오른쪽에서 왼쪽으로)
              { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }, // 세 번째 항목 (왼쪽에서 오른쪽으로)
              { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }  // 네 번째 항목 (
            ];
            const animation = animationVariants[index];
            return (
              <Link key={section.key} href={section.link} className="block text-center">
                <div
                  className="relative w-full h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <motion.img src={section.image} alt={section.name} className="object-cover w-full h-full"
                    initial={animation.initial}
                    animate={animation.animate}
                    transition={{ duration: 1, delay: 0.3 * index }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    initial={animation.initial}
                    animate={animation.animate}
                    transition={{ duration: 1, delay: 0.3 * index }}
                  >
                    <h2 className="text-white text-xl font-semibold">{section.name}</h2>
                  </motion.div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  );
}