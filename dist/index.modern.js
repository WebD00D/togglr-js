import React, { useState, useEffect, useContext } from 'react';

const FeatureFlagContext = React.createContext([]);
const FeatureFlagProvider = ({
  clientKey,
  children
}) => {
  const [flagsRetrieved, setFlagsRetrieved] = useState({
    flags: []
  });
  useEffect(() => {
    setTimeout(() => {
      setFlagsRetrieved({
        flags: ['A', 'B', 'C']
      });
    }, 3000);
  }, []);
  return /*#__PURE__*/React.createElement(FeatureFlagContext.Provider, {
    value: flagsRetrieved
  }, children);
};
const FeatureFlag = ({
  flagName: _flagName = '',
  children
}) => {
  const context = useContext(FeatureFlagContext);
  if (!context.flags.includes(_flagName)) return null;
  return children;
};

export { FeatureFlag, FeatureFlagProvider };
//# sourceMappingURL=index.modern.js.map
