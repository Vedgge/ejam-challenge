import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#252F3D] h-[88px] p-[20px] xl:p-0  text-white text-[12px] sm:text-[16px] font-light">
      <div className="max-w-[1245px] mx-auto flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-0 sm:justify-between items-center h-full">
        <div className="flex items-center">
          <span className="capitalize">copyright (C) 2023</span>
          <span className="flex h-[16px] w-[1px] bg-white mx-[12px] sm:mx-[16px]"></span>
          <span>clarifionsupport@clarifion.com</span>
        </div>
        <div>
          <span className="capitalize">Secure 256-bit SSL encryption.</span>
        </div>
      </div>
    </div>
  );
}
