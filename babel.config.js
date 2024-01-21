module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ["nativewind/babel"],
  };
};
