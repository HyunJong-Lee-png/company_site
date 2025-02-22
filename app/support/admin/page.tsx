import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/supabaseClient";
import AdminPage from "@/app/Component/AdminPage";

interface Inquiry {
  id: string;
  title: string;
  content: string;
}

export default async function AdminSupportPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";

  if (!isAdmin) {
    redirect("/admin/login");
  }

  const { data: inquiries, error } = await supabase.from("inquiries").select("id,title,content").order("created_at", { ascending: false }).returns<Inquiry[]>();

  if (error) return <div>오류 발생: {error.message}</div>;

  return (
    <AdminPage inquiries={inquiries} />
  );
}
