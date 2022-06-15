import React from "react";
class ClassCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    

    //const [count, setState] = useState(0);
    increment() {
        this.setState({count: this.state.count + 1})
    }
    
    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <>
        <p>{this.state.count}</p>
      <button onClick={this.increment}>increase</button>
      <button onClick={this.decrement}>decrease</button>
        </>
        )
        
    }
}

export default ClassCounter;