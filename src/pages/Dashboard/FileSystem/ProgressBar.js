import React from "react";

function ProgressBar() {
  return (
      <div className="w-full mt-5 h-5 bg-white border border-neutral-400">
        <div
          className="text-center bg-neutral-600 text-xs font-medium w-1/4 h-full"
        >
          25%
        </div>
      </div>
  );
}

export default ProgressBar;
