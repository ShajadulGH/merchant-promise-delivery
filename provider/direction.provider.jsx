"use client";
import React from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";

const DirectionProvider = ({ children }) => {
  return (
    <div dir="ltr">
      <RadixDirectionProvider dir="ltr">{children}</RadixDirectionProvider>
    </div>
  );
};

export default DirectionProvider;
