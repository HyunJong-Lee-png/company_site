'use server'

import bcrypt from "bcryptjs";

export default async function makePassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return { hashedPassword };
}