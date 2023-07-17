import React from "react"
import useRecord from "./useRecord";
const PageForm = () => {
  const { startRecording } = useRecord();
  const onRecord = async () => {
    await startRecording();
  }
  return (
    <>
      <div className="panel h-full flex-1 overflow-x-hidden p-0">
        <div className="flex items-center my-4 px-6">
          <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">Data</h4>
        </div>
        <form className="flex flex-1 flex-col justify-between gap-6 p-6 h-[90%]">
          {/*<div className="flex flex-col h-full" >*/}
          {/*  <div className="h-full">*/}
          {/*    <ReactQuill*/}
          {/*      // @ts-ignore*/}
          {/*      theme="snow"*/}
          {/*      value={""}*/}
          {/*      defaultValue={""}*/}
          {/*      style={{ height: '90%' }}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="flex items-center ltr:ml-auto rtl:mr-auto">
            <button type="button" className="btn btn-outline-danger ltr:mr-3 rtl:ml-3" onClick={() => {}}>
              Clear
            </button>
            <button type="button" className="btn btn-primary" onClick={onRecord}>
              Record
            </button>
          </div>
        </form>
      </div>
    </>

  )
}

export default PageForm
