import { supabase } from "@/supabaseClient";
import InquiryList from "../Component/InquiryList";

export default async function Support() {

  //여기다 실시간 감지
  const { data: inquiries, error } = await supabase
    .from("inquiries")
    .select("id, title, is_private, created_at")
    .order("created_at", { ascending: false })
    ;

  if (error) return <div>오류 발생: {error.message}</div>;
  if (!inquiries) return <div>목록없음</div>;

  return <InquiryList inquiries={inquiries} />;
}
