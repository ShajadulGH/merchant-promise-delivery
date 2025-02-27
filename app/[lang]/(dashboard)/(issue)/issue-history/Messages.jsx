import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
export default function Messages({
  message,
  contact,
  profile,
  onDelete,
  index,
  selectedChatId,
  handleReply,
}) {
  const { senderId, message: chatMessage, time } = message;
  const { avatar } = contact;
  console.log(avatar);
  return (
    <div className="block md:px-6 px-0">
      {senderId === profile.id ? (
        <div className="flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse mb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="w-7 h-7 rounded-full bg-default-200 flex items-center justify-center">
                      <Icon icon="bi:three-dots-vertical" className="text-lg" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-20 p-0"
                    align="center"
                    side="top"
                  >
                    <DropdownMenuItem
                      onClick={() => onDelete(selectedChatId, index)}
                    >
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleReply(chatMessage, contact)}
                    >
                      Reply
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="whitespace-pre-wrap break-all">
                <div className="bg-primary/70 text-primary-foreground text-sm py-2 px-3 rounded-2xl flex-1">
                  {chatMessage}
                </div>
              </div>
            </div>
            <span className="text-xs text-end text-default-500">
              {new Date(time).toLocaleTimeString()}
            </span>
          </div>
          <div className="flex-none self-end -translate-y-5">
            <div className="h-8 w-8 rounded-full">
              <img
                src={avatar}
                alt={avatar}
                className="block w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex space-x-2 items-start group rtl:space-x-reverse mb-4">
          <div className="flex-none self-end -translate-y-5">
            <div className="h-8 w-8 rounded-full">
              <img
                src={avatar}
                alt={avatar}
                className="block w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="whitespace-pre-wrap break-all">
                  <div className="bg-default-200 text-sm py-2 px-3 rounded-2xl flex-1">
                    {chatMessage}
                  </div>
                </div>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <span className="w-7 h-7 rounded-full bg-default-200 flex items-center justify-center">
                        <Icon
                          icon="bi:three-dots-vertical"
                          className="text-lg"
                        />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-20 p-0"
                      align="center"
                      side="top"
                    >
                      <DropdownMenuItem
                        onClick={() => onDelete(selectedChatId, index)}
                      >
                        Remove
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleReply(chatMessage, contact)}
                      >
                        Reply
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <span className="text-xs text-default-500">
                {new Date(time).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
