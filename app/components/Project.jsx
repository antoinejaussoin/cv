import React from 'react';
import marked from 'marked';
import './Project.css';
import ParallaxImage from './ParallaxImage';
import ResponsiveImage from './ResponsiveImage';

export default ({ item }) => {
    const description = {
        __html: marked(item.shortDescription)
    };

    return (
        <div className="project-item">
            <ParallaxImage width={430} height={400} onClick={() => { document.location = item.website; }}>
                <div className="project-card">
                    <ResponsiveImage
                        sources={item.pictures}
                        alt={item.description}
                    />
                    <div className="project-details">
                        <h4>{item.name}</h4>
                        <p className="link">{item.website}</p>
                        <p dangerouslySetInnerHTML={description}></p>
                    </div>
                </div>
            </ParallaxImage>
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
