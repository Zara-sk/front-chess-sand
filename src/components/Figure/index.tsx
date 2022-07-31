import clsx from "clsx";
import React from "react";
import FigureSets from "../../sets/figureSets";
import IFigure from "../../types/figure";
import "./index.scss";

const Figure: React.FC<{ figure: IFigure }> = ({ figure }) => {
  const cls = clsx("figure", `pos-${figure.x}-${figure.y}`);
  const figureSVG = FigureSets.STANDART[figure.color][figure.figure];
  return (
    <div className={cls}>
      <img src={figureSVG} />
    </div>
  );
};

export default Figure;
