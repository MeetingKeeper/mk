import React, { Suspense } from "react";
import PageForm from "@/app/dashboard/form";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row gap-5 sm:h-[calc(100vh_-_150px)]">
      <Suspense fallback={<div>Loading...</div>}>
        <PageForm />
      </Suspense>
    </div>
  );
}
