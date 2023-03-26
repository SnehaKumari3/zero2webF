import React from "react";
import UploadFileSystem from "./UploadFileSystem";
function FileSystem({ showFileDetails }) {
  return (
    <>
      <div className="flex justify-center h-screen">
        {showFileDetails ? (
          <h1 className="text-3xl text-[#BB254A] text-center">{showFileDetails?.details}</h1>
        ) : (
          <UploadFileSystem/>
        )}
      </div>
    </>
  );
}

export default FileSystem;
