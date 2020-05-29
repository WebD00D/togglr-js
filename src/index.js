import React, { useEffect, useState, useContext } from 'react'

const FeatureFlagContext = React.createContext([])

export const FeatureFlagProvider = ({ clientKey, children }) => {
  const [flagsRetrieved, setFlagsRetrieved] = useState({ flags: [] })

  useEffect(() => {
    // Make call to firebase using client key to retrieve flag settings
    setTimeout(() => {
      setFlagsRetrieved({ flags: ['A', 'B', 'C'] })
    }, 3000)
  }, [])

  return (
    <FeatureFlagContext.Provider value={flagsRetrieved}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export const FeatureFlag = ({ flagName = '', children }) => {
  const context = useContext(FeatureFlagContext)
  if (!context.flags.includes(flagName)) return null
  return children
}
