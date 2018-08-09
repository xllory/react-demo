import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Count.js'
class ControlPanel extends React.Component{
    constructor(props){
        super(props);
        this.onUpdate=this.onUpdate.bind(this);
        this.initValue=[0,10,20];
        const initSum=this.initValue.reduce((a,b)=>a+b,0);
        this.state={
            sum:initSum
        }
    }
    onUpdate(now,prev){
        const change=now-prev;
        this.setState({
            sum:this.state.sum+change
        });

    }
    render(){
        return (
            <div>
                <Counter  onUpdate={this.onUpdate} caption="First"  initValue={this.initValue[0]}/>
                <Counter  onUpdate={this.onUpdate} caption="Second" initValue={this.initValue[1]}/>
                <Counter  onUpdate={this.onUpdate} caption="Third"  initValue={this.initValue[2]}/>
                <div>Total Count:{this.state.sum}</div>
            </div>
        )
    }
}
export default ControlPanel;