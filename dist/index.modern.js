import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase';

let database;
var firebaseConfig = {
  apiKey: 'AIzaSyB0pXi3EBdc9p33uQvDMQG6SeCeuzpcHDk',
  authDomain: 'react-togglr.firebaseapp.com',
  databaseURL: 'https://react-togglr.firebaseio.com',
  projectId: 'react-togglr',
  storageBucket: 'react-togglr.appspot.com',
  messagingSenderId: '883468833586',
  appId: '1:883468833586:web:cf53cab617302ab2f87d2b',
  measurementId: 'G-NHR0E20SST'
};
database = firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database$1 = database;

const FeatureFlagContext = React.createContext([]);
const FeatureFlagProvider = ({
  organizationKey,
  environment,
  children
}) => {
  const [flagsRetrieved, setFlagsRetrieved] = useState({});
  useEffect(() => {
    if (!organizationKey) {
      console.error('togglr-js configiration error: No organizationKey set');
      return;
    }

    const clientFlags = database$1.database().ref(`organizations/${organizationKey}/flags`);
    clientFlags.on('value', snapshot => {
      const flags = snapshot.val();

      if (flags) {
        setFlagsRetrieved(flags);
      } else {
        setFlagsRetrieved({});
      }
    });
  }, []);
  const FLAG_CONTEXT_DATA = {
    environment,
    flags: flagsRetrieved
  };
  return /*#__PURE__*/React.createElement(FeatureFlagContext.Provider, {
    value: FLAG_CONTEXT_DATA
  }, children);
};
const FeatureFlag = ({
  flagName: _flagName = '',
  children
}) => {
  const context = useContext(FeatureFlagContext);
  if (!Object.keys(context.flags).length) return null;
  let on = false;
  Object.keys(context.flags).forEach(key => {
    const flag = context.flags[key];

    if (flag.flagKeyName === _flagName && flag.active) {
      if (flag.environments === '') {
        on = true;
      } else {
        const envArray = flag.environments.split(',');

        if (envArray.includes(context.environment)) {
          on = true;
        }
      }
    }
  });
  return on ? children : null;
};

export { FeatureFlag, FeatureFlagProvider };
//# sourceMappingURL=index.modern.js.map
