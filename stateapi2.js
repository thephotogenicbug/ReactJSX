import React, {Component} from 'react';
class StateApiTwo extends Component{
   
        constructor(){
            super();
            this.state={
                citylist:[]
            }
        }
        getData = ()=>{
            fetch("http://firstenquiry.com/api/react/live/allcity.php")
            .then(response=>response.json())
            .then(result=>this.setState({citylist:result}))
        }

        
       
        componentDidMount(){
            this.getData();
        }

    render(){
        return(
            <div className="container mt-3">
             <div className="row">
              <div className="col-md-12 text-center">
                  <h2>State Managment componentDidMount() Example</h2>
                  <p>
                      componentDidMount() get call automatically after render()
                      it is life cycle method of reactjs under state managment
                  </p>
                  {
                      this.state.citylist.map((xcity, index)=>{
                          return(
                              <p key={index}>{xcity.name}</p>
                          )
                      })
                  }

                  </div>  
             </div>
            </div>
        )
    }
}
export default StateApiTwo;
// http://firstenquiry.com/api/react/live/allservice.php