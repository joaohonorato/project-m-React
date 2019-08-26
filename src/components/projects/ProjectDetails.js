import React from 'react'

function ProjectDetails(props) {
    console.log(props);
    const { id } = props.match.params;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'> Project Title - {id}</span>
                    <p>Ex sit sunt tempor occaecat laboris. Ad enim qui sit cupidatat dolore nisi. Ea velit aliqua officia laborum duis excepteur nisi veniam minim. Mollit nulla dolore esse consectetur proident. Fugiat consectetur do velit sint cupidatat proident consectetur consequat enim quis enim. Esse veniam aute excepteur ad occaecat qui.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>posted by Br Detail</div>
                    <div>2nd january 2023</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
