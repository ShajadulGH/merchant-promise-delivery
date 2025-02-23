"use client";
import { UserSign, Web, Mail2 } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-3 border-none">
        <CardTitle className="text-lg font-medium text-default-800">
          About
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-default-600 mb-3">
          Hi I'm Jennyfer Frankin, It will be as simple as Occidental; in fact,
          it will be Occidental. To an English person, it will seem like
          simplified English, as a skeptical Cambridge friend of mine told me
          what Occidental is European languages are members of the same family.
        </div>
        <div className="text-sm text-default-600">
          You always want to make sure that your fonts work well together and
          try to limit the number of fonts you use to three or less. Experiment
          and play around with the fonts that you already have in the software
          you’re working with reputable font websites. This may be the most
          commonly encountered tip I received from the designers I spoke with.
          They highly encourage that you use different fonts in one design, but
          do not over-exaggerate and go overboard.
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
