'use strict';
export default class Clock extends React.Component {

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

    render() {
        return (
            React.createElement('div', {className: 'clock'}, `${this.state.time}`)
        )
    }
}

// const domContainer = document.querySelector('#clock');