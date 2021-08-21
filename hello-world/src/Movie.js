import React from 'react';
//const Movie = (props)=>{
  const Movie =({name,price,id})=>{  
    return(
        <div>
       {/*<h3>{props.name}</h3>*/}
       <h4>{name}</h4>
       <h4>{price}</h4>
       <h4>{id}</h4>
       </div>
        );
}

export default Movie