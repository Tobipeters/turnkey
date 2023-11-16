import React from "react";
import styles from "./styles.module.css";

export const TButton: React.FC<IProps> = ({
  text,
  size,
  mode = "primary",
  type = "button",
  fullWidth,
  click,
}) => {
  return (
    <button
      className={`
    ${styles.btn_default}
    ${size === "sm" && styles.btn_sm}
    ${mode === "primary" && styles.btn_primary}
    ${fullWidth && styles.full_width}
  `}
      type={type}
      onClick={click}
    >
      {text}
    </button>
  );
};

interface IProps {
  text: string;
  size?: "sm" | "md";
  mode?: "primary";
  type?: "button" | "submit";
  fullWidth?: boolean;
  click?: () => void;
}
