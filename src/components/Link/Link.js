import React from 'react';

const Link = ({route}) => {
    console.log(route);
    return (
        <li className='ml-3'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;