import { BaseButton } from "components/Button";
import { useCanvas } from "components/Canvas";
import { fabric } from "fabric";
import * as options from "components/options";

import { PlusCircleOutlined as CircleIcon } from "@ant-design/icons";

export const Circle = () => {
  const canvas = useCanvas();
  const crete = () => {
    var c = new fabric.Circle(options.circle);
    canvas.add(c);
    canvas.renderAll();
  };
  return (
    <>
      <BaseButton title="Create cicle" icon={<CircleIcon />} onClick={crete} />
    </>
  );
};
