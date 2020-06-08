import React, { useEffect, useState, useContext } from 'react'

import database from './database'

const FeatureFlagContext = React.createContext([])

export const FeatureFlagProvider = ({
  organizationKey,
  environment,
  children
}) => {
  const [flagsRetrieved, setFlagsRetrieved] = useState({})

  useEffect(() => {
    if (!organizationKey) {
      console.error('togglr-js configiration error: No organizationKey set')
      return
    }

    const clientFlags = database
      .database()
      .ref(`organizations/${organizationKey}/flags`)

    clientFlags.on('value', (snapshot) => {
      const flags = snapshot.val()

      if (flags) {
        setFlagsRetrieved(flags)
      } else {
        setFlagsRetrieved({})
      }
    })
  }, [])

  const FLAG_CONTEXT_DATA = {
    environment,
    flags: flagsRetrieved
  }

  return (
    <FeatureFlagContext.Provider value={FLAG_CONTEXT_DATA}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export const FeatureFlag = ({ flagName = '', children }) => {
  const context = useContext(FeatureFlagContext)
  if (!Object.keys(context.flags).length) return null

  let on = false

  Object.keys(context.flags).forEach((key) => {
    const flag = context.flags[key]
    if (flag.flagKeyName === flagName && flag.active) {
      if (flag.environments === '') {
        // configured for all environements
        on = true
      } else {
        // configured for specifics only
        const envArray = flag.environments.split(',')
        if (envArray.includes(context.environment)) {
          on = true
        }
      }
    }
  })

  return on ? children : null
}
