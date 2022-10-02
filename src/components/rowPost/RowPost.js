import React, { useEffect, useState } from 'react';
import '../rowPost/rowpost.css'
import axios from '../../constants/Axios';
import { ApiKey,ImageUrl } from '../../constants/Constants';
function Rowpost(){
   const [post, setpost] = useState([]);
  useEffect(()=>{
    axios.get(`discover/movie?api_key=${ApiKey}&with_genres=28'`).then((response=>{
        console.log(response); 
        setpost(response.data.results);
        console.log("testttttttttttttt");
        console.log(response)
    }))
  },[])
    return(
        <div className='row'>
            <h2>Netflix Originals</h2>
            <div className='posters'>
                {post.map((obj)=>
                    <img key={obj.id} className='poster' src={`${ImageUrl+obj.backdrop_path }`} alt="posters"/>
                )}
                
                
            </div>
        </div>
    )
}
export default Rowpost;