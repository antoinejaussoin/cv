import React from "react";

const ResponsiveImage = ({ sources, alt, style }) => {
  const set = sources.map(s => s.src + " " + s.width + "w").join(", ");

  return (
    <img
      src={sources[0].src}
      alt={alt}
      style={style}
      srcSet={set}
      width={sources[0].width}
      height={sources[0].height}
    />
  );
};

export default ResponsiveImage;
