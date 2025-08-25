"use client"
import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  classname?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  classname,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " rounded-full flex items-center justify-center bg-white boder shadow-md p-2 hover:scale-110 transition",
        classname
      )}
    >
      {icon}
    </button>
  );
};
