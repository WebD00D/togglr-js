# togglr-js

> Feature Flagging as a Service for React components

[![NPM](https://img.shields.io/npm/v/togglr-js.svg)](https://www.npmjs.com/package/togglr-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save togglr-js
```

## Usage

```jsx
import React from 'react'
import { FeatureFlagProvider, FeatureFlag } from 'togglr-js'

const App = () => {
  return (
    <div>
      <FeatureFlagProvider
        environment='production'
        organizationKey='b5c3bdce-8e67-452b-98ef-3bb208532150'
      >
        <h1>My Awesome App</h1>
        <p>Pretty cool isn't it? Lorem ipsum dolar set</p>
        <FeatureFlag flagName='button_b_test'>
          <div>Component that is feature flagged</div>
        </FeatureFlag>
      </FeatureFlagProvider>
    </div>
  )
}
```

## License

MIT © [Christian Bryant](https://christianlovescode.com/)
