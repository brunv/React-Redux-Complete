import React from 'react';
import ReactDOM from 'react-dom';

/* This component will be used in a PORTAL! */

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                This is a Modal!
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

/**
 * If we attach ou portal to the <body> it will replace all the content
 * of the body. We don't want that. So we usually create a new <div> with
 * some id in our index.html file.
 */

export default Modal;