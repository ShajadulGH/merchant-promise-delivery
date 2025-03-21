"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
// Dummy data for issues
const dummyIssue = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "Hey team, please review the latest project update.",
    date: "2024-02-10T09:30:00Z",
    messages: [
      {
        senderId: 1,
        message: "Hey team, please review the latest project update.",
        time: "2024-02-10T09:30:00Z",
      },
      {
        senderId: 2,
        message: "Got it, I’ll check and provide feedback soon!",
        time: "2024-02-10T09:45:00Z",
      },
    ],
    contacts: [
      {
        id: 1,
        fullName: "Alice Johnson",
        avatar: "/avatar.jpg",
      },
      {
        id: 2,
        fullName: "Michael Lee",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "David Smith",
    text: "Reminder: Our client meeting is scheduled for 3 PM today.",
    date: "2024-02-11T08:15:00Z",
    messages: [
      {
        senderId: 3,
        message: "Reminder: Our client meeting is scheduled for 3 PM today.",
        time: "2024-02-11T08:15:00Z",
      },
      {
        senderId: 4,
        message: "Thanks for the heads-up! I'll be there.",
        time: "2024-02-11T08:20:00Z",
      },
    ],
    contacts: [
      {
        id: 3,
        fullName: "David Smith",
        avatar: "/avatar.jpg",
      },
      {
        id: 4,
        fullName: "Sophia Martinez",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Emily Brown",
    text: "Can someone confirm if the new feature is deployed?",
    date: "2024-02-12T14:00:00Z",
    messages: [
      {
        senderId: 5,
        message: "Can someone confirm if the new feature is deployed?",
        time: "2024-02-12T14:00:00Z",
      },
      {
        senderId: 6,
        message: "Yes, it's live now. Let me know if you spot any issues!",
        time: "2024-02-12T14:10:00Z",
      },
    ],
    contacts: [
      {
        id: 5,
        fullName: "Emily Brown",
        avatar: "/avatar.jpg",
      },
      {
        id: 6,
        fullName: "Daniel Carter",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Robert Wilson",
    text: "I’ve attached the latest sales report. Feedback is welcome!",
    date: "2024-02-13T10:45:00Z",
    messages: [
      {
        senderId: 7,
        message: "I’ve attached the latest sales report. Feedback is welcome!",
        time: "2024-02-13T10:45:00Z",
      },
      {
        senderId: 8,
        message: "Thanks, I'll review and share my thoughts later today.",
        time: "2024-02-13T11:00:00Z",
      },
    ],
    contacts: [
      {
        id: 7,
        fullName: "Robert Wilson",
        avatar: "/avatar.jpg",
      },
      {
        id: 8,
        fullName: "Olivia Taylor",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Jessica Adams",
    text: "Hey, are we still on for the team outing this weekend?",
    date: "2024-02-14T18:30:00Z",
    messages: [
      {
        senderId: 9,
        message: "Hey, are we still on for the team outing this weekend?",
        time: "2024-02-14T18:30:00Z",
      },
      {
        senderId: 10,
        message: "Yes! Looking forward to it. See you all there!",
        time: "2024-02-14T18:40:00Z",
      },
    ],
    contacts: [
      {
        id: 9,
        fullName: "Jessica Adams",
        avatar: "/avatar.jpg",
      },
      {
        id: 10,
        fullName: "Ethan Harris",
        avatar: "/avatar.jpg",
      },
    ],
  },
];

// IssueList Component
const IssueList = ({ onIssueSelect, selectedIssue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="h-screen">
      <ScrollArea className="h-full">
        {dummyIssue.map((issue, index) => (
          <div
            key={`issue-key-${index}`}
            className={cn(
              "flex flex-col py-5 px-6 border-b border-default-100 hover:bg-red-200 cursor-pointer group relative ",
              {
                "bg-primary/10": selectedIssue?.id === issue.id,
              }
            )}
            onClick={() => onIssueSelect(issue)}
          >
            <div className="text-lg text-black font-semibold mr-4 min-w-max">
              {issue.name}
            </div>
            <div className="flex-1  flex-shrink overflow-hidden min-w-[100px] mr-7">
              <p className="truncate text-md text-black ">{issue.text}</p>
            </div>
            <div className="text-md text-black  whitespace-nowrap">
              {issue.date}
            </div>
          </div>
        ))}
      </ScrollArea>
    </Card>
  );
};

export default IssueList;
