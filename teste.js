import { secLv } from "./secondLevelCall";
/**
 * asdf
 *
 * @returns {undefined}
 */

function asdf(x, y, z = 100) {
  return 1234;
}

class qwer {
  constructor(x, y) {
    console.log("constructing qwer");
    this.cx = x;
    this.a = 1;
    console.log(this.fun1());
  }
  fun1() {
    // module to override
    let asdf = new AbsoluteOrientationSensor();

    //call to second level abssens

    let b = new secLv();

    console.log(b, "b value");

    // debugger;
    return "fdsa";
  }
}

// let a = new qwer();

module.exports = { qwer };
