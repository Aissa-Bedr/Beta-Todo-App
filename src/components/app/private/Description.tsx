import React, { FC, useState } from "react";
import Div from "../../build/Div";

interface DescriptionProps {
  text: string;
  action: boolean;
  useTop: boolean;
  rounded: boolean;
}

const Description: FC<DescriptionProps> = ({
  text,
  action,
  useTop,
  rounded,
}) => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  return (
    <Div>
      {size > 547 && (
        <Div>
          {action && (
            <Div
              className={`flex items-center justify-center w-24 h-6 absolute left-1/2 -translate-x-1/2 ${
                useTop ? "-top-8" : "-bottom-8"
              } ${
                rounded && "rounded"
              } bg-darkBlue text-light shadow-none dark:bg-light dark:text-darkBlue dark:shadow-sm dark:shadow-grey font-bold text-sm`}
            >
              {text}
            </Div>
          )}
        </Div>
      )}
    </Div>
  );
};

export default Description;
