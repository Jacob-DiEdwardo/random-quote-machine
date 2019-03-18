import React from 'react';

const quote = (props) => {
    return (
        <div>
            <p>{props.message}</p>
            <p>- {props.author}</p>
        </div>
    );
}
 
export default quote;