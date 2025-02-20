'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  t: {
    title: string;
    about: string;
    sections: {
      key: string
      intro1: string;
      intro2: string;
      description: string;
    }[];
  }
}

export default function AnumatedAboutSections({ t }: Props) {
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
          >{t.title}</motion.h1>
        </div>
      </motion.header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 mt-[92px]">
        <motion.h2
          className="text-3xl font-bold text-center mb-20 text-gray-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
        >{t.about}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.sections.map(section => (
            <Fragment key={section.key}>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1, transformOrigin: 'left center' }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/ship.jpg" width={600} height={400} alt="Shipping" className="rounded-lg shadow-md" />
              </motion.div>
              <motion.div
                className=" text-yellow-600 place-self-center"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1, transformOrigin: 'right center' }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg font-semibold">{section.intro1}</p>
                <p className="text-lg font-semibold">{section.intro2}</p>
                <p className="text-gray-700 mt-4">{section.description}</p>
              </motion.div>
            </Fragment>))}
        </div>
      </section>
    </>
  );
}