"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import coverImage from "@/public/images/all-img/user-cover.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import User from "@/public/avatar.jpg";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
const Header = () => {
  const location = usePathname();
  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Home className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>User Profile</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6 rounded-t-2xl ">
        <CardContent className="p-0">
          <div
            className="relative h-[200px] lg:h-[296px] rounded-t-2xl w-full object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${coverImage.src})` }}
          >
            <div className="flex items-center gap-4 absolute ltr:left-10 rtl:right-10 -bottom-2 lg:-bottom-8">
              <div>
                <Image
                  src={User}
                  alt="user"
                  className="h-20 w-20 lg:w-32 lg:h-32 rounded-full"
                />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-semibold text-primary-foreground mb-1">
                  Jennyfer Franking
                </div>
                <div className="text-xs lg:text-sm font-medium text-default-100 dark:text-default-900 pb-1.5">
                  Data Analytics
                </div>
              </div>
            </div>
            <Button
              asChild
              className="absolute bottom-5 ltr:right-6 rtl:left-6 rounded px-5 hidden lg:flex"
              size="sm"
            >
              <Link href="/user-profile/settings">
                <Icon
                  className="w-4 h-4 ltr:mr-1 rtl:ml-1"
                  icon="heroicons:pencil-square"
                />
                Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Header;
