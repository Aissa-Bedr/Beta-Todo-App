import React, { FC, ReactNode } from "react";
import Div from "./Div";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <Div className={`container m-auto px-2 ${className}`}>{children}</Div>;
};

export default Container;
