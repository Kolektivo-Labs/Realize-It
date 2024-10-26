"use client";
import { PathParamsType } from "@/types/menu";
import ActivitiesIcon from "@/public/icons/activities-menu-icon.svg";
import WalletIcon from "@/public/icons/wallet-menu-icon.svg";
import LeaderBoardIcon from "@/public/icons/leaderboard-menu-icon.svg";
import ProfileIcon from "@/public/icons/profile-menu-icon.svg";
import Link from "next/link";
import Image from "next/image";
import sessionStorageService from "@/services/storageService";
import RateHostUploadIcon from "@/components/RateHost/UploadIcon";

let currentActivityId = sessionStorageService.getItem("currentActivityId");
sessionStorageService.on("storageChange", (e) => {
  if (e.key == "currentActivityId") {
    currentActivityId = e.newValue;
  }
});

export const pathToMenuItem = (path: string) => {
  return pathParams.find((menuItem) => path.includes(menuItem.path));
};

export const pathParams: PathParamsType[] = [
  {
    text: "Activities",
    icon: ActivitiesIcon,
    headerIconRight: () => (
      <Link
        href={"/createActivity"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/plus-circle-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    path: "activities",
  },
  {
    text: "Create Acitivity",
    headerIconLeft: () => (
      <Link
        href={"/activities"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/close-circle-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={"/addActivityRewards"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "createActivity",
  },
  {
    text: "Add Activity Rewards",
    headerIconLeft: () => (
      <Link
        href={"/createActivity"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={"/uploadBeforeImages"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "addActivityRewards",
  },
  {
    text: "Upload After Images",
    headerIconLeft: () => (
      <Link
        href={`/reviewFillIn/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={`/activities`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/upload-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "uploadAfterImages",
  },
  {
    text: "Review Participants",
    headerIconLeft: () => (
      <Link
        href={"/activities"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={`/reviewFillIn/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "reviewParticipants",
  },
  {
    text: "Fill In",
    headerIconLeft: () => (
      <Link
        href={`/activity/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={`/uploadParticipationImages/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "checkoutFillIn",
  },
  {
    text: "Fill In",
    headerIconLeft: () => (
      <Link
        href={`/reviewParticipants/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={`/uploadAfterImages/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "reviewFillIn",
  },
  {
    text: "Upload Participation Images",
    textSize: "xs",
    headerIconLeft: () => (
      <Link
        href={`/checkoutFillIn/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: () => (
      <Link
        href={`/rateHost/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-right-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "uploadParticipationImages",
  },
  {
    text: "Activity",
    headerIconLeft: () => (
      <Link
        href={"/activities"}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    notSeenOnMenu: true,
    path: "activity",
  },
  {
    text: "Rate Host",
    headerIconLeft: () => (
      <Link
        href={`/uploadParticipationImages/${currentActivityId}`}
        className="z-20 w-8 h-8 absolute flex justify-center items-center left-10 top-1/2 translate-y-[-50%]"
      >
        <Image
          width={22}
          height={22}
          src={"/icons/arrow-left-icon.svg"}
          alt={`plus cicle icon`}
        />
      </Link>
    ),
    headerIconRight: RateHostUploadIcon,
    notSeenOnMenu: true,
    path: "rateHost",
  },
  {
    text: "Wallet",
    icon: WalletIcon,
    path: "Wallet",
  },
  {
    text: "LeaderBoard",
    icon: LeaderBoardIcon,
    path: "leaderBoard",
  },
  {
    text: "Profile",
    icon: ProfileIcon,
    headerIconRight: () => (
      <div className="z-20 w-8 h-8 absolute flex justify-center items-center right-10 top-1/2 translate-y-[-50%]">
        <Image
          width={22}
          height={22}
          src={"/icons/edit-icon.svg"}
          alt={`plus cicle icon`}
        />
      </div>
    ),
    path: "profile",
  },
];
