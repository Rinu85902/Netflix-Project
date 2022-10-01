import React from 'react';
import '../banner/banner.css';
import { useEffect, useState} from 'react';
import axios from '../../constants/Axios';
import { ApiKey,ImageUrl } from '../../constants/Constants';
function Banner(){
    const[movie, setMovie] = useState();
    useEffect(()=>{
        
        axios.get(`discover/movie?api_key=${ApiKey}&with_genres=28'`).then((response=>{
            console.log(response.data.results[6]);
            setMovie(response.data.results[6])
        }))
    }, [])
    return(
        <div style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path : ""})`}}
        className='banner-wrapper'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner-buttons'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h4 className='description'>{movie ? movie.overview : ""}</h4>
            </div>
            <div className='fade-bottom'></div>
        </div>
    )
}
export default Banner;