import React from 'react';
import ReactDOM from 'react-dom';

/* This component will be used in a PORTAL! */

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

/**
 * If we attach ou portal to the <body> it will replace all the content
 * of the body. We don't want that. So we usually create a new <div> with
 * some id in our index.html file.
 * 
 * The 'stopPropagation()' function is going to make sure that the event
 * does not continue to bubble up when we click in any child element of the
 * element that has some event method, which in this case is the div with
 * the 'history.push()'
 */

export default Modal;