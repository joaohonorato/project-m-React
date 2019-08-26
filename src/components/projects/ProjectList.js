import React from 'react'

function ProjectList() {
    return (
        <div className='project-list section'>
            <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'> Project Title</span>
                    <p>Posted by Br</p>
                    <p className='grey-text'>2nd january 2020</p>
                </div>
            </div>
            <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'> Project Title 1</span>
                    <p>Posted by Br 1</p>
                    <p className='grey-text'>2nd january 2021</p>
                </div>
            </div>
            <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'> Project Title 2</span>
                    <p>Posted by Br 2</p>
                    <p className='grey-text'>2nd january 2022</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectList
