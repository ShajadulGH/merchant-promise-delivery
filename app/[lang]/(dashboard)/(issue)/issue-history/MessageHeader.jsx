import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MessageHeader({ showInfo, handleShowInfo, profile }) {
  let active = true;

  return (
    <div className="flex items-center">
      <div className="flex flex-1 gap-3 items-center">
        <div className="relative inline-block">
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="" />
            <AvatarFallback>{profile?.fullName?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <Badge
            className="h-3 w-3 p-0 ring-1 ring-border ring-offset-[1px] items-center justify-center absolute left-[calc(100%-12px)] top-[calc(100%-12px)]"
            color={active ? "success" : "secondary"}
          ></Badge>
        </div>
        <div className="hidden lg:block">
          <div className="text-sm font-medium text-default-900">
            <span className="relative">{profile?.fullName}</span>
          </div>
          <span className="text-xs text-default-500">
            {active ? "Active Now" : "Offline"}
          </span>
        </div>
      </div>
      <div className="flex-none space-x-2 rtl:space-x-reverse">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                size="icon"
                className={cn(
                  "bg-transparent hover:bg-default-50 rounded-full",
                  {
                    "text-primary": !showInfo,
                  }
                )}
                onClick={handleShowInfo}
              >
                <span className="text-xl text-primary">
                  {showInfo ? (
                    <Icon icon="material-symbols:info" />
                  ) : (
                    <Icon icon="material-symbols:info-outline" />
                  )}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="end">
              <p>Issue information</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
