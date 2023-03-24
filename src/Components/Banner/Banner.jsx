import axios from 'axios'
import {API_KEY,baseUrl,imageUrl} from '../Constants/constants'
import { useEffect, useState } from 'react'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
  axios.get(`${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results)
    setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
  })
  }, [])
  return (
    <div>
        <div  style={{backgroundImage: `url(${movie ?imageUrl+movie.backdrop_path :" "})`}} className="banner">
            <div className="content">
                <h1 className="title">{movie?.title||movie?.name}</h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">Mylist</button>
                </div>
                <h4 className="description">{movie?.overview}</h4>
            </div>
            <div className="fade_bottom"></div>
        </div>
    </div>
  )
}

export default Banner