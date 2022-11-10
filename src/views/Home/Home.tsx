import classNames from "classnames";
import React, { useState } from "react";
import { ReactComponent as Avatar } from "./avatar.svg";
import { LanguageIndicator } from "../../components/LanguageIndicator";

import classes from "./Home.module.css";

export function Home() {
  const [_atTop, setAtTop] = useState(true);

  console.log("#######", Avatar);

  return (
    <div
      className={classes.wrapper}
      onScroll={(event) => {
        setAtTop(event.currentTarget.scrollTop <= 0);
      }}
    >
      <div className={classNames(classes.page, classes.avatarPage)}>
        <Avatar />
      </div>
      {/* <LanguageIndicator className={classes.languageIndicator} /> */}
    </div>
  );
}
