import { useState } from "react";

// function handelShowOffer(){
//     console.log("Clk show offer");
// };


const Section =({title , discrp})=>
{

    const [isVisible , setIsVisible] = useState(true) ;

    return(
        <>
        <h2>{title}</h2>
        {isVisible && <p>{discrp}</p>}
        <button  onClick={()=>{isVisible ? setIsVisible(false) : setIsVisible(true)}}>show</button>
        <br></br>
        <br></br>
        </>
    )
}


const Offers = ()=> {



    return (
    <>
        <h1>Offers</h1>
        <p>Nahi karunga page design kya karlega <br /> Css tu likh ke de de</p>

        <br></br>
        <br></br>

        <hr />

        <Section title="Buy 1 get 1" discrp="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem quibusdam architecto neque et totam consequuntur cum, sequi natus, possimus ipsam asperiores accusantium molestiae itaque voluptatum non aspernatur alias quasi"></Section>


        <Section title="Saste Offer" discrp="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem quibusdam architecto neque et totam consequuntur cum, sequi natus, possimus ipsam asperiores accusantium molestiae itaque voluptatum non aspernatur alias quasi"></Section>
        
        
        <Section title="Saste Offer" discrp="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem quibusdam architecto neque et totam consequuntur cum, sequi natus, possimus ipsam asperiores accusantium molestiae itaque voluptatum non aspernatur alias quasi"></Section>
        
    </>)
}

export default Offers ;