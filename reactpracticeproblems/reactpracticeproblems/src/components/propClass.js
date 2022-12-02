import React,{Component} from 'react';
class Props extends Component{
    render(){
        return <h1>{this.props.name} plays {this.props.sport}</h1>
    }
}
export default Props;