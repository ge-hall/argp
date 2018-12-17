/* eslint-disable no-console */
const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  console.log(process.argv);
  console.log(args);
};
