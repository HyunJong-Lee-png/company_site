'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  categories: {
    name: string
    key: string
  }[]
  title: string
  selectedCategory: {
    title: string;
    description: string;
    serviceTitle: string;
    image: string;
    serviceList: string[];
  }
}

export default function AnimatedServicesSections({ categories, title, selectedCategory }: Props) {

  return (
    <>
      <motion.header
        className="relative w-full h-64 bg-cover bg-center flex justify-center items-center px-6" style={{ backgroundImage: "url('/ship2.jpg')", backgroundSize: 'contain' }}
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
          >{title}
          </motion.h1>
        </div>
      </motion.header>

      {/* Category Navigation */}
      <nav className="max-w-6xl mx-auto flex justify-center space-x-8 my-8">
        {categories.map((cat) => (
          <Link key={cat.key} scroll={false} href={`?category=${cat.key}`} className={`text-lg ${selectedCategory.title === cat.name ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>{cat.name}</Link>
        ))}
      </nav>


      {/* Service Section */}
      <section
        className="max-w-6xl mx-auto py-16 px-6"
        key={selectedCategory.title}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-20 text-gray-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
        >{selectedCategory.title}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image src={selectedCategory.image} width={600} height={400} alt={selectedCategory.title} className="rounded-lg shadow-md" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-red-600 mb-4">{selectedCategory.serviceTitle}</h3>
            <p className="text-gray-700 mb-4">{selectedCategory.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {selectedCategory.serviceList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}