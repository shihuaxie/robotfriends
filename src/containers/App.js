import React, {Component} from 'react';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> this.setState({robots:users}))
}

    onSearchChange = (event) => {
        // console.log(event)
        this.setState({searchfield: event.target.value})
    }

    render() {
        const{robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
               <Scroll>
                   <ErrorBoundry>
                       <CardList robots={filteredRobots}/>
                   </ErrorBoundry>
               </Scroll>

            </div>
        );
    }
}
