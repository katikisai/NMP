/*import React from 'react';
  const Nav =()=>{  
    return(
        <div>
       {/*<h3>{props.name}</h3>*/
       /*<h3>karthik yadav</h3>
       <h3>List of Movies:</h3>
              </div>
        );
}

export default Nav;*/

import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';
  const Nav =()=>{  
      const [movies ,setMovies] = useContext(MovieContext);
    return(
        <div>
            {/*<h3>{props.name}</h3>}*/}
       <h3>karthik yadav</h3>
       <h3>List of Movies:{movies.length}</h3>
              </div>
        );
}

export default Nav;