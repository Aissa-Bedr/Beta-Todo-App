import React, { FC } from "react";
import { BooleanStateAction } from "../../../../dist/types/app";
import Container from "../../../build/Container";
import Div from "../../../build/Div";
import Nav from "../../private/Nav";
import Main from "./Main";

interface SettingsProps {
  rounded: boolean;
  setRounded: BooleanStateAction;
  newNavBar: boolean;
  setNewNavBar: BooleanStateAction;
  showAnimation: boolean;
  setShowAnimation: BooleanStateAction;
}

const Settings: FC<SettingsProps> = ({
  rounded,
  setRounded,
  newNavBar,
  setNewNavBar,
  showAnimation,
  setShowAnimation,
}) => {
  return (
    <Container>
      <Nav
        logoName="Settings"
        rounded={rounded}
        newNavBar={newNavBar}
        showAnimation={showAnimation}
      />
      <Main
        rounded={rounded}
        setRounded={setRounded}
        newNavBar={newNavBar}
        setNewNavBar={setNewNavBar}
        showAnimation={showAnimation}
        setShowAnimation={setShowAnimation}
      />
    </Container>
  );
};

export default Settings;
