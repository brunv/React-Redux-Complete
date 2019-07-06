import React from 'react';
import UserCreate from './UserCreate';


class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('en-us')} />
                    <i className="flag br" onClick={() => this.onLanguageChange('pt-br')} />
                </div>
                <UserCreate />
            </div>
        );
    }
}

export default App;