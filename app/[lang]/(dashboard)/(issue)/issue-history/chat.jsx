"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageFooter from "./MessageFooter";

const ChatPage = ({ selectedIssue, messages, contacts }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [replay, setReply] = useState(false);
  const [replayData, setReplyData] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const chatHeightRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSendMessage = (message) => {
    if (!selectedIssue || !message) return;

    const newMessage = {
      senderId: selectedIssue.id, // Assuming the sender is the issue creator
      message: message,
      time: new Date().toISOString(),
    };

    // Add the new message to the messages array
    messages.push(newMessage);

    // Scroll to the bottom of the chat
    if (chatHeightRef.current) {
      chatHeightRef.current.scrollTo({
        top: chatHeightRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleReply = (data, contact) => {
    const newObj = {
      message: data,
      contact,
    };
    setReply(true);
    setReplyData(newObj);
  };

  const onDelete = (selectedChatId, index) => {
    // Remove the message from the messages array
    messages.splice(index, 1);
  };

  return (
    <div className="flex gap-5 app-height relative">
      <div className="flex-1">
        <div className="flex space-x-5 h-full">
          <div className="flex-1">
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-none mb-0">
                <MessageHeader
                  showInfo={showInfo}
                  handleShowInfo={() => setShowInfo(!showInfo)}
                  profile={selectedIssue}
                  isMobile={isMobile}
                />
              </CardHeader>
              <CardContent className="!p-0 relative flex-1 overflow-y-auto">
                <div
                  className="h-full py-4 overflow-y-auto no-scrollbar"
                  ref={chatHeightRef}
                >
                  {messages.map((message, i) => (
                    <Messages
                      key={`message-list-${i}`}
                      message={message}
                      contact={contacts.find(
                        (contact) => contact.id === message.senderId
                      )}
                      profile={selectedIssue}
                      onDelete={onDelete}
                      index={i}
                      selectedChatId={selectedIssue.id}
                      handleReply={handleReply}
                    />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-none flex-col px-0 py-4 border-t border-border">
                <MessageFooter
                  handleSendMessage={handleSendMessage}
                  replay={replay}
                  setReply={setReply}
                  replayData={replayData}
                />
              </CardFooter>
            </Card>
          </div>

          {!isMobile && showInfo && (
            <div className="w-80">
              <Card>
                <CardHeader>Issue Details</CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Name:</strong> {selectedIssue?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Description:</strong> {selectedIssue?.text}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date:</strong>{" "}
                      {new Date(selectedIssue?.date).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {isMobile && showInfo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white w-full h-full p-4 overflow-y-auto">
                <Card>
                  <CardHeader>
                    <button
                      onClick={() => setShowInfo(false)}
                      className="text-sm font-semibold text-red-600"
                    >
                      Close
                    </button>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Issue Details</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Name:</strong> {selectedIssue?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Description:</strong> {selectedIssue?.text}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Date:</strong>{" "}
                        {new Date(selectedIssue?.date).toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
