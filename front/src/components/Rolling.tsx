import Rolling from "tui-rolling";
import React, { ReactNode, useState, useEffect, ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

interface Props {
  children: ReactElement[];
}

function getRandomID(prefix = "rolling") {
  return `${prefix}${parseInt(String(Math.random() * 1000)).toString(16)}`;
}

export default ({ children }: Props) => {
  const reactChildren = React.Children.toArray(children);
  const htmlChildren = reactChildren.map(rc => {
    return ReactDOMServer.renderToStaticMarkup(rc);
  });
  const [id, setID] = useState(getRandomID());
  useEffect(() => {
    new Rolling(
      {
        element: document.getElementById(id),
        usageStatistics: false,
        direction: "horizontal",
        isAuto: true,
        duration: 400,
        motion: "easeInOut",
        isCircle: true,
        initNum: 3
        // isVariable: false,
      },
      htmlChildren
    );
  }, [id]);

  return <div id={id}>{children}</div>;
};
