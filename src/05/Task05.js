import React from 'react'
import projectImg from './project.jpg'

const Task05 = () => {
  return (
    <div>
        <h2>Task 05 figma</h2>
        <div>Figma connects everyone in the design process so teams can deliver better products, faster</div>
        <div>
            <a 
                href="https://www.figma.com/"
                target="_blank" 
                rel="noreferrer" 
            >figma.com
            </a>
            </div>
            <div>
            <a 
                href="https://www.figma.com/file/iGvMnERruRMad4z9OuoveA/Untitled?node-id=0%3A1"
                target="_blank" 
                rel="noreferrer" 
            >link for project
            </a>
        </div>
        <div>
            <img src={projectImg} alt="projectImg" style={{width: 200}}/>
        </div>
    </div>
  )
}

export default Task05