'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import AboutSection from "./AboutSection";
import HistorySection from "./HistorySection";
import TeamSection from "./TeamSection";

interface Props {
  title: string,
  categories: {
    name: string
    key: string
  }[],
  selectedCategory: string,
  language: 'ko' | 'en'
}

export default function AnimatedAboutSections({ title, categories, selectedCategory, language }: Props) {

  return (
    <>
      {/* Header */}
      <motion.header
        className="relative w-full h-64 bg-cover bg-center flex justify-between items-center px-6"
        style={{
          backgroundImage: "url('/ship2.jpg')",
          backgroundSize: 'contain'
        }}
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

      {/* Category Navigation */}
      <nav className="max-w-6xl mx-auto flex justify-center space-x-8 my-8">
        {categories?.map(cat => (
          <Link key={cat.key} scroll={false} href={`?category=${cat.key}`} className={`text-lg ${selectedCategory === cat.key ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>{cat.name}</Link>
        ))}
      </nav>

      {/* Category Sections */}
      {selectedCategory === 'about'
        ? <AboutSection language={language} />
        : selectedCategory === 'history'
          ? <HistorySection language={language} />
          : <TeamSection />}
    </>
  );
}