import React from "react";
import Profile from "./Profile";

class ProfileClassBase extends React.Component
{
    // constructor , render() , componentDidMount()
    constructor(props)
    {
        super(props) ;

        this.state = {
            count : 0 , 
            count2 : 0 ,
        }
        console.log("first constructer then render") ;
    }
    render()
    {
        return (
            <>
            {console.log("rendered")}
            <Profile/>  <br /><br />
            <h3>Profile Class Based Component</h3> <br />
            <p>Props are name = {this.props.name}</p> <br />
            <p>count state vars are : {this.state.count} and {this.state.count2}</p>
            <button onClick={
                ()=>{
                    // multiple states can be changed here and there can be multiple setstates
                    // snytx this.setState()
                    this.setState(
                        {
                            count : 1 ,
                            count2 : 2 ,
                        }
                    )
                }
            }>change counts</button>
            </>
        )
        
    }
}

export default ProfileClassBase ;