import React, { PropTypes } from 'react';

const ResponsiveImage = ({ sources, alt, style }) => {
    const set = sources.map(s => s.src + ' ' + s.width + 'w').join(', ');

    return (
        <img
          src={sources[0].src}
          alt={alt}
          style={style}
          srcSet={set}
        />
    );
};

ResponsiveImage.propTypes = {
    sources: PropTypes.array,
    alt: PropTypes.string,
    style: PropTypes.object
};

export default ResponsiveImage;
