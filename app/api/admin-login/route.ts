import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).set("admin", "true", {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return new Response(null, { status: 200 });
}
