import clsx from "clsx";
import React from "react";

import { useActions } from "../../hooks/useActions";
import ICell from "../../types/cell";

import "./index.scss";

const Cell: React.FC<{ cell: ICell }> = ({ cell }) => {
  const { toggleHint } = useActions();

  const cls = clsx("cell", cell.color, cell.hint);

  const toggleHints = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleHint(cell.x, cell.y);
  };

  return <div className={cls} onClick={toggleHints}></div>;
};

export default Cell;
