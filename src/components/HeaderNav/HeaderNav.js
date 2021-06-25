import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
    render() { 
        return (
            <header className="App-header">
                <Link className="App-header-link" to="/home"> Home </Link>
                <Link className="App-header-link" to="/boards-manager"> BoardsManager </Link>
            </header>
        );
    } 
}

export default HeaderNav;