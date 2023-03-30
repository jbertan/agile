import React from "react";
interface props {
  changePage: () => void;
  triggerAnimation: () => void;
  children: React.ReactNode;
}
const NextButton = ({ changePage, triggerAnimation, children }: props) => {
  return (
    <button
      className="next-button"
      onClick={() => {
        changePage(), triggerAnimation();
      }}
    >
      <span>{children}</span>
      <svg
        className="next-arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default NextButton;
