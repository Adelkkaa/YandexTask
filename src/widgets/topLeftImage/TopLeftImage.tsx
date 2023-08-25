import Image from "next/image";
import React from "react";

export const TopLeftImage = () => {
  return (
    <div className="absolute top-[-90px] left-[-70px] mix-blend-color-dodge w-[200px] tb:w-[400px] rotate-[145deg] opacity-40">
      <Image
        src="/top-left-image.jpg"
        width={400}
        height={400}
        alt="top-left-image"
        className="select-none"
      />
    </div>
  );
};
