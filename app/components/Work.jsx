import React from 'react';
import moment from 'moment';
import marked from 'marked';
import Pill from './Pill';
import './Work.css';

const buildPeriod = dates => {
    const from = moment(dates.from, 'YYYY-MM-DD').format('MMMM YYYY');
    if (!dates.to) {
        return from + ' - Present';
    }
    const to = moment(dates.to, 'YYYY-MM-DD').format('MMMM YYYY');
    return from + ' - ' + to;
};

export default ({ item }) => {
    const description = {
        __html: marked(item.description)
    };

    return (
        <div className="cv-item work">

            <p className="period">{buildPeriod(item.dates)}</p>

            <h3><strong>{item.title}</strong></h3>
            <h4>{item.company}, {item.type}</h4>

            <ul className="techs">
                {item.techs.map(t => <li><Pill text={t} /></li>)}
            </ul>

            <a href={item.website}>{item.website}</a>

            <div className="see-more">See more...</div>
            <div className="description">
                <p dangerouslySetInnerHTML={description}></p>
            </div>
        </div>
    );
};
