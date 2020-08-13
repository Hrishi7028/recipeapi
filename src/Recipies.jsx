import React from 'react'



const Recipies = (props) => {
    return (
        <>
            
                <div className="card" style={{width: "25rem", margin:"10px auto", height: "30rem"}}>
                <img src={props.photo} className="card-img-top img-fluid" alt="..."
                    style={{height: "60%"}}

                />
                <div className="card-body"
                    style={{overflow:'auto'}}
                >
                    <h5 className="card-title">{props.title}</h5>
                    {
                        props.ingredient.map((item,index) => {
                            return(
                                <li className="card-text" key= {index}
                                    
                                >{item}</li> 
                     )
                 })
             }
                </div>
                </div>
              
        </>
    )
}

export default Recipies


// <h1>{props.title}</h1>  
//             <img src={props.photo} alt="img" />
//             {
//                 props.ingredient.map((item,index) => {
//                     return(

//                         <p key= {index}>{item}</p>
//                     )
//                 })
//             }