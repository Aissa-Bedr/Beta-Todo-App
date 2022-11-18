import React, { FC } from "react";
import Container from "../../../build/Container";
import Nav from "../../private/Nav";
import Footer from "./Footer";
import Main from "./Main";

interface HomeProps {
  rounded: boolean;
  newNavBar: boolean;
  showAnimation: boolean;
}

const Home: FC<HomeProps> = ({ rounded, newNavBar, showAnimation }) => {
  return (
    <Container>
      <Nav
        logoName="Todo App"
        rounded={rounded}
        newNavBar={newNavBar}
        showAnimation={showAnimation}
      />
      <Main rounded={rounded} showAnimation={showAnimation} />
      <Footer rounded={rounded} />
    </Container>
  );
};

export default Home;
