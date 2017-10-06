const globalAny:any = global;
const react = require("react");
globalAny.window = global;
/* tslint:disable:no-empty */
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node");
};

module.exports = react;
