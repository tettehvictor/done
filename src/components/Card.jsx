import React from 'react'

const Card = (props) => {
  return (
   <>
       <div class="card " style={{width: '18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.tit}</h5>
    <p class="card-text">{props.des}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </>
  )
}

export default Card