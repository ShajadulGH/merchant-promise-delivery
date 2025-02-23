"use client";
import { ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import delivery from "@/public/images/social/delivery.png";
import SingleDelivery from "@/public/images/social/single-delivery.png";
import parcel from "@/public/images/social/parcel.png";
import Invoices from "@/public/images/social/invoice.png";
import Issue from "@/public/images/social/issue-history.png";

const linkList = [
  {
    id: 1,
    name: "Create Bulk Delivery",
    link: "www.facebook.com",
    image: delivery,
  },
  {
    id: 2,
    name: "Create Single Delivery",
    link: "www.instagram.com",
    image: SingleDelivery,
  },
  {
    id: 3,
    name: "Parcel List",
    link: "www.dribble.com",
    image: parcel,
  },
  {
    id: 4,
    name: "View Invoices",
    link: "www.linkedin.com",
    image: Invoices,
  },
  {
    id: 5,
    name: "Issue History",
    link: "www.github.com",
    image: Issue,
  },
];
const TopTen = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Quick Links </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div>
          {linkList.map((item, index) => (
            <div
              className="flex flex-wrap  gap-2 hover:bg-default-50 py-[11px] px-4"
              key={`social-item-${index}`}
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="w-8 h-8 md:h-10 md:w-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-default-600">
                    {item.name}
                  </div>
                  {/* <div className="text-xs text-default-500"> {item.link}</div> */}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full bg-primary bg-opacity-10  justify-center items-center hidden md:flex">
                  <ChevronRight className="w-2.5 h-2.5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;
