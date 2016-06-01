import React from 'react';
import marked from 'marked';
import './Project.css';

export default ({ item }) => {
    const description = {
        __html: marked(item.description)
    };

    return (
        <div className="project-item" style={{ backgroundImage: "url('" + item.picture + "')" }}>
            <div className="project-item-overlay">
                <p>Hello World</p>
            </div>
        </div>
    );
};

/*
<div className="span5">
    <h3><strong>{item.name}</strong></h3>
    <h4><a href={item.website} target="_blank">{item.website}</a></h4>

    <p dangerouslySetInnerHTML={description}></p>
</div>
</div>
*/
