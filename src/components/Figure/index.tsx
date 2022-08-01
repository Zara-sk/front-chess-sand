import clsx from "clsx";
import React from "react";

import { useActions } from "../../hooks/useActions";
import FigureSets from "../../sets/figureSets";
import IFigure from "../../types/figure";

import "./index.scss";

const Figure: React.FC<{ figure: IFigure }> = ({ figure }) => {
  const { toggleHint } = useActions();

  const cls = clsx("figure", `pos-${figure.x}-${figure.y}`);
  const figureSVG = FigureSets.STANDART[figure.color][figure.figure];

  const toggleHints = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    toggleHint(figure.x, figure.y);
  };

  return (
    <div className={cls} onClick={toggleHints}>
      <img src={figureSVG} />
    </div>
  );
};

export default Figure;
