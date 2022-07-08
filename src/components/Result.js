import React from 'react'

function Result({index}) {
  return (
    <nav>
    <div class="nav-wrapper">
      <div class="col s12">
     <h6>The index of the first invalid character is: {index}</h6> 
      </div>
    </div>
  </nav>
    )
}

export default Result