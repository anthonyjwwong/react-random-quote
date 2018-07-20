import React from 'react';

const quote = ( props ) => {
    if (props.quote === undefined) {
        return (
            <div>
                <p>We are thinking hard for new quotes to show you! Keep going!</p>
            </div>
        )
    } else {
        return (
            <div>
                
                <p className='quotes'>{props.quote}</p>
                <p className='author'>- {props.author}</p>
            </div>
        )
    }
}

export default quote;