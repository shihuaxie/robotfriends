import React, {useState, useEffect} from 'react';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

export default function App () {

 //useState()will return us an array, we put the initial state of robots in the bracket  
 //robots represents the initial state of robots; setRobots is the function that changes robots;
    const[robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')
    const[count, setCount] =useState(0)

// when app runs, it will run what inside in the useEffect, fetch is the first param
useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> {setRobots(users)})
            console.log(count);
}, [count]) //only run if count changes
//the second param is an array, we keep it empty here means just run useEffect initially when App renders
//component shortcut is the empty array here


    const onSearchChange = (event) => {
        // console.log(event)
        setSearchField(event.target.value)
    }

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length?
        <h1>loading...</h1> :
         (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <button onClick={()=>setCount(count+1)}>click me!</button>
                <SearchBox searchChange={onSearchChange}/>
               <Scroll>
                   <ErrorBoundry>
                       <CardList robots={filteredRobots}/>
                   </ErrorBoundry>
               </Scroll>

            </div>
        );
    }

