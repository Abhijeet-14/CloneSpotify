import React from 'react'

function Feedback({ match }) {
    return (
        <div>
            Feedback <br />
            Month: {match.params.month} <br/> 
            Year: {match.params.year}
        </div>
    )
}

export default Feedback
