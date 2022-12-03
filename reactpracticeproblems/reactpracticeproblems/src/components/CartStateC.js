import React,{Component} from 'react';
class Cart extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome to Online Shopping!!'
        }
    }
    changeMessage(){
        this.setState({
            message:'Added to Cart!!'
        })
    }

    render(){
            return(
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={()=>this.changeMessage()}>Add To Cart</button>
                </div>
                
            )
        
    }
}
export default Cart;