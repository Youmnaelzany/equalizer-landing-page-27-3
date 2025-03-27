import Image from "next/image";
import Link from "next/link";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-122 mb-20 flex flex-col gap-16 sm:mt-44 sm:mb-[5.5rem] sm:flex-row sm:items-end sm:justify-between lg:mt-52">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-32">
        <Image src="/assets/logo.svg" alt="logo" width={147} height={33} />
        <div className="text-base leading-[1.625rem] font-normal text-[#191826]">
          <p className="">All rights reserved © Equalizer 2021</p>
          <p>Have any problems? Contact us via social media or email us at</p>
          <p className="font-bold">equalizer@example.com</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <FaFacebookSquare className="size-6 text-[#191826] hover:text-[#FA7453]" />
        </Link>
        <Link href={"/"}>
          <FaInstagram className="size-6 text-[#191826] hover:text-[#FA7453]" />
        </Link>
        <Link href={"/"}>
          <FaXTwitter className="size-6 text-[#191826] hover:text-[#FA7453]" />
        </Link>
      </div>
    </footer>
  );
}
