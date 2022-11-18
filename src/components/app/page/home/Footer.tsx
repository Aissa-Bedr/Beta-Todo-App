import React, { FC } from "react";
import Div from "../../../build/Div";
import Grid from "../../../build/Grid";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

interface Info {
  creator: string;
  year: number;
}

interface FooterProps {
  rounded: boolean;
}

const Footer: FC<FooterProps> = ({ rounded }) => {
  const info: Info = {
    creator: "Aissa Bedr",
    year: new Date().getFullYear(),
  };

  const { creator, year } = info;

  return (
    <Div
      className={`w-full bg-purple-300 text-secondary dark:bg-blue-300 dark:text-light h-full mt-2 p-2 ${
        rounded && "rounded"
      }`}
    >
      <Grid className="grid-cols-2 text-center place-items-center">
        <Div>
          <p className="font-medium">Follow Me:</p>
          <Div>
            <a
              href="https://www.facebook.com/profile.php?id=100085140111724"
              target={"_blank"}
              className="flex items-center gap-2 text-sm font-bold"
            >
              <AiOutlineFacebook />
              <p>Facebook</p>
            </a>
          </Div>
          <Div>
            <a
              href="https://www.instagram.com/aissa_bedr/"
              target={"_blank"}
              className="flex items-center gap-2 text-sm font-bold"
            >
              <AiOutlineInstagram />
              <p>Instagram</p>
            </a>
          </Div>
          <Div>
            <a
              href="https://www.youtube.com/channel/UCSBElgVHLvm1iNFS0VRcBAw"
              target={"_blank"}
              className="flex items-center gap-2 text-sm font-bold"
            >
              <AiOutlineYoutube />
              <p>Youtube</p>
            </a>
          </Div>
        </Div>
        <Div>
          <p className="font-medium">Developer:</p>
          <p className="font-bold text-sm">
            Made With ❤️ By {creator} Copyright © {year} all rights reserved
          </p>
        </Div>
      </Grid>
    </Div>
  );
};

export default Footer;
