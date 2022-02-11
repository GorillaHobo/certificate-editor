import { useCanvas } from "components/Canvas";
import { BaseButton } from "components/Button";
import { ClearOutlined as Icon } from "@ant-design/icons";

export const ClearAll = () => {
  const canvas = useCanvas();

  const onClick = () => {
    // canvas.getActiveObjects().forEach((obj) => canvas.remove(obj));
    canvas.clear();
    canvas.set("backgroundColor", "white");
    canvas.renderAll();
  };

  return <BaseButton onClick={onClick} icon={<Icon />} title="Clear All" />;
};
