import { useCanvas } from "components";
import { BaseButton } from "components/Button";

export const Download = ({ placeholderData = {}, format = "jpeg" }) => {
  const canvas = useCanvas();

  const onClick = () => {
    const objects = canvas.getObjects();
    const objectsWithPlaceholder = objects.filter(
      (object) => object.placeholder
    );
    const placeholderKeys = Object.keys(placeholderData);
    console.log({ placeholderKeys });

    if (!objectsWithPlaceholder.length > 0) return;

    objectsWithPlaceholder.forEach((object) => {
      const testing = object.placeholder;
      object.text = placeholderData[testing];
    });

    canvas.renderAll();

    download(canvas.toDataURL({ format }));
  };

  const download = (url) => {
    const linkSource = url;
    const downloadLink = document.createElement("a");
    const fileName = `image.${format}`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  // const onSave = () => {
  //   download(canvas.toDataURL({ format: format }));
  // };

  // const download = (url) => {
  //   const linkSource = url;
  //   const downloadLink = document.createElement("a");
  //   const fileName = `image.${format}`;

  //   downloadLink.href = linkSource;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // };

  return (
    <BaseButton title="Download" onClick={onClick}>
      Download
    </BaseButton>
  );
};
