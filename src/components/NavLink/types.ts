import React from "react";

export interface NavLinkProps {
  to: string;
  children: React.ReactNode | string;
  smooth?: boolean;
  duration?: number;
  className?: string;
}
