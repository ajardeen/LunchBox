import React from "react";
import { Button } from "@radix-ui/themes";

function RadixButton({ children, ...props }) {
  return <Button color="green" variant="solid" radius="large" {...props}>{children}</Button>;
}


export default RadixButton;
