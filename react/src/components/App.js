import React, {Component} from 'react';

import Balance from './Balance';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <img className="logo" src="/images/balance.png" alt="balance"/>
                    <h2>Roberval Balance</h2>
                </header>
                <Balance ballsCount={8} defaultWeight={10}/>
            </div>
        );
    }
}

export default App;
