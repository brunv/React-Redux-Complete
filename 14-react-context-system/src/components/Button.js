import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    // When we're using a Consumer we don't have to specify a context type
    // static contextType = LanguageContext;

    /**
     * When we make use of the 'static' keyword we are adding
     * a property directly to the class itself. 
     */

    renderSubmit(value) {
        return value === 'en-us' ? 'Submit' : 'Enviar';
    }

    render() {
        // Using 'this.context':
        // console.log(this.context);
        // const text = this.context === 'en-us' ? 'Submit' : 'Enviar';
        // return (
        //     <button className="ui button primary">
        //         {text}
        //     </button>
        // );

        // Using Consumer:
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );

        /**
         * We are providing a function as a child (not an argument) to 
         * a React Component.
         * The 'value' is the current value that is inside of the pipe.
         */
    }
}

export default Button;