import React, { PropTypes } from 'react';

const ResponsiveImage = ({ sources, alt }) => {
    const set = sources.map(s => s.src + ' ' + s.width + 'w').join(', ');

    return (
        <img
          src={sources[0].src}
          alt={alt}
          srcSet={set}
        />
    );
};

ResponsiveImage.propTypes = {
    sources: PropTypes.array,
    alt: PropTypes.string
};

export default ResponsiveImage;
