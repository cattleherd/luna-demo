"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";

export default function RiveScene() {
  const { RiveComponent } = useRive({
    src: "/rive/luna2.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    autoBind: true,
    artboard: "main",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        background: "#070B1A",
        overflow: "hidden",
      }}
    >
      <RiveComponent />
    </div>
  );
}
