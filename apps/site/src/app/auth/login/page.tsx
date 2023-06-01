"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <p className="text-center">
      Dont&apos;t have an account? &nbsp;
      <Link href="/auth/signup">
        <span className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
          Sign Up
        </span>
      </Link>
    </p>
  );
}
