import React,{Component} from "react";
class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
        // this.clickHandler=this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!!!!!'
    //     })
    //}
    clickHandler=()=>{
        this.setState({
            message:'Good bye!!!!!!'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click Here</button> */}
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}
export default EventBind;