import { MenuItem } from "./Item";
import { pathParams } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="w-full px-4 py-4 border-t-slate-300 border-2">
      <div className="flex gap-2 justify-between items-center text-xs font-medium">
        {pathParams
          .filter((param) => param.notSeenOnMenu != true)
          .map(({ text, icon, path }) => (
            <Link key={text} href={path} className="cursor-pointer">
              <MenuItem text={text} icon={icon ? icon : () => null} />
            </Link>
          ))}
      </div>
    </div>
  );
}
