import React,{useEffect, useState} from 'react';
import '../currentbanner/currentbanner.css';
import axios from '../../constants/Axios';
import { ApiKey, ImageUrl } from '../../constants/Constants';

function CurrentBanner(){
    const [current, setcurrent] = useState([]);

useEffect(()=>{
    axios.get(`discover/movie?api_key=${ApiKey}&with_genres=28'`).then((response=>{
        console.log("Current image");
        setcurrent(response.data.results);

    }))
},[])
    return(
        <div className='main-container'>
            <h2>Featured Movies</h2>
            <div className='card-wrapper'>
                {current.map((obj)=>
                    <div className='card'>
                        <img key={obj.id} src={`${ImageUrl+obj.backdrop_path}`} alt=""/>
                        <div className='card-title'>{obj.title}<span>{"Release date : " + obj.release_date}</span></div>
                    </div>
                )}
               
            </div>
        </div>
    )
}


export default CurrentBanner;