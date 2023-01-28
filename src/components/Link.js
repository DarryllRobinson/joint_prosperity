import React from 'react';

const Link = ({ classname, href, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
    }

    return <a onClick={onClick} classname={classname} href={href}>{children}</a>
}

export default Link;