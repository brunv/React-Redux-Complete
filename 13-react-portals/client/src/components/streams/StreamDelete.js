import React from 'react';
import Modal from '../Modal'

const StreamDelete = () => {

    // We cannot remove the div that wraps up the two buttons because
    // we are no allowed to assign multiple JSX elements to a single 
    // variable. To do this we have to use React Fragment.
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            Stream StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};

export default StreamDelete;