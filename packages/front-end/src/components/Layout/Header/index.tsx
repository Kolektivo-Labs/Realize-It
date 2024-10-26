import React, { ComponentType } from "react";

type Props = {
  text: string;
  textSize?: string | undefined;
  iconLeft?: ComponentType<{ className?: string }> | undefined;
  iconRight?: ComponentType<{ className?: string }> | undefined;
};
export default function Header({
  text,
  textSize,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: Props) {
  return (
    <div className="relative w-full py-4 flex justify-center items-center font-medium text-base border-b-2 border-softGrayBoderDark">
      {IconLeft && <IconLeft />}
      <p className={`font-semibold text-${textSize ?? "text-sm"}`}>{text}</p>
      {IconRight && <IconRight />}
    </div>
  );
}
