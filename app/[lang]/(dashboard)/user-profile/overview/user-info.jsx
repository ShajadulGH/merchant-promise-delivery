import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Phone,
  Location,
  Calender,
  CalenderCheck,
} from "@/components/svg";
const UserInfo = () => {
  const userInfo = [
    {
      icon: User,
      label: "Full Name",
      value: "Jennyfer Frankin",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01861171441",
    },
    {
      icon: Location,
      label: "Address",
      value: "Kallayanpur",
    },
    {
      icon: CalenderCheck,
      label: "Merchant ID",
      value: "4986558495",
    },
    {
      icon: Calender,
      label: "Email",
      value: "merchant@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01861171441",
    },
    {
      icon: Location,
      label: "Address",
      value: "Kallayanpur",
    },
  ];

  return (
    <Card>
      <CardHeader className="border-none mb-0">
        <CardTitle className="text-lg font-medium text-default-800">
          Information
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ul className="mt-6 space-y-4">
          {userInfo.map((item, index) => (
            <li key={`user-info-${index}`} className="flex items-center">
              <div className="flex-none  2xl:w-56 flex items-center gap-1.5">
                <span>{<item.icon className="w-4 h-4 text-primary" />}</span>
                <span className="text-sm font-medium text-default-800">
                  {item.label}:
                </span>
              </div>
              <div className="flex-1 text-sm text-default-700">
                {item.value}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
