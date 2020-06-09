# togglr-js

> Feature Flagging as a Service for React components

[![NPM](https://img.shields.io/npm/v/togglr-js.svg)](https://www.npmjs.com/package/togglr-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What is Togglr?
Unlimited Feature Flagging for your React Web Applications.
A name-your-price, simple, no-frills, perfect for small side projects, and just for suggested monthly price of a slice of some ‘za 🍕

## Create account
Create an organization at https://www.react-togglr.com/. 

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
        organizationKey='<ORGANIZATION_KEY>'
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
