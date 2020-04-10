import React from 'react';

function MainContainer (props) {
    return (
        <>
        <div className="container">{props.children}</div>
        </>
    )
}

export default MainContainer;