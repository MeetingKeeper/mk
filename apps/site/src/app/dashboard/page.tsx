import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/");
  }

  return (
    <p className="text-center">
      Dont&apos;t have an account? &nbsp;
      <Link href="/auth/register">
        <span className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
          Sign Up
        </span>
      </Link>
    </p>
  );
}
