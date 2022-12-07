import React from 'react'
import view from '../img/view-iphone-14.jpg'

const Task05 = () => {
  return (
    <section>
      <h1>Task 05 - Figma</h1>
      <div>
        <p>
          <a href="https://www.figma.com/file/7nyr882eyedmGQVsswQhID/Untitled?node-id=0%3A1&t=D3A6GqIwbtyBsYn0-3">Link</a> to the project on Figma's website
        </p>
        <img 
          src={view} 
          alt="iphone-view"
          style={{width: 250}}
        /> 
      </div>
    </section>
  )
}

export default Task05
