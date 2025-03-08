import React from "react";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
const MenuBar = ({ collapsed, setCollapsed }) => {
  return (
    <button
      className="relative group  disabled:cursor-not-allowed opacity-50"
      onClick={() => setCollapsed(!collapsed)}
    >
      <div>
        <div
          className={cn(
            "flex flex-col justify-between w-[20px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden",
            {
              "-translate-x-1.5 rotate-180": collapsed,
            }
          )}
        >
          <div
            className={cn(
              "bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150",
              {
                "rotate-[42deg] w-[11px]": collapsed,
                "w-7": !collapsed,
              }
            )}
          ></div>
          <div
            className={cn(
              "bg-card-foreground h-[2px] w-7 rounded transform transition-all duration-300",
              {
                "translate-x-10": collapsed,
              }
            )}
          ></div>
          <div
            className={cn(
              "bg-card-foreground h-[2px] transform transition-all duration-300 origin-left delay-150",
              {
                "-rotate-[43deg] w-[11px]": collapsed,
                "w-7": !collapsed,
              }
            )}
          ></div>
        </div>
      </div>
    </button>
  );
};
const VerticalHeader = ({ handleOpenSearch }) => {
  const { collapsed, setCollapsed } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");
  let LogoContent = null;
  let menuBarContent = null;

  const MainLogo = (
    <Link href="/dashboard" className=" text-primary ">
      <Image src="/Asset 1RP Logo.png" width="150" height="150" />
    </Link>
  );
  const SearchButton = (
    <div>
      <button
        className=" inline-flex  gap-2 items-center text-default-600 text-sm"
        onClick={handleOpenSearch}
      >
        <span>
          <Search className=" h-4 w-4" />
        </span>
        <span className=" md:block hidden"> Search...</span>
      </button>
    </div>
  );
  if (!isDesktop) {
    LogoContent = MainLogo;
  }
  // menu bar content condition
  if (isDesktop) {
    menuBarContent = (
      <MenuBar collapsed={collapsed} setCollapsed={setCollapsed} />
    );
  }
  return (
    <>
      <div className="flex items-center md:gap-6 gap-3">
        {LogoContent}
        {menuBarContent}
        {SearchButton}
      </div>
    </>
  );
};

export default VerticalHeader;
