import axios from 'axios' 
import {imageUrl,baseUrl,API_KEY } from '../Constants/constants'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './Rowpost.css'
function Rowpost(props) {
  const [card, setCard] = useState([])
  const [urlId,setUrlid] = useState('')
  useEffect(() => {
  axios.get(props.url).then((response)=>{
    console.log(response.data.results);
    setCard(response.data.results.sort(function (a, b) { return 0.5 - Math.random() }))
  }).catch(e=>console.log(e))
  }, [props.url])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`${baseUrl}movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results)
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }else{
        alert('sorry Trailer not fount....!')
        console.log('array empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {card.map((c)=>
          <img onClick={()=>handleMovie(c.id)} className={ props.isSmall ? "smallposter" :"poster"} src={`${imageUrl+c.backdrop_path}`} alt="" />
          )}
        </div>
      {urlId && <YouTube  opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default Rowpost