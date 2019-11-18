import React from 'react';

class Header extends React.Component {
    render() {
        let someStyles = {backgroundColor:'lightblue', padding: '1rem', color: 'orange'};
        return <header style={someStyles}><h1>Assignment 7: React</h1><div>Dog Edition</div></header>;
    }
}

export default Header;