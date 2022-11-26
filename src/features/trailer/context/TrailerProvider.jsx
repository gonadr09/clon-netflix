import React, { useState } from 'react'
import { TrailerContext } from './TrailerContext'

const TrailerProvider = ({children}) => {
  const [stateTrailer, setStateTrailer] = useState({data: "", show: false})

  const handleTrailer = (data) => {
    setStateTrailer({data: data, show: !stateTrailer.show})
  }

  return (
    <TrailerContext.Provider value={{stateTrailer, handleTrailer}}>
        {children}
    </TrailerContext.Provider>
  )
}

export default TrailerProvider