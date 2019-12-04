import React from 'react';

class Header extends React.Component {
    render() {
        let someStyles = {backgroundColor:'black', padding: '1rem', color: 'red'};
        return <header style={someStyles}><h1>Automobiles</h1></header>;
    }
}

export default Header;