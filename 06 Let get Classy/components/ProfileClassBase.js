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
            users : {
                login : "Default name" , 
                avatar_url : "none"
            }
        }
        console.log("--first constructer then render\n") ;
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

    async componentDidMount()
    {
        console.log("--component mounted on first render , best to api call\n") ;

        // timing events need to be clear else it will be continued even on next page going
        // and returning to that page again will set timing events again
            // clearing must done on componentWillUnmount

        this.timer = setInterval(()=>
        {
            console.log("timer from class compnent") ; //try comment clearinterval in unmount
        } , 1000) 

        const data = await fetch('https://api.github.com/users') ;
        const json = await data.json() ;
        this.setState({
            users : json[0], 
        })


    }

    componentDidUpdate(prvProps , prvState) // to put dependencies like useEffect
    {
        if(this.state.count != prvState.count || this.state.count2 != prvState.count2)  // [count , count2]
        console.log("--counts are changed") ;

        console.log("--componentDidUpdate trigered on every render\n")
    }    

    componentWillUnmount()
    {
        console.log("--componentWillUnmount on path change , help to clean up like setTimeout , intervals etc");
        console.log("--clearing the interval\n") ;
        clearInterval(this.timer) ; 
    }
    render()
    {
        const {login , avatar_url} = this.state.users ; //destructuring
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

            <br /><br />
            <h3> On async componentDIdMont to fetch url</h3>
            <h2>{login}</h2> 
            <img src={this.state.users.avatar_url} alt="Profile dp" />
            </>
        )
        
    }
}

export default ProfileClassBase ;