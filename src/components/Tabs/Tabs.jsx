import { useState } from 'react';
import classes from './Tabs.module.css';

const Tabs = (props) => {
    const { headings, contents } = props;
    const [content, setContent] = useState(contents[0]);
    const [activeHeading, setActiveHeading] = useState(headings[0]);

    const selectTab = (name) => {
        const elementIndex = headings.indexOf(name);
        setContent(contents[elementIndex]);
        setActiveHeading(name);
    }

    return (
        <div className={classes["tabs"]}>
            <ul className={classes["tabs-header"]}>
                {headings.map(heading => (
                    <li 
                        key={Math.random()} 
                        onClick={() => {selectTab(heading)}}
                        // style={{color: activeHeading === heading ? activeTextColor : ''}}
                        className={activeHeading === heading ? classes.selected : ''}
                    >{heading}</li>
                ))}
            </ul>
            <ul className={classes["tabs-content"]}>
                <li className={classes["tab"]}>{content}</li>
            </ul>
        </div>
    );
}

export default Tabs;

