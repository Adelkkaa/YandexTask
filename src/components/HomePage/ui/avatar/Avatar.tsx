import Image from "next/image";
import React from "react";

export const Avatar = () => {
  return (
    <div className="hidden tb:flex tb:max-w-none">
      <Image
        className="translate-z-0 "
        src="/myImage.png"
        alt="my-avatar"
        width={300}
        height={647}
      />
    </div>
  );
};
