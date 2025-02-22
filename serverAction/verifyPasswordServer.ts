'use server'

import bcrypt from "bcryptjs"

export async function verifyPasswordServer(password: string, hashed_password: any, id: any) {
  const match = await bcrypt.compare(password, hashed_password);
  if (match) {
    return { success: true }
  } else {
    return { success: false }
  }
}