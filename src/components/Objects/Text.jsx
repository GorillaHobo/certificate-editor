import { BaseButton } from "components/Button";
import { useCanvas } from "components/Canvas";
import { fabric } from "fabric";
import * as options from "components/options";

import { FontSizeOutlined as Icon } from "@ant-design/icons";

export const Text = () => {
  const canvas = useCanvas();
  const crete = () => {
    var c = new fabric.IText("Lorem Ipsum", options.text);
    canvas.add(c);
    canvas.renderAll();
  };
  return <BaseButton title="Create cicle" icon={<Icon />} onClick={crete} />;
};
