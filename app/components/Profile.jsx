import React from 'react';
import marked from 'marked';

export default ({ profile }) => {
    const description = {
        __html: marked(profile)
    };

    return (
        <div className="cv-item" dangerouslySetInnerHTML={description}></div>
    );
};
