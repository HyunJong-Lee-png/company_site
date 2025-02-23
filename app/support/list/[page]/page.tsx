import InquiryList from "@/app/Component/InquiryList";
import { supabase } from "@/supabaseClient";

export default async function PageList({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;

  const limit = 5;
  const startPage = parseInt(page);

  const from = (startPage - 1) * limit;
  const to = from + (limit - 1);
  const { count } = await supabase
    .from("inquiries")
    .select('*', { count: 'exact', head: true });

  const totalPage = count && Math.ceil(count / limit);

  const { data: inquiries, error } = await supabase
    .from("inquiries")
    .select("id, title, is_private, created_at")
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) return <div>오류 발생: {error.message}</div>;
  if (!inquiries) return <div>목록없음</div>;

  return <InquiryList inquiries={inquiries} totalPage={totalPage} currentPage={startPage} />;
}
