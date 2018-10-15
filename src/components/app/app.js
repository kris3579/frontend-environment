import React from 'react';
import faker from 'faker';
import { say } from 'cowsay-browser';
import Header from '../header/header'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.content = say({
            text : 'Cow Commentary',
            e : "oO",
            T : "U "
        });
    }

    generateCowsay = () => {
        this.setState(() => {
            return {
                content: say({
                        text : faker.lorem.words(3),
                        e : "oO",
                        T : "U "
                    })
            }
        })
    };

    render() {
        return (
            <div className='normal-class'>
                <Header/>
                <pre>{ this.state.content }</pre>
                <button onClick={this.generateCowsay}> Click Me! </button>
            </div>
        );
    }
}

export default App;
