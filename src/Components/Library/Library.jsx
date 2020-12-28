import React from 'react'
import queryString from 'query-string'

function Library({match, location}) {
    const result = queryString.parse(location.search);
     
    return (
        <div>
            Library <br/>
            Year: {result.year}, Month: {result.month}
        </div>
    )
}

export default Library
