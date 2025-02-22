import { verifyPasswordServer } from "@/serverAction/verifyPasswordServer";
import { supabase } from "@/supabaseClient";

//비밀번호 입력을 안하거나, db에 데이터가 없거나, 비밀번호가 맞기 않으면 false리턴

export const verifyPasswordClient = async (id: string) => {
  const password = window.prompt("비밀번호를 입력하세요.");
  if (!password) return false;
  const { data } = await supabase
    .from("inquiries")
    .select("password_hash")
    .eq("id", id)
    .single();
  if (data) {
    const res = await verifyPasswordServer(password, data.password_hash, id);
    if (!res.success) {
      alert("비밀번호가 틀렸습니다.");
      return false;
    } else if (res.success) {
      return true;
    }
  }
  return false;
}