"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    // @ts-ignore
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default ReactQuill;
