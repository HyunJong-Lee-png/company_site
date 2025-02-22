'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

interface Props {
  t: {
    name: string
    key: string
    items: {
      name: string
      link: string
    }[]
  }[],
  language: string;
}

export default function MenuBar({ t, language }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  return (
    <ul className="flex justify-center space-x-8 text-lg  text-black">
      {t.map(menu =>
      (<li
        key={menu.key}
        className="relative cursor-pointer"
        onMouseEnter={() => toggleMenu(menu.key)}
        onMouseLeave={() => toggleMenu(menu.key)}
        onClick={() => router.push(`/${menu.key}`)}
      >
        <span>{menu.name}</span>
        <DropdownMenu isOpen={openMenu === menu.key} items={menu.items} language={language} />
      </li>)
      )}
    </ul>
  );
}