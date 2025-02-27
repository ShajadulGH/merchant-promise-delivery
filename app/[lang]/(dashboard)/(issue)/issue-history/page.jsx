// "use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { InputGroup, InputGroupText } from "@/components/ui/input-group";
// import { Icon } from "@iconify/react";
// import { Input } from "@/components/ui/input";
// import IssueList from "./Issue-list";
// import ChatPage from "./chat";
// import EmptyMessage from "./empty-message"; // Import the EmptyMessage component
// import { useState } from "react";

// const IssueHistory = () => {
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleIssueSelect = (issue) => {
//     setSelectedIssue(issue);
//   };
//   return (
//     <div className="mb-5">
//       <Breadcrumbs className="mb-5">
//         <BreadcrumbItem>Issue</BreadcrumbItem>
//         <BreadcrumbItem>Issue History</BreadcrumbItem>
//       </Breadcrumbs>

//       <Card className="mb-2">
//         <CardHeader className="flex-row items-center justify-between border-none pb-0">
//           <CardTitle>Issue History</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-4 gap-4">
//             <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
//               <Button className="p-5">
//                 <Plus className="w-4 h-4 mr-1" />
//                 Create Issue
//               </Button>
//             </div>
//             <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
//               <InputGroup merged p-5>
//                 <InputGroupText>
//                   <Icon icon="heroicons:magnifying-glass" />
//                 </InputGroupText>
//                 <Input
//                   className="p-5 placeholder:text-base"
//                   type="text"
//                   placeholder="Search.."
//                 />
//               </InputGroup>
//             </div>
//             <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
//               <Select id="store">
//                 <SelectTrigger className="p-5 placeholder:text-base">
//                   <SelectValue placeholder="Issue Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="alberta">Alberta</SelectItem>
//                   <SelectItem value="british">British Columbia</SelectItem>
//                   <SelectItem value="manitoba">Manitoba</SelectItem>
//                   <SelectItem value="brunswick">New Brunswick</SelectItem>
//                   <SelectItem value="ontario">Ontario</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
//               <Select id="store">
//                 <SelectTrigger className="p-5 placeholder:text-base">
//                   <SelectValue placeholder="Issue Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="alberta">Alberta</SelectItem>
//                   <SelectItem value="british">British Columbia</SelectItem>
//                   <SelectItem value="manitoba">Manitoba</SelectItem>
//                   <SelectItem value="brunswick">New Brunswick</SelectItem>
//                   <SelectItem value="ontario">Ontario</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12 lg:col-span-4 gap-2">
//           <IssueList
//             onIssueSelect={handleIssueSelect}
//             selectedIssue={selectedIssue}
//           />
//         </div>
//         <div className="col-span-12 lg:col-span-8 gap-2">
//           {selectedIssue ? (
//             <ChatPage selectedIssue={selectedIssue} />
//           ) : (
//             <EmptyMessage />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IssueHistory;
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import IssueList from "./Issue-list";
import ChatPage from "./chat";
import EmptyMessage from "./empty-message"; // Import the EmptyMessage component
import { useState } from "react";
import CreateIssue from "./create-issue";
const IssueHistory = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [open, setOpen] = useState(null);

  const handleIssueSelect = (issue) => {
    setSelectedIssue(issue);
  };
  const handleSheetOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="mb-5">
      <Breadcrumbs className="mb-5">
        <BreadcrumbItem>Issue</BreadcrumbItem>
        <BreadcrumbItem>Issue History</BreadcrumbItem>
      </Breadcrumbs>

      <Card className="mb-2">
        <CardHeader className="flex-row items-center justify-between border-none pb-0">
          <CardTitle>Issue History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
              <Button onClick={handleSheetOpen} className="p-5">
                <Plus className="w-4 h-4 mr-1" />
                Create Issue
              </Button>
            </div>
            <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
              <InputGroup merged p-5>
                <InputGroupText>
                  <Icon icon="heroicons:magnifying-glass" />
                </InputGroupText>
                <Input
                  className="p-5 placeholder:text-base"
                  type="text"
                  placeholder="Search.."
                />
              </InputGroup>
            </div>
            <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
              <Select id="store">
                <SelectTrigger className="p-5 placeholder:text-base">
                  <SelectValue placeholder="Issue Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="british">British Columbia</SelectItem>
                  <SelectItem value="manitoba">Manitoba</SelectItem>
                  <SelectItem value="brunswick">New Brunswick</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4 lg:col-span-1 flex flex-col gap-2">
              <Select id="store">
                <SelectTrigger className="p-5 placeholder:text-base">
                  <SelectValue placeholder="Issue Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="british">British Columbia</SelectItem>
                  <SelectItem value="manitoba">Manitoba</SelectItem>
                  <SelectItem value="brunswick">New Brunswick</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 gap-2">
          <IssueList
            onIssueSelect={handleIssueSelect}
            selectedIssue={selectedIssue}
          />
        </div>
        <div className="col-span-12 lg:col-span-8 gap-2">
          {selectedIssue ? (
            <ChatPage
              selectedIssue={selectedIssue}
              messages={selectedIssue.messages}
              contacts={selectedIssue.contacts}
            />
          ) : (
            <EmptyMessage />
          )}
        </div>
      </div>
      <CreateIssue open={open} onClose={handleSheetOpen} />
    </div>
  );
};

export default IssueHistory;
