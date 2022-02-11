import { useRef } from "react";
import { BaseButton } from "components/Button";
import { fabric } from "fabric";
import * as options from "components/options";

export const Arst = ({ placeholderData = {}, format = "jpeg" }) => {
  const inputRef = useRef(null);

  const onClick = (e) => {
    const canvas = new fabric.Canvas("whatever", options.canvas);

    let file;

    if (!e.target.files && !e.target.files[0]) return;

    file = e.target.files[0];
    new Response(file)
      .json()
      .then((json) => {
        canvas.clear();
        canvas.loadFromJSON(json, () => {
          canvas.renderAll();
          initialize(canvas);
        });
      })
      .catch((err) => console.log(err));
  };

  const initialize = (canvas) => {
    const objects = canvas.getObjects();
    console.log({ objects });
    const objectsWithPlaceholder = objects.filter(
      (object) => object.placeholder
    );
    const placeholderKeys = Object.keys(placeholderData);

    if (!objectsWithPlaceholder.length > 0) return;

    objectsWithPlaceholder.forEach((object) => {
      const testing = object.placeholder;
      object.text = placeholderData[testing];
    });

    console.log({ objectsWithPlaceholder });

    canvas.renderAll();

    download(canvas.toDataURL({ format }));
  };

  const download = (url) => {
    console.log("aioresntoairesntoarisetnantntntnsetnsetnsetnsetnstens");
    const linkSource = url;
    const downloadLink = document.createElement("a");
    const fileName = `image.${format}`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <>
      <input
        type="file"
        onChange={onClick}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <BaseButton onClick={() => inputRef.current.click()}>
        Load from JSON file
      </BaseButton>
    </>
  );
};
