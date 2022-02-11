import { useCanvas, useSelected } from "components/Canvas";
import { BaseButton } from "components/Button";
import { DeleteOutlined as Icon } from "@ant-design/icons";

export const Delete = () => {
  const canvas = useCanvas();

  const onClick = () => {
    canvas.getActiveObjects().forEach((obj) => canvas.remove(obj));
    canvas.renderAll();
  };

  return <BaseButton onClick={onClick} icon={<Icon />} title="Clear All" />;
};
