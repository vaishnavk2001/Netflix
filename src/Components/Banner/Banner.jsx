import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div>
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie name</h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">Mylist</button>
                </div>
                <h4 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum, sequi quam enim dolores perferendis quibusdam adipisci expedita, facere nobis perspiciatis delectus repellendus. Repellat soluta delectus officiis reiciendis ipsam iusto.</h4>
            </div>
            <div className="fade_bottom"></div>
        </div>
    </div>
  )
}

export default Banner