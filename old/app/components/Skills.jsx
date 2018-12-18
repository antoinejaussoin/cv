import React from 'react';
import marked from 'marked';

export default ({ item }) => {
    const description = {
        __html: marked(item.description)
    };

    return (
        <div className="cv-item">
            <p className="period">{item.level} - {item.experience} years</p>
            <h3><strong>{item.name}</strong></h3>
            <br className="clear" />
            <p dangerouslySetInnerHTML={description}></p>
        </div>
    );
};
