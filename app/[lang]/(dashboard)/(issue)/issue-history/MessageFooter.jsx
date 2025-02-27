import { useState } from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Annoyed, SendHorizontal } from "lucide-react";
export default function MessageFooter({
  handleSendMessage,
  replay,
  setReply,
  replayData,
}) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight - 15}px`;
  };

  const handleSelectEmoji = (emoji) => {
    setMessage(message + emoji.native);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(message);
    setReply(false);
    setMessage("");
  };

  return (
    <>
      {replay && (
        <div className="w-full px-6 py-4 flex justify-between gap-4 items-center">
          <div>
            <div className="font-semibold text-base text-default-700 mb-1">
              Replying to {replayData?.contact?.fullName}
            </div>
            <div className="truncate">
              <span className="text-sm text-muted-foreground">
                {replayData?.message}
              </span>
            </div>
          </div>
          <span className="cursor-pointer" onClick={() => setReply(false)}>
            <Icon
              icon="heroicons:x-mark-20-solid"
              className="text-2xl text-default-900"
            />
          </span>
        </div>
      )}

      <div className="w-full flex items-end gap-1 lg:gap-4 lg:px-4 relative px-2">
        <div className="flex-none flex gap-1 absolute md:static top-0 left-1.5 z-10">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label htmlFor="attachement">
                    <span className="h-10 w-10 rounded-full hover:bg-default-50 flex justify-center items-center ">
                      <Icon
                        icon="tabler:file-filled"
                        className="text-2xl text-primary/80 "
                      />
                    </span>
                    <Input type="file" className="hidden" id="attachement" />
                  </Label>
                </TooltipTrigger>
                <TooltipContent align="start">
                  <p>Attach a file</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-1 relative">
              <textarea
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="bg-background border border-default-200 outline-none focus:border-primary rounded-xl break-words pl-8 md:pl-3 px-3 flex-1 h-10 pt-2 p-1 pr-8 no-scrollbar"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                style={{
                  minHeight: "40px",
                  maxHeight: "120px",
                  overflowY: "auto",
                  resize: "none",
                }}
              />

              <Button
                type="submit"
                className="rounded-full bg-default-200 hover:bg-default-300 h-[42px] w-[42px] p-0 self-end"
              >
                <SendHorizontal className="w-5 h-8 text-primary rtl:rotate-180" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
