import React from "react";
interface props {
  changePageBack: () => void;
  triggerAnimationNegative: () => void;
}
const PrevButton = ({ changePageBack, triggerAnimationNegative }: props) => {
  return (
    <button
      className="next-button"
      onClick={() => {
        changePageBack(), triggerAnimationNegative();
      }}
    >
      {/* <span>Next</span> */}
      <svg
        className="prev-arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default PrevButton;
