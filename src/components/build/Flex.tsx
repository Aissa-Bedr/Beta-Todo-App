import React, { FC } from "react";
import Div, { DivProps } from "./Div";

type FlexDirection = "col" | "col-reverse" | "row" | "row-reverse";

interface FlexProps extends DivProps {
  direction?: FlexDirection;
}

const Flex: FC<FlexProps> = ({
  id,
  className,
  children,
  direction,
  onClick,
}) => {
  return (
    <Div
      onClick={onClick}
      id={id}
      className={`flex ${direction && `flex-${direction}`} ${className}`}
    >
      {children}
    </Div>
  );
};

export default Flex;
