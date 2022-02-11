import React from "react";
import { Button, Tooltip } from "antd";
import { useCanvas } from "components/Canvas";
import { fabric } from "fabric";
const BaseButton = ({ onClick, icon, title, children }) => {
  const canvasRef = useCanvas();

  const hancleClick = () => {
    onClick(canvasRef);
  };

  return (
    <div>
      <Tooltip title={title}>
        <Button onClick={hancleClick} icon={icon}>
          {children}
        </Button>
      </Tooltip>
    </div>
  );
};

export default BaseButton;
