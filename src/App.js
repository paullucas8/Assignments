import React from 'react';
import Header from './Header';
import DogList from './DogList';
import RandomDog from './RandomDog';

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <RandomDog />
            <DogList /> 
        </div>;
    } 
}

export default App;
