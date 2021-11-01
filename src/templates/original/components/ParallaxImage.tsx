import React, { PropsWithChildren } from "react";

interface ParallaxImageProps {
  width: number | string;
  height: number | string;
  onClick: () => void;
}

export default function ParallaxImage({
  width,
  height,
  onClick,
  children,
}: PropsWithChildren<ParallaxImageProps>) {
  return (
    <div onClick={onClick} style={{ width, height }}>
      {children}
    </div>
  );
}
