"use client";
import { ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import delivery from "@/public/images/social/delivery.png";
import SingleDelivery from "@/public/images/social/single-delivery.png";
import parcel from "@/public/images/social/parcel.png";
import Invoices from "@/public/images/social/invoice.png";
import Issue from "@/public/images/social/issue-history.png";
import Store from "@/public/images/social/store.png";
import Link from "next/link";

const linkList = [
  {
    id: 1,
    name: "Create Bulk Delivery",
    link: "/bulk-order",
    image: delivery,
  },
  {
    id: 2,
    name: "Create Single Delivery",
    link: "/add-parcel",
    image: SingleDelivery,
  },
  {
    id: 3,
    name: "Parcel List",
    link: "/store",
    image: parcel,
  },
  {
    id: 4,
    name: "View Invoices",
    link: "/invoice-list",
    image: Invoices,
  },
  {
    id: 5,
    name: "Create New Store",
    link: "/new-store",
    image: Store,
  },
  {
    id: 6,
    name: "Issue History",
    link: "/issue-history",
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
            <Link href={item.link}>
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
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-primary bg-opacity-10  justify-center items-center hidden md:flex">
                    <ChevronRight className="w-2.5 h-2.5 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;
