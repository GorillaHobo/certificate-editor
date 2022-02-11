import { BaseButton } from "components/Button";
import { useCanvas } from "components/Canvas";
import { fabric } from "fabric";
import * as options from "components/options";

import { PlusSquareOutlined as SquareIcon } from "@ant-design/icons";

export const Rectangle = () => {
  const canvas = useCanvas();
  const create = () => {
    var c = new fabric.Rect(options.rectangle);
    canvas.add(c);
    canvas.renderAll();
  };
  return (
    <BaseButton
      title="Create rectangle"
      icon={<SquareIcon />}
      onClick={create}
    />
  );
};
