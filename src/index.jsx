import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card';
import './App.css'

import axios from 'axios';

class Index extends Component {
  state={
    data:[],
    isloading:false,
    search:'',
    results:''
  }

  componentDidMount(){
    
    this.setState({
      isloading:true
    })

    
    axios.get(`https://api.giphy.com/v1/gifs/trending`,
    {
      params:{
        api_key:"i0LF92vtpzEE28kqImP9hhMz4mPN4d1m"
      }
    })
    .then(res=>{
      this.setState({
        data:res.data.data
      })
    })

    this.setState({
      isloading:false
    })

  }
  render() {
    
  console.log(this.state.data)
  const Data = this.state.data.map(values =>{
    return <li>{values.id}</li> 
  });


  const handleSearchChange=(event)=>{
    this.setState({
      search:event.target.value
    })

  }

  const handleSubmit=event=>{
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search`,
    {
      params:{
        api_key:"i0LF92vtpzEE28kqImP9hhMz4mPN4d1m",
        q:this.state.search
      }
    })
    .then(res=>{
      this.setState({
        data:res.data.data
      })
    })

   
  }
  
    return (
      <div>
        
        <form className="form-inline justify-content-center m-2">
          <div className="row">
            <div className="col"> 
            <i class="far fa-smile fa-4x logo"></i>
            </div>
            <div className="col">
            <input
            value={this.state.search} 
            onChange={handleSearchChange} 
            type="text" 
            placeholder="search" 
            className="form-control"></input>
            </div>
            <div className="col">
              <button type="submit" 
              placeholder="search" 
              className="btn btn-danger mx-2"
              // onChange={searchChange}
              onClick={handleSubmit}
              ><i class="fas fa-search"></i></button>

            </div>
          </div>
          
          
        </form>
        <Card data={this.state.data} loading={this.state.isloading}/>
      </div>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('root'))