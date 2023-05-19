import React from "react";
import Profile from "./Profile";

class ProfileClassBase extends React.Component
{
    // Order of calling : constructor , render() , componentDidMount()
    constructor(props)
    {
        super(props) ;

        this.state = {
            count : 0 , 
            count2 : 0 ,
        }
        console.log("first constructer then render") ;
    }
    //  life cycles https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
        // two phases : rende and commit
        // render : constructor is called and then it rendered (no change in dom)
        // commit : dom updated and componentDIdMont called
        // if state changed then it starts again from render and componentDidUnmount called
        // if path changed then componentWillUnmount called 

    // Order of calling for nested class components
    //   (only applicable if componentDidMount is not async)
        // parent - constructor 
        // p- render 
            //  child - constructor (as parent's render will triger l.cy mthd of child)
            //  c - render
            //  c - componentDidMount
        // p - componentDidmount
        // -- similar like fun() calls

    componentDidMount()
    {
        console.log("component mounted on first render , best to api call") ;
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate trigered on every render")
    }    

    componentWillUnmount()
    {
        console.log("componentWillUnmount on path change , help to clean up like setTimeout , intervals etc");
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
                    // snytx this.setState({obj with state want a change in key: val pair})
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