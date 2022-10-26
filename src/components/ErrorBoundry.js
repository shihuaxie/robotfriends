import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops, something wrong here</h1>
        }
        //children can be anything which is wrapped by errorboundry
        return this.props.children
    }
}
export default ErrorBoundry