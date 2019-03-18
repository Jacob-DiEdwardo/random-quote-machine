import React from 'react';

const button = (props) => {
    return <button onClick={props.clicked}>{props.children}</button>
}
 
export default button;