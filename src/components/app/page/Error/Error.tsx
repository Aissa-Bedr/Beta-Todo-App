import { url } from "inspector";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import robot from "./robot.jpg";

interface ErrorProps {
  rounded: boolean;
}

const Error: FC<ErrorProps> = ({ rounded }) => {
  return (
    <Flex
      className="items-center justify-center md:gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      direction="row"
    >
      <Div>
        <img className="hidden md:block w-48 h-48 rounded" src={robot} alt="" />
      </Div>
      <Flex
        className="text-center gap-2 text-secondary dark:text-light"
        direction="col"
      >
        <h3 className="text-7xl font-bold">404</h3>
        <p className="text-lg font-medium">Error</p>
        <p className="text-sm font-bold">Page Not Found</p>
        <Link
          to="/"
          className={`bg-purple-300 text-secondary dark:bg-blue-300 dark:text-light ${
            rounded && "rounded"
          }`}
        >
          Go Home ?
        </Link>
      </Flex>
    </Flex>
  );
};

export default Error;
