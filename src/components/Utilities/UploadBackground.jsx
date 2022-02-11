import React, { useRef } from "react";
import { fabric } from "fabric";
import { useCanvas } from "components/Canvas";
import { BaseButton } from "components/Button";

export const UploadBackground = () => {
  const inputRef = useRef(null);
  const canvas = useCanvas();

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        resolve(ev.target.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const onChange = async (e) => {
    let file;

    if (!e.target.files && !e.target.files[0]) return;

    file = e.target.files[0];
    const image = await convertImageToBase64(file);
    fabric.Image.fromURL(image, (img) => {
      img.scaleX = canvas.width / img.width;
      img.scaleY = canvas.height / img.height;
      canvas.setBackgroundImage(img);
      canvas.renderAll();
    });
  };

  return (
    <>
      <input
        type="file"
        onChange={onChange}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <BaseButton onClick={() => inputRef.current.click()}>
        Background Image
      </BaseButton>
    </>
  );
};
