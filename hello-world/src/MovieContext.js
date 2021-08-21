/*import React,{useState,createContext} from 'react';
export const MovieContext = createContext();
export const MovieProvider = (props)=>{
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
    return (
        <MovieContext.Provider value = {'Hello World'}>
           {props.children}
        </MovieContext.Provider>
    );
}*/
import React,{useState,createContext} from 'react';
export const MovieContext = createContext();
export const MovieProvider = (props)=>{
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
    return (
        <MovieContext.Provider value = {[movies, setMovies]}>
           {props.children}
        </MovieContext.Provider>
    );
}

