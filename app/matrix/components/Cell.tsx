import { FC } from "react";

export const Cell: FC<{ val: string }> = ({ val }) => {
  return <div className="w-12 h-12 flex justify-center items-center text-black">{val}</div>
}