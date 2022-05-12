import React from "react";

export type Props = {
  visible: boolean;
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
  width?: string | number;
  centered?: boolean;
};