function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var FeatureFlagContext = React__default.createContext([]);
var FeatureFlagProvider = function FeatureFlagProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState({
    flags: []
  }),
      flagsRetrieved = _useState[0],
      setFlagsRetrieved = _useState[1];

  React.useEffect(function () {
    setTimeout(function () {
      setFlagsRetrieved({
        flags: ['A', 'B', 'C']
      });
    }, 3000);
  }, []);
  return /*#__PURE__*/React__default.createElement(FeatureFlagContext.Provider, {
    value: flagsRetrieved
  }, children);
};
var FeatureFlag = function FeatureFlag(_ref2) {
  var _ref2$flagName = _ref2.flagName,
      flagName = _ref2$flagName === void 0 ? '' : _ref2$flagName,
      children = _ref2.children;
  var context = React.useContext(FeatureFlagContext);
  if (!context.flags.includes(flagName)) return null;
  return children;
};

exports.FeatureFlag = FeatureFlag;
exports.FeatureFlagProvider = FeatureFlagProvider;
//# sourceMappingURL=index.js.map
