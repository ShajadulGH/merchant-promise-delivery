import Card from "@/components/ui/card-snippet";

import VFormWithLabel from "./vform-with-label";
import Charges from "./charges";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const FormLayout = () => {
  return (
    <div className="space-y-5 mb-5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card
            title={
              <div className="flex items-center justify-between">
                <span>Add Parcel</span>
                <Link href="/bulk-order">
                  <Button>Bulk Order</Button>
                </Link>
              </div>
            }
          >
            <VFormWithLabel />
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Charges />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
