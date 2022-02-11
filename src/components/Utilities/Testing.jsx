import { useCanvas } from "components/Canvas";
import { BaseButton } from "components/Button";
import { DeleteOutlined as Icon } from "@ant-design/icons";

export const Testing = () => {
  const canvas = useCanvas();

  const onClick = () => {
    const objects = canvas.getObjects();
    console.log({ objects });
  };

  return <BaseButton onClick={onClick}>Testing</BaseButton>;
};
