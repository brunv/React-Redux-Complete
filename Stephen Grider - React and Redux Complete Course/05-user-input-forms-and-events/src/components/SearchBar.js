import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    /**
     * When using React you don't need to call 'addEventListener' to add
     * listeners to a DOM element after is is created. When you define a component
     * using an ES6 Class, a common pattern is for an event handler to be a method
     * on the class, just like bellow. There is also a community convention around
     * naming Event Listeners: on + name of element + event
     */
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);   // this is the App Component!!
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;