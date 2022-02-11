import { useCanvas } from "components";
import { BaseButton } from "components/Button";

export const ExportAsImage = ({ format = "png", placeholderData }) => {
  const canvas = useCanvas();

  const onSave = () => {
    download(canvas.toDataURL({ format: format }));
  };

  const download = (url) => {
    const linkSource = url;
    const downloadLink = document.createElement("a");
    const fileName = `image.${format}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <BaseButton title="Save" onClick={onSave}>
      Export as {format}
    </BaseButton>
  );
};
