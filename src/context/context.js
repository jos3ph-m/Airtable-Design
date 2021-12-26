import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

// Provider, Consumer

const GatsbyProvider = () => {
  return <GatsbyContext.Provider></GatsbyContext.Provider>
}
