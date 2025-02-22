import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface Props {
  isOpen: boolean
  items: {
    name: string
    link: string
  }[],
  language: string
}

export default function DropdownMenu({ isOpen, items, language }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className={`absolute top-full -left-20 py-2 text-sm ${language === 'ko' ? 'w-56' : 'w-64'} bg-white shadow-lg rounded-md overflow-hidden z-20 text-black`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {items.map(item =>
          (<li key={item.name}>
            <Link href={item.link} className="block relative px-4 py-2 hover:bg-gray-100 hover:text-blue-500 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-red-600 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-6">
              <span className="relative ">{item.name}</span>
            </Link>
          </li>)
          )}
        </motion.ul>
      )}
    </AnimatePresence>

  );
}