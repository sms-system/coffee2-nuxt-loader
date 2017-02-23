module.exports.pitch = function(request) {
  return "module.exports = require('-!babel-loader?" + JSON.stringify(
      this.options.module.rules
      .find(rule => rule.loader === 'babel-loader')
      .query
    ) +
    '!coffee-loader!' + request +
  "')"
}