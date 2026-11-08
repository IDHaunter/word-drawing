import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/config";

export interface DrawingCanvasHandle {
  toDataUrl: () => string;
}

export const DrawingCanvas = forwardRef<DrawingCanvasHandle>(function DrawingCanvas(
  _props,
  ref,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  useImperativeHandle(
    ref,
    () => ({
      toDataUrl: () => {
        const canvas = canvasRef.current;
        return canvas ? canvas.toDataURL("image/png") : "";
      },
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#17182b";
    context.lineWidth = 10;
    context.lineCap = "round";
    context.lineJoin = "round";
  }, []);

  function getPoint(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();

    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");

    if (!context) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    isDrawingRef.current = true;

    const point = getPoint(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineTo(point.x + 0.1, point.y + 0.1);
    context.stroke();
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current) {
      return;
    }

    const context = event.currentTarget.getContext("2d");

    if (!context) {
      return;
    }

    event.preventDefault();
    const point = getPoint(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopDrawing() {
    isDrawingRef.current = false;
  }

  return (
    <div className="canvas-frame">
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        aria-label="Drawing area"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
        onLostPointerCapture={stopDrawing}
      />
    </div>
  );
});