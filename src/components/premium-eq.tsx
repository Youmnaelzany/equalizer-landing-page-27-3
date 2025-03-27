import Image from "next/image";

import { Button } from "./ui/button";

export default function PremiumEq() {
  return (
    <section className="relative z-50 -mx-4 h-[37.5rem] bg-[#191826] px-12 sm:mx-0 sm:rounded-xl sm:px-16 lg:px-24">
      <Image
        src="/assets/illustration-app.png"
        alt="illustration-app"
        width={209}
        height={430}
        className="absolute -top-27 right-0 left-0 z-40 mx-auto sm:-top-35 sm:-left-84 sm:h-[556px] sm:w-[271px] lg:-top-53 lg:-left-163 lg:h-[642px] lg:w-[312px]"
      />
      <Image
        src="/assets/bg-pattern-2.svg"
        alt="pattern"
        width={312}
        height={468}
        className="absolute top-0 left-12 z-30 sm:right-0 sm:left-0 sm:mx-auto lg:-left-70"
      />
      <div className="absolute right-0 -bottom-94 z-50 h-[34.125rem] w-full space-y-9 bg-[#FA7453] px-9 py-12 text-[#FCFAF9] sm:right-26 sm:-bottom-25 sm:w-[24.9375rem] sm:rounded-xl sm:px-12 lg:right-37 lg:-bottom-33 lg:h-[35.0625rem] lg:w-[27.875rem]">
        <div className="space-y-3">
          <h2 className="text-[2rem] leading-9 font-bold sm:leading-10">
            Premium EQ
          </h2>
          <p className="w-[18.875rem] text-lg leading-7 font-normal">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
        </div>
        <p className="flex items-center text-xl leading-8 font-normal tracking-[-0.0125rem]">
          <span className="mr-4 text-[4.0625rem] leading-[3.25rem] font-bold">
            $4
          </span>
          / month
        </p>
        {/* Button */}
        <div className="flex flex-col space-y-4">
          <Button className="rounded-xl bg-[#191826] text-[#FCFAF9] hover:bg-[#66E2DC]">
            <Image
              src="/assets/icon-apple.svg"
              alt="apple"
              width={18}
              height={12}
            />
            iOS Download
          </Button>
          <Button className="rounded-xl bg-[#FCFAF9] text-[#191826] hover:bg-[#FFB964]">
            <Image
              src="/assets/icon-android.svg"
              alt="android"
              width={18}
              height={12}
            />
            Android Download
          </Button>
        </div>
      </div>
    </section>
  );
}
