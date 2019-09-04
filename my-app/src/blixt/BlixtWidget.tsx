import React from 'react'

class BlixtWidget extends React.Component {
    render() {
        return <div>Hello, BlixtWidget<div id="MyOther"></div></div>
    }

    loadScript(script: string) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = script;
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    componentDidMount(){
        this.loadScript('http://localhost:8085/build.js')
    }
}

export default BlixtWidget