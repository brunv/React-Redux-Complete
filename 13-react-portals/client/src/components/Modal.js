import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

/* This component will be used in a PORTAL! */

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    Delete Stream
                </div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
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