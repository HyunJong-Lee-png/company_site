import { supabase } from '@/supabaseClient';

export default async function InquiryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inquiry) {
    return <div>이 문의사항을 볼 수 없습니다.</div>;
  }

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold">{inquiry.title}</h1>
      <p className="mt-2">{inquiry.content}</p>

      {(
        <form action={`/support/${id}/comment`} method="post" className="mt-4">
          <textarea className="border p-2 w-full" name="comment" placeholder="답변을 입력하세요" />
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">댓글 등록</button>
        </form>
      )}
    </div>
  );
}
