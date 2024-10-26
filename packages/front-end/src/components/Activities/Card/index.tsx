"use client";
import ProfileStats from "@/components/MyProfile/Stats";
import sessionStorageService from "@/services/storageService";
import { ActivityType } from "@/types/commons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = ActivityType & {
  active?: boolean;
  opaque?: boolean;
  iconSize?: number;
  goTo?: string;
};

export default function ActivityCard({
  id,
  icon,
  name,
  stars,
  usdc,
  date,
  active,
  opaque,
  iconSize,
  goTo,
}: Props) {
  const router = useRouter();
  const redirectToReviews = () => {
    sessionStorageService.setItem("currentActivityId", `${id}`);
    if (goTo) {
      router.push(`${goTo}/${id}`);
    }
  };
  return (
    <div
      onClick={redirectToReviews}
      className={`flex items-start justify-between ${
        opaque ? "bg-grayBg" : "bg-white"
      } rounded-lg p-2 cursor-pointer`}
    >
      <div className="flex gap-2 items-start">
        <Image
          width={iconSize ? iconSize : 16}
          height={iconSize ? iconSize : 16}
          src={icon}
          alt={`activity-card-icon-${name}`}
        />
        <div>
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1">
            {active && (
              <Image
                width={8}
                height={8}
                src={"/icons/circle-green-icon.svg"}
                alt={`activity-card-icon-${name}`}
              />
            )}
            <p className="text-textSoftGray text-xs">{date}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start gap-2 px-2">
        {stars && <ProfileStats value={stars} icon="/icons/stars-icon.svg" />}
        {usdc && <ProfileStats value={usdc} icon="/icons/usdc-icon.svg" />}
      </div>
    </div>
  );
}
