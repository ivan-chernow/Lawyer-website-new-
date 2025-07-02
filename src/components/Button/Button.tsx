"use client";

import React from "react";
import { ButtonProps } from "@/components/Button/types";

const Button = ({ text, click, className }: ButtonProps) => {
  return (
    <button
      onClick={click}
      className={`uppercase font-semibold text-[14px]
							px-6 py-3  transition duration-200  border-[2px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
