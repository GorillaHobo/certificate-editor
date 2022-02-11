import { useCanvas } from "components";
import { BaseButton } from "components/Button";

export const ExportAsJSON = () => {
  const canvas = useCanvas();

  const onSave = () => {
    const file = canvas.toJSON();
    export2txt(file);
  };

  function export2txt(data) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], {
        type: "text/plain",
      })
    );
    a.setAttribute("download", "data.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <BaseButton title="Save" onClick={onSave}>
      Export as JSON file
    </BaseButton>
  );
};
