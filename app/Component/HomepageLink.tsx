'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomepageLink() {
  const router = useRouter();

  return (
    <Image src="/logo.png" alt="logo" width={150} height={200} className="object-cover cursor-pointer" onClick={() => router.push('/')} />

  );
}