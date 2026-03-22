"use client";

import { useRive } from "@rive-app/react-webgl2";

export default function RiveScene() {
  const { RiveComponent } = useRive({
    src: "/rive/luna2.riv",
    stateMachines: "State Machine 1", // change if needed
    autoplay: true,
    autoBind: true,
        artboard: "main", // replace with the exact artboard name

  });

  return (
    <div className="w-full h-[600px]">
      <RiveComponent />
    </div>
  );
}