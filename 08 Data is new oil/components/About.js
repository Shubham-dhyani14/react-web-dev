import { Outlet} from 'react-router-dom'

const About = ()=>{
    return (
        <>
        <div className="main">
            <h1>About us section</h1>
            outlet is below will display profile here using nested path;
            Try Going to /profile (append mode)
            <Outlet/>
        </div>
        </>
    )
}

export default About ;