import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)
  return <GatsbyContext.Provider value={{}}>{children}</GatsbyContext.Provider>
}

export { GatsbyContext, GatsbyProvider }
