import React, { FC } from "react";
import { BooleanStateAction } from "../../../../dist/types/app";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import Grid from "../../../build/Grid";
import ToggleButton from "../../private/ToggleButton";

interface MainProps {
  rounded: boolean;
  setRounded: BooleanStateAction;
  newNavBar: boolean;
  setNewNavBar: BooleanStateAction;
  showAnimation: boolean;
  setShowAnimation: BooleanStateAction;
}

const Main: FC<MainProps> = ({
  rounded,
  setRounded,
  newNavBar,
  setNewNavBar,
  showAnimation,
  setShowAnimation,
}) => {
  const rowStyle = `bg-light p-2 shadow-md shadow-gray-400 dark:bg-dark dark:shadow-none dark:text-light ${
    rounded && "rounded"
  }`;
  const titleStyle = "text-sm font-bold";

  return (
    <Grid className="gap-4 grid-cols-1 lg:grid-cols-2 mt-2">
      <Div className={rowStyle}>
        <Flex className="gap-2" direction="col">
          <p className={titleStyle}>rounded UI</p>
          <ToggleButton settingsMode={rounded} setSettingsMode={setRounded} />
        </Flex>
      </Div>
      <Div className={rowStyle}>
        <Flex className="gap-2" direction="col">
          <p className={titleStyle}>use New NavBar</p>
          <ToggleButton
            settingsMode={newNavBar}
            setSettingsMode={setNewNavBar}
          />
        </Flex>
      </Div>
      <Div className={rowStyle}>
        <Flex className="gap-2" direction="col">
          <p className={titleStyle}>show Animation</p>
          <ToggleButton
            settingsMode={showAnimation}
            setSettingsMode={setShowAnimation}
          />
        </Flex>
      </Div>
    </Grid>
  );
};

export default Main;
