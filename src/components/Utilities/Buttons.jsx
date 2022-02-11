import { BaseButton } from "components/Button";
import { useCanvas } from "components/Canvas";
import { MinusCircleOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { fabric } from "fabric";
import * as options from "components/options";

// export const Circle = () => {
//   const canvas = useCanvas();
//   const crete = () => {
//     var c = new fabric.Circle(options.circle);
//     canvas.add(c);
//     canvas.renderAll();
//   };
//   return (
//     <BaseButton
//       title="Create cicle"
//       icon={<MinusCircleOutlined />}
//       onClick={crete}
//     />
//   );
// };

// export const Rectangle = () => {
//   const canvas = useCanvas();
//   const create = () => {
//     var c = new fabric.Rect(options.rectangle);
//     canvas.add(c);
//     canvas.renderAll();
//   };
//   return (
//     <BaseButton
//       title="Create rectangle"
//       icon={<PlusSquareOutlined />}
//       onClick={create}
//     />
//   );
// };

export const Text = () => {
  const canvas = useCanvas();
  const create = () => {
    var c = new fabric.IText("Lorem Ipsum", options.text);
    canvas.add(c);
    canvas.renderAll();
  };
  return (
    <BaseButton title="Text" icon={<PlusSquareOutlined />} onClick={create} />
  );
};

export const Save = () => {
  const canvas = useCanvas();
  const onSave = () => {
    // const objects = canvas.getObjects();
    // const filtered = objects.filter((object) => object.id);
    // filtered.forEach((item) => (item.text = item.value));
    // canvas.renderAll();
    console.log(canvas.toJSON());
    console.log(canvas.toObject());
    // download(canvas.toDataURL({ format: "jpeg" }));
    // filtered.forEach((item) => (item.text = item.id));
    // canvas.renderAll();
  };
  const download = (url) => {
    const linkSource = url;
    const downloadLink = document.createElement("a");
    const fileName = "image.jpeg";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <BaseButton title="save" icon={<PlusSquareOutlined />} onClick={onSave} />
  );
};

export const Placeholder = ({ placeholder, value }) => {
  const canvas = useCanvas();

  const onClick = () => {
    var rect = new fabric.Text("asrt", options.text);

    rect.toObject = (function (toObject) {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          placeholder: this.placeholder,
          value: this.value,
        });
      };
    })(rect.toObject);

    canvas.add(rect);

    rect.value = value;
    rect.placeholder = placeholder;
  };

  return (
    <BaseButton
      title="Create Placeholder"
      icon={<PlusSquareOutlined />}
      onClick={onClick}
    />
  );
};
