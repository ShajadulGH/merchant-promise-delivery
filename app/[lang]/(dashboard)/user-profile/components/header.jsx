"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import User from "@/public/avatar.jpg";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const Header = () => {
  const location = usePathname();
  const [profileImage, setProfileImage] = useState(User); // State to store the profile image

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the profile image with the new one
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Home className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>User Profile</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6 rounded-t-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={profileImage}
                alt="user"
                className="h-20 w-20 lg:w-32 lg:h-32 rounded-full"
                width={128}
                height={128}
              />
              {/* Edit icon for profile image */}
              <label
                htmlFor="profile-image-upload"
                className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-sm cursor-pointer"
              >
                <Icon
                  icon="heroicons:pencil-square"
                  className="w-4 h-4 text-red-600"
                />
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-semibold text-red-500 mb-1">
                Jennyfer Franking
              </div>
              <div className="text-xs lg:text-sm font-medium text-black dark:text-white pb-1.5">
                Data Analytics
              </div>
            </div>
            <Button
              asChild
              className="ml-auto rounded px-3 lg:px-5 flex text-sm lg:text-base" // Adjusted padding and font size
              size="sm"
            >
              <Link href="/user-profile/edit">
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
