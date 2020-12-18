import React from "react";
import { Picture } from "../types";

interface ResponsiveImageProps {
  sources: Picture[];
  alt: string;
  style?: React.CSSProperties;
}

export default function ResponsiveImage({
  sources,
  alt,
  style,
}: ResponsiveImageProps) {
  const set = sources.map((s) => s.src + " " + s.width + "w").join(", ");

  return <img src={sources[0].src} alt={alt} style={style} srcSet={set} />;
}
