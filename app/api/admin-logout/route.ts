import { cookies } from "next/headers";
import { supabase } from "@/supabaseClient";
import { redirect } from "next/navigation";

export async function POST() {
  await supabase.auth.signOut(); // Supabase 세션 삭제
  (await cookies()).delete("admin"); // 관리자 쿠키 삭제
  redirect("/");
}
