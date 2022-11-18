import React, { FC, useEffect, useState } from "react";
import { BsMoon, BsSun, BsCodeSlash } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Theme } from "../../../dist/types/app";
import Description from "./Description";
import { isTheme } from "../../../dist/functions/main";
import { Link } from "react-router-dom";
import Div from "../../build/Div";
import Flex from "../../build/Flex";

interface NavProps {
  logoName: string;
  rounded: boolean;
  newNavBar: boolean;
  showAnimation: boolean;
}

const Nav: FC<NavProps> = ({ logoName, rounded, newNavBar, showAnimation }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  isTheme(theme);

  const linkOneStyle =
    "hover:text-purple-400 dark:hover:text-blue-300 duration-500";
  const linkTwoStyle =
    "relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-light hover:text-darkBlue dark:hover:bg-darkBlue dark:hover:text-light duration-500 cursor-pointer";
  const [homeDesc, setHomeDesc] = useState(false);
  const [settingsDesc, setSettingsDesc] = useState(false);
  const [themeDesc, setThemeDesc] = useState(false);

  return (
    <Flex
      className={`w-full items-center ${
        newNavBar ? "justify-center" : "justify-between"
      } md:justify-between`}
      direction="row"
    >
      <p className="text-lg font-medium italic text-secondary dark:text-light">
        {logoName}
      </p>
      {!newNavBar ? (
        <Div>
          <ul className="flex items-center gap-4 text-secondary dark:text-light">
            <li>
              <Link className={linkOneStyle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkOneStyle} to="settings">
                Settings
              </Link>
            </li>
            <li className="cursor-pointer">
              {theme === "light" ? (
                <BsMoon onClick={() => setTheme("dark")} />
              ) : (
                <BsSun onClick={() => setTheme("light")} />
              )}
            </li>
          </ul>
        </Div>
      ) : (
        <Flex
          className={`fixed items-center justify-center w-3/4 bg-darkBlue dark:bg-light h-10 mb-2 bottom-0 left-1/2 -translate-x-1/2 ${
            rounded && "rounded-full"
          }`}
          direction="row"
        >
          <ul className="flex items-center gap-4 text-light dark:text-dark">
            <li>
              <Link
                className={linkTwoStyle}
                onMouseEnter={() => setHomeDesc(true)}
                onMouseLeave={() => setHomeDesc(false)}
                to="/"
              >
                {<AiOutlineHome />}
                {showAnimation && (
                  <Description
                    text="Home"
                    action={homeDesc}
                    useTop={true}
                    rounded={rounded}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link
                className={linkTwoStyle}
                onMouseEnter={() => setSettingsDesc(true)}
                onMouseLeave={() => setSettingsDesc(false)}
                to="settings"
              >
                {<FiSettings />}
                {showAnimation && (
                  <Description
                    text="Settings"
                    action={settingsDesc}
                    useTop={true}
                    rounded={rounded}
                  />
                )}
              </Link>
            </li>
            <li>
              {theme === "light" ? (
                <Div
                  className={linkTwoStyle}
                  onMouseEnter={() => setThemeDesc(true)}
                  onMouseLeave={() => setThemeDesc(false)}
                >
                  <BsMoon onClick={() => setTheme("dark")} />
                  {showAnimation && (
                    <Description
                      text="Dark Mode"
                      action={themeDesc}
                      useTop={true}
                      rounded={rounded}
                    />
                  )}
                </Div>
              ) : (
                <Div
                  className={linkTwoStyle}
                  onMouseEnter={() => setThemeDesc(true)}
                  onMouseLeave={() => setThemeDesc(false)}
                >
                  <BsSun onClick={() => setTheme("light")} />
                  {showAnimation && (
                    <Description
                      text="Light Mode"
                      action={themeDesc}
                      useTop={true}
                      rounded={rounded}
                    />
                  )}
                </Div>
              )}
            </li>
          </ul>
        </Flex>
      )}
    </Flex>
  );
};

export default Nav;
