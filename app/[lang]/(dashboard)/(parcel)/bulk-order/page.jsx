import Card from "@/components/ui/card-snippet";
import VFormWithLabel from "../bulk-order/vform-with-label";

const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 ">
          <Card title="Bulk Order">
            <VFormWithLabel />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
