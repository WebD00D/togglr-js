import React from 'react'

import { FeatureFlagProvider, FeatureFlag } from 'togglr-js'
import 'togglr-js/dist/index.css'

const App = () => {
  return (
    <div>
      <FeatureFlagProvider clientKey="ae44c4009cd">
        <FeatureFlag flagName='A'>
          <div>Test</div>
        </FeatureFlag>
      </FeatureFlagProvider>
    </div>
  )
}

export default App
