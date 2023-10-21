import React from 'react'
import FeaturedMovie from './FeaturedMovie'
import GenerSuggested from './GenerSuggested'

import {fetchMoviesOptions} from '../constants'


export default function Body() {
  return (
    <>
    <FeaturedMovie/>
    <div className='bg-zinc-900 py-1'>
      <div className='md:-mt-44 relative z-20'>
      {
        fetchMoviesOptions.map(option=>{
            return (
                <GenerSuggested {...option}/>
            )
          })
      }
      </div>
    </div>
    </>
  )
}
