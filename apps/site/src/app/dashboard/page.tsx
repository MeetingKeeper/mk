import React from "react";
import PageForm from "@/app/dashboard/form";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:h-[calc(100vh_-_150px)]">
      <div className="panel h-full flex-1 overflow-x-hidden p-0">
        <div className="flex items-center my-4 px-6">
          <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">Data</h4>
        </div>
        <PageForm />
      </div>
      <div className="panel h-full flex-1 overflow-x-hidden p-0">
        <div className="relative">
          <div className="flex items-center py-4 px-6">
            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">Result</h4>
          </div>
          <div className="h-px bg-gradient-to-l from-indigo-900/20 via-black to-indigo-900/20 opacity-[0.1] dark:via-white"></div>
        </div>
      </div>
    </div>
  );
}
