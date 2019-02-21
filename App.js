'use strict';

const e = React.createElement;

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            React.createElement('div', {className: 'clock'}, `${this.state.time}`)
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {liked: false};
    }


    render() {
        return (
            React.createElement('div', {className: 'react-div'}, React.createElement(Clock))
        )
    }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);