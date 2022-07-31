import clsx from "clsx";
import React from "react";
import { ICell } from "../../types/cell";
import "./index.scss";

const Cell: React.FC<{ cell: ICell }> = ({ cell }) => {
  const cls = clsx("cell", cell.color);

  return <div className={cls}></div>;
};

export default Cell;
