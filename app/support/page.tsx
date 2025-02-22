import { supabase } from "@/supabaseClient";
import InquiryList from "../Component/InquiryList";

export default async function Support() {

  const limit = 5;

  const { count } = await supabase
    .from("inquiries")
    .select('*', { count: 'exact', head: true });

  const totalPage = count && Math.ceil(count / limit);

  const { data: inquiries, error } = await supabase
    .from("inquiries")
    .select("id, title, is_private, created_at")
    .range(0, 4)
    .order("created_at", { ascending: false });

  if (error) return <div>오류 발생: {error.message}</div>;
  if (!inquiries) return <div>목록없음</div>;

  return <InquiryList inquiries={inquiries} totalPage={totalPage} currentPage={1} />;
}
