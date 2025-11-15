import React from "react";

const CallbackButton = () => {
  const handleClick = () => {
    const contactSection = document.querySelector("#popup");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulseBounce {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateY(-3px) scale(1.05);
            opacity: 0.95;
          }
          50% {
            transform: translateY(0) scale(1.1);
            opacity: 1;
          }
          75% {
            transform: translateY(3px) scale(1.05);
            opacity: 0.95;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .cb-anim {
          display: inline-block;
          animation: pulseBounce 2s ease-in-out infinite;
        }
      `}</style>

      <button
        onClick={handleClick}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rotate-180 bg-[#D65A2E] text-white font-semibold py-3 px-4 rounded-l-xl shadow-lg hover:bg-[#b84c27] transition-all duration-300"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        aria-label="Request callback"
      >
        <span className="cb-anim">Callback Request →</span>
      </button>
    </>
  );
};

export default CallbackButton;
