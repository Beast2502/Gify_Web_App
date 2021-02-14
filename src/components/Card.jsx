import React, { Component } from 'react';
import '../App.css';
import Loader from './Loading';
class Card extends Component {
    
    render() {

        
        console.log(this.props.data)
        const fetch1 = this.props.data.map((data)=>{
            if(this.props.loading){
                return <div>data...<Loader/></div>
            }
            return (
            <div key={data.id} className="gif">
                <img src ={data.images.fixed_height.url} width="200rem" height="200repm"/>
            </div>
            )
           
        })
        return (      
            <div className="container gifs">
                 {fetch1}
            </div>       
           
     
        );
    }
}

export default Card;