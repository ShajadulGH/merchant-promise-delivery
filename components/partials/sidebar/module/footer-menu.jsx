import React from "react";
import Image from "next/image";
const FooterMenu = () => {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center pb-6">
      <button className="w-11 h-11  mx-auto text-default-500 flex items-center justify-center  rounded-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground"></button>
      <div>
        {/* <Image
          src={session?.user?.image}
          alt={session?.user?.name ?? ""}
          width={36}
          height={36}
          className="rounded-full"
        /> */}
      </div>
    </div>
  );
};
export default FooterMenu;
