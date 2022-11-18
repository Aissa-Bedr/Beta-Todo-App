import React, { FC, ReactNode } from "react";

export interface DivProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Div: FC<DivProps> = ({
  id,
  className,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onClick={onClick}
      id={id}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Div;
