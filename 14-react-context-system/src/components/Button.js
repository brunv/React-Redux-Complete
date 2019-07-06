import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    static contextType = LanguageContext;

    /**
     * When we make use of the 'static' keyword we are adding
     * a property directly to the class itself. 
     */

    render() {
        console.log(this.context);
        const text = this.context === 'en-us' ? 'Submit' : 'Enviar';
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }
}

export default Button;