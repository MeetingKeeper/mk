"use client"

import ReactQuill from "@/components/Editor"
import React from "react"
import "react-quill/dist/quill.snow.css"
import { api } from "@pm/trpc/client";
import Tippy from "@tippyjs/react";
const PageForm = () => {
  const onGenerate = async () => {
    const result = await api.viewer.summary.mutate({ text: "Customer: Good morning! We're here to discuss our tax matters. We've brought all the necessary documents and receipts.\n" +
        "\n" +
        "Accountant 1: Good morning! Thank you for coming in. I'm Accountant 1, and this is Accountant 2. We'll be assisting you with your tax matters. Let's get started by reviewing the documents you've brought.\n" +
        "\n" +
        "Customer: Thank you for having us. We have our financial statements, receipts, and any other relevant documents ready for you to review.\n" +
        "\n" +
        "Accountant 2: Excellent. We'll go through each document and ensure everything is in order. While we do that, could you please provide us with some information about your financial activities during the previous fiscal year?\n" +
        "\n" +
        "Customer: Certainly. We experienced some growth last year, with increased sales and a few new investments. Our expenses also rose due to expansion plans and hiring additional staff.\n" +
        "\n" +
        "Account Manager 1: Thank you for sharing that information. It will help us understand your tax situation better. We'll now review the financial statements and receipts you've provided. Is there any particular area or concern you'd like us to focus on?\n" +
        "\n" +
        "Customer: We'd appreciate if you could pay extra attention to our expenses related to the expansion projects. We want to ensure we're correctly accounting for those costs and taking advantage of any tax deductions available.\n" +
        "\n" +
        "Accountant 1: Noted. We'll carefully examine those expenses and make sure they are appropriately categorized. We'll also assess the eligibility for any deductions or tax credits that might be applicable to your situation.\n" +
        "\n" +
        "Account Manager 2: In addition to reviewing your expenses, we'll also analyze your revenue streams to identify any potential tax planning opportunities. Our goal is to minimize your tax liability while ensuring compliance with all relevant tax regulations.\n" +
        "\n" +
        "Customer: That's exactly what we were hoping for. We want to make sure we're taking advantage of any tax benefits available to us while remaining fully compliant.\n" +
        "\n" +
        "Accountant 2: Perfect. Our team stays updated with the latest tax laws and regulations, so we'll ensure you're aware of any changes that may impact your tax strategy. Additionally, we'll provide you with advice on how to optimize your tax position for the upcoming fiscal year.\n" +
        "\n" +
        "Account Manager 1: Once we have reviewed your documents and assessed your tax situation, we'll schedule a follow-up meeting to discuss our findings and recommendations. During that meeting, we can address any questions or concerns you may have.\n" +
        "\n" +
        "Customer: That sounds great. We appreciate your expertise and guidance. We look forward to the follow-up meeting and getting a better understanding of how to navigate our tax obligations more effectively.\n" +
        "\n" +
        "Accountant 1: Thank you for your kind words. It's our pleasure to assist you. We'll work diligently to ensure we provide you with accurate and comprehensive tax advice. If you have any immediate questions or need assistance in the meantime, please feel free to reach out to us.\n" +
        "\n" +
        "Accountant 2: Absolutely. We're here to support you throughout the entire process. Rest assured, we'll take care of your tax matters diligently and professionally.\n" +
        "\n" +
        "Customer: Thank you once again. We're glad to have you as our tax accounting partners. We'll be in touch if we have any questions before the follow-up meeting.\n" +
        "\n" +
        "Account Manager 2: You're most welcome. We value your trust in our firm, and we'll do our best to exceed your expectations. We'll eagerly await your contact and prepare for our next meeting. Have a great day!" });
    console.log(result);

  }
  return (
    <>
      <div className="panel h-full flex-1 overflow-x-hidden p-0">
        <div className="flex items-center my-4 px-6">
          <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">Data</h4>
        </div>
        <form className="flex flex-1 flex-col justify-between gap-6 p-6 h-[90%]">
          <div className="flex flex-col h-full" >
            <div className="h-full">
              <ReactQuill
                // @ts-ignore
                theme="snow"
                value={""}
                defaultValue={""}
                style={{ height: '90%' }}
              />
            </div>
            {/* TODO - Add file upload */}
            {/*<div className="mt-5 md:mt-0">*/}
            {/*  <input*/}
            {/*    type="file"*/}
            {/*    className="form-input p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5 rtl:file:ml-5"*/}
            {/*    accept=".txt"*/}
            {/*    required*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="mt-8 flex flex-row flex-wrap gap-3 text-center ">
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Informative Summary</span>
                <Tippy content="An informative summary provides a comprehensive and objective overview of the main points and details of a topic or document.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Decision-Making Summary</span>
                <Tippy content="A decision-making summary presents relevant information and analysis to support the process of making informed decisions.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              {/*<label className="inline-flex cursor-pointer">*/}
              {/*  <input type="checkbox" className="form-checkbox" defaultChecked />*/}
              {/*  <span className="pt-0.5">Problem-Solving Summary</span>*/}
              {/*</label>*/}
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Action-oriented summary</span>
                <Tippy content="An action-oriented summary outlines specific steps, recommendations, or actions that need to be taken based on the information provided.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              {/*<label className="inline-flex cursor-pointer">*/}
              {/*  <input type="checkbox" className="form-checkbox" defaultChecked />*/}
              {/*  <span className="pt-0.5">Comparative Summary</span>*/}
              {/*</label>*/}
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Minutes of meeting</span>
                <Tippy content="Minutes of meeting capture the essential discussions, decisions, and action items from a meeting.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              <label className="flex flex-row justify-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Brief summary</span>
                <Tippy content="A brief summary is a concise statement or overview that captures the key points or main ideas of a longer piece of content, such as an article, report, or book.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              {/*<label className="inline-flex cursor-pointer">*/}
              {/*  <input type="checkbox" className="form-checkbox" defaultChecked />*/}
              {/*  <span className="pt-0.5">Progress summary</span>*/}
              {/*</label>*/}
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Executive summary</span>
                <Tippy content="An executive summary is a condensed version of a report or proposal that provides an overview of the key findings, recommendations, and outcomes.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5 mr-1">Key takeaways or highlights</span>
                <Tippy content="Key takeaways or highlights are the main points or key lessons learned from a piece of content, often presented in a concise format.">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 mr-2">
                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"/>
                  </svg>
                </Tippy>
              </label>
            </div>
          </div>
          <div className="flex items-center ltr:ml-auto rtl:mr-auto">
            <button type="button" className="btn btn-outline-danger ltr:mr-3 rtl:ml-3" onClick={() => {}}>
              Clear
            </button>
            <button type="button" className="btn btn-primary" onClick={onGenerate}>
              Generate
            </button>
          </div>
        </form>
      </div>
      <div className="panel h-full flex-1 overflow-x-hidden p-0">
        <div className="relative">
          <div className="flex items-center py-4 px-6">
            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">Result</h4>
          </div>
          <div className="h-px bg-gradient-to-l from-indigo-900/20 via-black to-indigo-900/20 opacity-[0.1] dark:via-white"></div>
        </div>
      </div>
    </>

  )
}

export default PageForm
