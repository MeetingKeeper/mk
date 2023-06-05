"use client"

import ReactQuill from "@/components/Editor"
import React from "react"
import "react-quill/dist/quill.snow.css"

const PageForm = () => {
  return (
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
        <div className="mt-5 md:mt-0">
          <input
            type="file"
            className="form-input p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5 rtl:file:ml-5"
            multiple
            accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
            required
          />
        </div>
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
            <span className="pt-0.5">Action Plan Summary</span>
          </label>
          <label className="inline-flex cursor-pointer">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className="pt-0.5">Comparative Summary</span>
          </label>
        </div>
      </div>
      <div className="flex items-center ltr:ml-auto rtl:mr-auto">
        <button type="button" className="btn btn-outline-danger ltr:mr-3 rtl:ml-3" onClick={() => {}}>
          Clear
        </button>
        <button type="button" className="btn btn-primary" onClick={() => {}}>
          Generate
        </button>
      </div>
    </form>
  )
}

export default PageForm
