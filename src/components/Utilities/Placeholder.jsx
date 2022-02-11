import { useState } from "react";
import { BaseButton } from "components/Button";
import { useCanvas } from "components/Canvas";
import { fabric } from "fabric";
import { Modal, Select } from "antd";
import * as options from "components/options";

import { FontSizeOutlined as Icon } from "@ant-design/icons";

export const Placeholder = ({}) => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(null);

  const canvas = useCanvas();

  const createPlaceholder = () => {
    var text = new fabric.Text(`\$\{${type}\}`, options.placeholder);

    text.toObject = (function (toObject) {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          placeholder: this.placeholder,
        });
      };
    })(text.toObject);

    // c.placeholder = type;
    canvas.add(text);
    text.placeholder = type;
    canvas.renderAll();
  };

  const onOk = (e) => {
    if (!type) return;
    createPlaceholder();
    setVisible(false);
  };

  const onSelectType = (value) => {
    setType(value);
  };

  return (
    <>
      <BaseButton
        title="Create placeholder"
        icon={<Icon />}
        onClick={() => setVisible(true)}
      />
      <Modal
        title="Add Placeholder Text"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onOk}
      >
        <Select style={{ width: "100%" }} onChange={onSelectType} value={type}>
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="organization">Organization</Select.Option>
        </Select>
      </Modal>
    </>
  );
};
