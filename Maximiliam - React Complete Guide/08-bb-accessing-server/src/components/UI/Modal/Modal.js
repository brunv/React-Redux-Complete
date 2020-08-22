import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

/* React.memo() is a HOC for functional components.
   It verifies (shallow comparison) if there is any changes in the props,
   so if you're trying to listen to specific props, you must provide
   a fcuntion as a second argument to the .memo() that makes the comparison.
*/
const memoConditionalRender = ((prevProps, nextProps) => nextProps.show === prevProps.show);
/* If this component was a Class Based Component, you would use the
   lifecycle hook 'shouldComponentUpdate()' to do the comparison?
        shouldComponentUpdate(nextProps, nextState) {
            return nextProps.show !== this.props.show;
        }
*/

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default React.memo(Modal, memoConditionalRender);