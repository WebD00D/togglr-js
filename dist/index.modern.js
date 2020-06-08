import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase';

var database;
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

var FeatureFlagContext = React.createContext([]);
var FeatureFlagProvider = function FeatureFlagProvider(_ref) {
  var organizationKey = _ref.organizationKey,
      environment = _ref.environment,
      children = _ref.children;

  var _useState = useState({}),
      flagsRetrieved = _useState[0],
      setFlagsRetrieved = _useState[1];

  useEffect(function () {
    if (!organizationKey) {
      console.error('togglr-js configiration error: No organizationKey set');
      return;
    }

    var clientFlags = database$1.database().ref("organizations/" + organizationKey + "/flags");
    clientFlags.on('value', function (snapshot) {
      var flags = snapshot.val();

      if (flags) {
        setFlagsRetrieved(flags);
      } else {
        setFlagsRetrieved({});
      }
    });
  }, []);
  var FLAG_CONTEXT_DATA = {
    environment: environment,
    flags: flagsRetrieved
  };
  return /*#__PURE__*/React.createElement(FeatureFlagContext.Provider, {
    value: FLAG_CONTEXT_DATA
  }, children);
};
var FeatureFlag = function FeatureFlag(_ref2) {
  var _ref2$flagName = _ref2.flagName,
      flagName = _ref2$flagName === void 0 ? '' : _ref2$flagName,
      children = _ref2.children;
  var context = useContext(FeatureFlagContext);
  if (!Object.keys(context.flags).length) return null;
  var on = false;
  Object.keys(context.flags).forEach(function (key) {
    var flag = context.flags[key];

    if (flag.flagKeyName === flagName && flag.active) {
      if (flag.environments === '') {
        on = true;
      } else {
        var envArray = flag.environments.split(',');

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
