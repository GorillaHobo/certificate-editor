import { useEffect, useState } from "react";
import { useSelected } from "components/Canvas";
import { Form, Input } from "antd";

export const GeneralProps = () => {
  const [properties, setProperties] = useState(null);
  const object = useSelected();
  const [form] = Form.useForm();

  useEffect(() => {
    loadProperties();
  }, [object]);

  useEffect(() => {
    assignProperties();
  }, [properties]);

  const loadProperties = () => {
    if (!object) {
      setProperties(null);
      form.resetFields();
      return;
    }

    const { height, width, top, left } = object;
    setProperties({ height, width, top, left });
  };

  const assignProperties = () => {
    form.setFieldsValue(properties);
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="height" label="Height">
        <Input disabled={!properties} />
      </Form.Item>
      <Form.Item name="width" label="Width">
        <Input disabled={!properties} />
      </Form.Item>
      <Form.Item name="top" label="Top">
        <Input disabled={!properties} />
      </Form.Item>
      <Form.Item name="left" label="Left">
        <Input disabled={!properties} />
      </Form.Item>
    </Form>
  );
};
