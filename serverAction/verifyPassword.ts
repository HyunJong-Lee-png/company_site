'use server'

import bcrypt from "bcryptjs"
import { redirect } from "next/navigation";

export async function verifyPassword(password: string, hashed_password: any, id: any) {
  const match = await bcrypt.compare(password, hashed_password);
  if (match) {
    redirect(`/support/${id}`);
  } else {
    return { success: false }
  }
}