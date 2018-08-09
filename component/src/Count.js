import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.state={
            num:props.initValue
        }
    }
    increment(){
        this.upDateCount(true);
    }
    decrement(){
        this.upDateCount(false);
    }
    upDateCount(Iscrement){
        const prev=this.state.num;
        const now=Iscrement?prev+1:prev-1;
        this.setState(
            {num:now});
        this.props.onUpdate(now,prev)
    }
    render(){
        const {caption} =this.props;
        return(
            <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
                <span>{caption} count:{this.state.num}</span>
            </div>
        );
    }
}
export default Counter;