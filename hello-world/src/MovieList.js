/*import React,{useState} from 'react';
const MovieList = ()=>{
    const [movies,setMovies]=useState([
        {
            name:'bahubali the begining',
            price:'Rs 150',
            id:2016
        },
        {
            name:'bahubali the conclusion',
            price:'Rs 200',
            id:2018
        },
        {
            name:"Rangasthalam",
            price:'Rs 300',
            id:2019
        }
    ]);
    return(
        <div>
       {movies.map((movie) =>(
           <li>{movie.name}</li>
       ))}
       </div>
        );
}

export default MovieList*/
/*import React,{useState} from 'react';
import Movie from './Movie';
const MovieList = ()=>{
    const [movies,setMovies]=useState([
        {
            name:'bahubali the begining',
            price:'Rs 150',
            id:2016
        },
        {
            name:'bahubali the conclusion',
            price:'Rs 200',
            id:2018
        },
        {
            name:"Rangasthalam",
            price:'Rs 300',
            id:2019
        }
    ]);
    return(
        <div>
       {movies.map((movie) =>(
           <Movie name  = {movie.name} price = {movie.price} key= {movie.id}/>
       ))}
       </div>
        );
}

export default MovieList*/
/*import React,{useState,useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';
const MovieList = ()=>{
    const value = useContext(MovieContext);
    return(
        <h1>{value}</h1>
        /*<div>
       {movies.map((movie) =>(
           <Movie name  = {movie.name} price = {movie.price} key= {movie.id}/>
       ))}
       </div>
        );
}

export default MovieList*/

import React,{useState,useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';
const MovieList = ()=>{
    const [movies, setMovies] = useContext(MovieContext);
    return(
        //<h1>{value}</h1>
        <div>
       {movies.map((movie) =>(
           <Movie name  = {movie.name} price = {movie.price} key= {movie.id}/>
       ))}
       </div>
        );
}

export default MovieList