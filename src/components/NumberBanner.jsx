import React from "react";

const CallUsBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-t-2xl relative overflow-hidden">
      {/* dotted overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px] opacity-10"></div>
      <div className="relative text-center text-lg md:text-xl">
        Call us: <span className="font-bold">+91 - 7838500048</span>
      </div>
    </div>
  );
};

export default CallUsBar;
