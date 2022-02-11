import { useEffect, useState } from "react";
import { useSelected, useCanvas } from "components/Canvas";
import { Form, InputNumber, Select } from "antd";
import * as options from "../options";

const { Option } = Select;

export const TextProps = () => {
  const [properties, setProperties] = useState(null);
  const object = useSelected();
  const canvas = useCanvas();
  const [form] = Form.useForm();

  useEffect(() => {
    loadProperties();
  }, [object]);

  useEffect(() => {
    assignProperties();
  }, [properties]);

  const loadProperties = () => {
    if (!object || (object.type !== "i-text" && object.type !== "text")) {
      setProperties(null);
      form.resetFields();
      return;
    }

    const { fontFamily, fontSize } = object;
    setProperties({ fontFamily, fontSize });
  };

  const assignProperties = () => {
    form.setFieldsValue(properties);
  };

  const onChange = (value, property) => {
    object.set(property, value);
    canvas.renderAll();
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="fontFamily" label="Font Family">
        <Select
          disabled={!properties}
          onChange={(value) => onChange(value, "fontFamily")}
        >
          {options.fonts.map((font, index) => (
            <Option key={index} value={font}>
              {font}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="fontSize" label="Font Size">
        <InputNumber
          onChange={(value) => onChange(value, "fontSize")}
          disabled={!properties}
        />
      </Form.Item>
    </Form>
  );
};
