import DeleteButton from "@/app/Component/DeleteButton";
import { supabase } from "@/supabaseClient";

export default async function InquiryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // ✅ 문의사항 가져오기
  const { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inquiry) {
    return <div className="p-6 text-center text-red-500">이 문의사항을 볼 수 없습니다.</div>;
  }

  // ✅ 조회수 증가
  await supabase
    .from("inquiries")
    .update({ views: inquiry.views + 1 })
    .eq("id", id);

  // ✅ 날짜 형식 변환
  const formattedDate = new Date(inquiry.created_at).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white text-black shadow-md rounded-md">
      {/* 제목 */}
      <h1 className="text-2xl font-bold border-b pb-2">{inquiry.title}</h1>

      {/* 작성일 & 조회수 */}
      <div className="flex justify-between border-b py-2 text-gray-600 text-sm">
        <span>📅 작성일: {formattedDate}</span>
        <span>👁️ 조회수: {inquiry.views}</span>
      </div>

      {/* 내용 */}
      <div className="py-6 border-b text-gray-800">{inquiry.content}</div>

      {/* 삭제 버튼 */}
      <DeleteButton inquiryId={id} />
    </div>
  );
}
