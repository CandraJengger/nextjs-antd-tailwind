import React from "react";

type DefaultModalProps = {
  visible: boolean;
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
  width?: string | number;
  centered?: boolean;
};

export default DefaultModalProps