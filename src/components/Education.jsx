import React from 'react';
import marked from 'marked';

export default ({ item }) => {
    const description = {
        __html: marked(item.description)
    };

    return (
        <div className="cv-item">

            <h3><strong>{item.school}</strong></h3>
            <h4>{item.diploma}</h4>
            <h4>{item.location}</h4>

            <br />

            <p dangerouslySetInnerHTML={description}></p>
        </div>
    );
};
