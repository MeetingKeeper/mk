"use client"

import ReactQuill from "@/components/Editor"
import React from "react"
import "react-quill/dist/quill.snow.css"
import { api } from "@pm/trpc/client";
import { use } from "react";
// Action-oriented summary: This type of summary focuses on capturing the action items and decisions made during the meeting. It includes a list of tasks assigned to individuals, deadlines, and responsibilities.
//
//   Discussion-based summary: This summary highlights the key points discussed during the meeting. It includes a summary of each agenda item, major ideas or arguments put forward, and any conclusions or recommendations reached.
//
//   Minutes of meeting: Minutes are a detailed record of the proceedings of a meeting. They typically include information about attendees, a summary of discussions, decisions made, and any other relevant information such as reports or presentations.
//
//   Brief summary: A brief summary provides a condensed overview of the meeting without going into excessive detail. It focuses on the main topics covered, decisions made, and any important action items.
//
//   Progress summary: This type of summary is often used for recurring or project-based meetings. It highlights the progress made since the last meeting, identifies any challenges or issues encountered, and provides an update on the overall status of the project or initiative.
//
//   Executive summary: An executive summary is a concise summary designed for busy executives or high-level stakeholders who may not have the time to read through detailed meeting notes. It provides a brief overview of the main topics discussed, decisions made, and any action items requiring their attention.
//
//   Key takeaways or highlights: This type of summary focuses on the key takeaways or highlights from the meeting. It distills the most important points and captures the main outcomes or decisions made during the meeting.

const PageForm = () => {
  const onGenerate = async () => {
    const result = await use(api.viewer.away.mutate({ away: true }));
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
                value={"Test"}
                defaultValue={"Test"}
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
                <span className="pt-0.5">Informative Summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Decision-Making Summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Problem-Solving Summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Action-oriented summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Comparative Summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Minutes of meeting</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Brief summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Progress summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Executive summary</span>
              </label>
              <label className="inline-flex cursor-pointer">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="pt-0.5">Key takeaways or highlights</span>
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
