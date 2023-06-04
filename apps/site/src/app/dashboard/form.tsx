"use client";

import ReactQuill from "@/components/Editor";
import React from "react";
import 'react-quill/dist/quill.snow.css';


const PageForm = () => {
  return (
    <form className="grid gap-6 p-6">
      <div className="h-fit" style={{ minHeight: '250px' }}>
        <ReactQuill
          // @ts-ignore
          theme="snow"
          value={'Test'}
          defaultValue={'Test'}
          style={{ minHeight: '200px' }}
        />
      </div>
      <div>
        <input
          type="file"
          className="form-input p-0 file:border-0 file:bg-primary/90 file:py-2 file:px-4 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5 rtl:file:ml-5"
          multiple
          accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
          required
        />
      </div>
      <div className="mt-8 flex items-center ltr:ml-auto rtl:mr-auto">
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

export default PageForm;
