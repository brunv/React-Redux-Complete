import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // Community convention: on + name of element + event
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