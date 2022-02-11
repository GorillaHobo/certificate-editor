import { useEffect, useState } from "react";
import { useSelected, useCanvas } from "components/Canvas";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { InputNumber, Dropdown } from "antd";

export const ColorProps = () => {
  const [strokeColor, setStrokeColor] = useState(undefined);
  const [fillColor, setFillColor] = useState(undefined);
  const [strokeWidth, setStrokeWidth] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const object = useSelected();
  const canvas = useCanvas();

  useEffect(() => {
    loadProperties();
  }, [object]);

  const loadProperties = () => {
    if (!object || object.type === "activeSelection") {
      setStrokeColor(undefined);
      setFillColor(undefined);
      setStrokeWidth(null);
      setIsActive(false);
      return;
    }

    const { fill, stroke, strokeWidth } = object;
    setStrokeColor(stroke ? stroke : undefined);
    setFillColor(fill);
    setStrokeWidth(strokeWidth);
    setIsActive(true);
  };

  const onChangeStroke = (value) => {
    if (!object) return;
    object.set("stroke", value);
    setStrokeColor(value);
    canvas.renderAll();
  };

  const onChangeFill = (value) => {
    if (!object) return;
    object.set("fill", value);
    setFillColor(value);
    canvas.renderAll();
  };

  const onChangeStrokeWidth = (value) => {
    if (!object) return;
    object.set("strokeWidth", value);
    setStrokeWidth(value);
    canvas.renderAll();
  };

  return (
    <div>
      <div style={styles.mainContainer}>
        <div style={styles.container}>
          <h4>Stroke</h4>
          <Dropdown
            trigger={["click"]}
            overlay={
              <div style={styles.dropdown}>
                <HexColorPicker color={strokeColor} onChange={onChangeStroke} />
                <HexColorInput
                  color={strokeColor}
                  onChange={onChangeStroke}
                  style={{ width: "100%" }}
                />
              </div>
            }
            disabled={!isActive}
          >
            <div style={styles.outerCircle}>
              <div
                style={{ ...styles.innerCircle, backgroundColor: strokeColor }}
              />
            </div>
          </Dropdown>
        </div>
        <div style={styles.container}>
          <h4>Fill</h4>
          <Dropdown
            trigger={["click"]}
            overlay={
              <div style={styles.dropdown}>
                <HexColorPicker color={fillColor} onChange={onChangeFill} />
                <HexColorInput
                  color={fillColor}
                  onChange={onChangeFill}
                  style={{ width: "100%" }}
                />
              </div>
            }
            disabled={!fillColor}
          >
            <div style={styles.outerCircle}>
              <div
                style={{ ...styles.innerCircle, backgroundColor: fillColor }}
              />
            </div>
          </Dropdown>
        </div>
      </div>
      <div>
        <InputNumber value={strokeWidth} onChange={onChangeStrokeWidth} />
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: "8px",
  },
  outerCircle: {
    height: 35,
    width: 35,
    backgroundColor: "gray",
    borderRadius: "50%",
  },
  innerCircle: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
};
