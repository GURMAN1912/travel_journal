import React from 'react'

export default function Cards(props) {
  return (
    <div className='Cards'>
        <img src={`./images/${props.item.img}`} className='card--img' alt="" />
        <div className="card--info">
            <div className="card--location">
            <img src="../images/mark.png" alt="" />
            <p className="location">{props.item.location}</p>
            <a href={props.item.link} >View on Google Maps</a>
            </div>
            <div className="card--data">
                <p className='card--name'>{props.item.name} </p>
                <b> {props.item.date}</b>
                <p className='information'>{props.item.description}</p>
            </div>
        </div>  
    </div>
  )
}
