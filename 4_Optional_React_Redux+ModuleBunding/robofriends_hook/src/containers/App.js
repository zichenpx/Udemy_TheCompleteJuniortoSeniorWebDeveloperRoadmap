import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { robots } from './robots.js';
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js"
// import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [], //原 robots: robots, 使用 jsonplaceholder 就不用了
    //         searchfield: "",
    //     }
    //     // console.log("1-constructor");
    // }

    /* hook in the lifecycle, 取代 componentDidMount() - Start */
    // we now have use effect and this use effect gets run every time 
    // the function App() gets run automatically. So this is something 
    // important to remember. By default, react runs this use affect 
    // function after every time it renders. So when app renders, it's 
    // going to run the use effect and whatever is inside of it. 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {setRobots(users)});
        console.log(robots, searchfield);
        console.log(count);
    }, [count]); // Only run if count changes.
    // Instead, we want to give it an empty list or an empty array, 
    // because what does that mean? It means, hey, only one use effect 
    // when this changes, but when the list or the array is empty, 
    // it's a shortcut for doing componentDidMount(). Hey, just run 
    // use effect initially when the component mounts, when app is 
    // rendered. So the component did mount shortcode is essentially 
    // this adding an array.
    /* hook in the lifecycle, 取代 componentDidMount() - End */
    // componentDidMount() {
    //     // update the state, update -> run render
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }))
    //     // console.log("2-componentDidMount");
    // }

    const onSearchChange= (event) => {
        // console.log(event.target.value);
        setSearchfield(event.target.value);
        /* ↑So this that says state changes to set search field and this search field can be changed.
        So in this case, because we just give it exactly what the change needs to be, we can just 
        remove the object here and just say event that target value is going to set the search field. */
    }
    
    // console.log("3-render");
    // const { robots, searchfield } = this.state; //remove
    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // console.log(robots, searchfield);
    // if (robots.length === 0) {
    //     return <h1>Loading</h1>
    // } else {
    return (
    <div className="tc">
        <h1>RoboFriends</h1>
        <button onClick={() => setCount(count+1)}>Click Me</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            {/* <ErrorBoundary> */}
                <CardList robots={filteredRobots} />
            {/* </ErrorBoundary> */}
        </Scroll>
    </div>
        )
    // }
}

export default App;
