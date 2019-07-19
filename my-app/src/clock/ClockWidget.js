import React from 'react'

class ClockWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timerId: null 
        };
        
    }
    componentWillUnmount() {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
            this.setState({timerId: null});
        }
    }
    componentDidMount() {
        if (!this.state.timerId) {
            let timerId = setInterval(() => {
                this.setState({date: new Date()})
            }, 1000);
            this.setState({timerId: timerId})
        }
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}

export default ClockWidget