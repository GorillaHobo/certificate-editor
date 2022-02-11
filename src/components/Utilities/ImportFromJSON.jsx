import { useRef } from "react";
import { useCanvas } from "components";
import { Button } from "antd";
import { BaseButton } from "components/Button";

export const ImportFromJSON = () => {
  const canvas = useCanvas();
  const inputRef = useRef(null);

  const onLoad = (e) => {
    let file;

    if (!e.target.files && !e.target.files[0]) return;

    file = e.target.files[0];
    new Response(file)
      .json()
      .then((json) => {
        canvas.clear();
        canvas.loadFromJSON(json, () => {
          canvas.renderAll();
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input
        type="file"
        onChange={onLoad}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <BaseButton onClick={() => inputRef.current.click()}>
        Load from JSON file
      </BaseButton>
    </>
  );
};
