import React from 'react';
import marked from 'marked';

export default ({ item }) => {
    const description = {
        __html: marked(item.description)
    };

    return (
        <div className="row project-item">
            <div className="span4">
                <a href={item.website} target="_blank">
                    <img src={item.picture} alt={item.name} style={{ width: '100%' }} />
                </a>
            </div>
            <div className="span5">
                <h3><strong>{item.name}</strong></h3>
                <h4><a href={item.website} target="_blank">{item.website}</a></h4>

                <p dangerouslySetInnerHTML={description}></p>
            </div>
        </div>
    );
};
