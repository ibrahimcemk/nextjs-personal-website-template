"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string,
  btnType: "button " | "submit";
  textStyles?: string;
  containerStyles?: string,
  to?: string
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  btnType = "button",
  containerStyles,
  onClick,
  textStyles,
  to
}: CustomButtonProps) => (
  if (btnType === "button") {
  return (
    <Link href={to!} className={"1 flexCenter gap-3 $Container}}>
    )
  }
)