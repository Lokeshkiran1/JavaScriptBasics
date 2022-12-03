import React,{Component} from "react";
class DestrClass extends Component{
    render(){
        const {name,movie}=this.props;
        return(
            <h1>
                Welcome {name}, likes {movie}
            </h1>
        )
    }
}
export default DestrClass;