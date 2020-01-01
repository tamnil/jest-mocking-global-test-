import { thirdLv } from "./thirdLevelCall";
const secLv = () => {
  // call 3rd level:
  thirdLv();

  let fsec = new AbsoluteOrientationSensor();

  // console.log('created new sensor absolute')

  return fsec;
};

module.exports = { secLv };
