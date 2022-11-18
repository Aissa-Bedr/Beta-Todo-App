import React, { FC } from "react";
import { BooleanStateAction } from "../../../dist/types/app";
import Div from "../../build/Div";
import Flex from "../../build/Flex";

interface SettingsProps {
  settingsMode: boolean;
  setSettingsMode: BooleanStateAction;
}

const ToggleButton: FC<SettingsProps> = ({ settingsMode, setSettingsMode }) => {
  return (
    <Flex
      onClick={() => setSettingsMode((prevState) => !prevState)}
      className={`relative items-center w-20 h-7 rounded-full ${
        settingsMode
          ? "bg-purple-500 dark:bg-blue-500"
          : "bg-purple-300 dark:bg-blue-300"
      } cursor-pointer duration-500 transition-all`}
      direction="row"
    >
      <Div
        className={`absolute ${
          settingsMode ? "right-1" : "left-1"
        } w-5 h-5 rounded-full bg-light`}
      ></Div>
    </Flex>
  );
};

export default ToggleButton;
