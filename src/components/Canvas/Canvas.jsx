import React, { useEffect, useState, createContext, useContext } from "react";
import { fabric } from "fabric";
import * as options from "../options";

const CanvasContext = createContext(null);
const SelectedObjectContext = createContext(null);

export const useCanvas = () => {
  return useContext(CanvasContext);
};

export const useSelected = () => {
  return useContext(SelectedObjectContext);
};

export const CanvasProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [object, setObject] = useState(null);

  useEffect(() => {
    const canvas = new fabric.Canvas("react-canvas", options.canvas);
    canvas.on("mouse:up", () => {
      const object = canvas.getActiveObject();
      if (object) console.log({ object });
      setObject(object);
    });
    setCanvas(canvas);
  }, []);

  return (
    <CanvasContext.Provider value={canvas}>
      <SelectedObjectContext.Provider value={object}>
        {children}
      </SelectedObjectContext.Provider>
    </CanvasContext.Provider>
  );
};

export const Canvas = () => {
  return (
    <div>
      <canvas id="react-canvas" />
    </div>
  );
};
