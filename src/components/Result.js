import React from 'react'
import AdTile from './AdTile'

export default function Result() {
  return (
    <div className='container'>
        {
            Array(5).fill(0).map((_, i) => <AdTile key={i} />)
        }
    </div>
  )
}
