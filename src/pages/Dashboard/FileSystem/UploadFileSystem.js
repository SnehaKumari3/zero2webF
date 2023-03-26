import React from "react";
import Upload_Icon from "../Modal/Upload_Icon";
import ProgressBar from "./ProgressBar";

function UploadFileSystem({ showFileDetails }) {
  return (
    <div className="w-full p-2 m-3 bg-neutral-200">
      <h1 className="text-xl font-medium py-1">Files and assests</h1>
      <p className="py-1 mb-2">Documents and attachments that have been uploaded as part of your projects.</p>
      <Upload_Icon />
      <ProgressBar />
      <div className="border bg-neutral-400 p-2 mt-5">
        <h1 className="bold text-xl">Recent Uploaded Files Details</h1>
        <div className="bg-neutral-200">
          <h2 className="p-2 m-2"> Files </h2>
          <h2 className="p-2 m-2"> Files</h2>
          <h2 className="p-2 m-2"> Files</h2>
          <h2 className="p-2 m-2"> Files</h2>
        </div>
      </div>
    </div>
  );
}

export default UploadFileSystem;
