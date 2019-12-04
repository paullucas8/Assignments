import React from 'react';
import Header from './Header';
import Electric from './Electric';
import InternalCombustion from './InternalCombustion';
import ElecticForm from './ElectricForm';
import ICForm from './ICForm';

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <h2> Electric Cars </h2>
            <Electric />
            <h3>Add an Electric Car</h3>
            <ElecticForm />
            <h2> Internal Combustion Cars </h2>
            <InternalCombustion />
            <h3>Add an Internal Combustion Car</h3>
            <ICForm />
            
        </div>;
    } 
}

export default App;
