"use client";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
import { verifyPasswordClient } from "@/utilities/verifyPasswordClient";

export default function DeleteButton({ inquiryId }: { inquiryId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const success = await verifyPasswordClient(inquiryId);
    if (success) {
      // ✅ 삭제 요청
      const { error } = await supabase.from("inquiries").delete().eq("id", inquiryId);
      if (error) {
        alert("삭제 실패: " + error.message);
      } else {
        alert("삭제되었습니다.");
        router.push("/support"); // ✅ 삭제 후 목록으로 이동
        router.refresh();
      }
    }
  };

  return (
    <div className="flex justify-end mt-4">
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        삭제
      </button>
    </div>
  );
}
