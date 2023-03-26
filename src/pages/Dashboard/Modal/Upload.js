import React from "react";
import Upload_Icon from "./Upload_Icon";
function Upload() {
  return (
    <div className="max-w-xl">
      <label
        htmlFor="desc"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Upload
      </label>
      <Upload_Icon/>
    </div>
  );
}

export default Upload;
