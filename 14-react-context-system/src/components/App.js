import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

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
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>

                <LanguageContext.Provider value="english">
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;