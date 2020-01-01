import { qwer } from "../teste.js";

console.log(qwer);

// jest.mock('./teste.js', () => jest.requireActual('./__mocks__/teste'))

// override
//

global.AbsoluteOrientationSensor = jest.fn(() => {console.log('mocked')})

let x = new qwer('fdsa','hggdf');
let y = new qwer('lkj','h;;ggdf');

console.log(x,y,qwer)

test("", () => {
  expect(true).toBe(true);

console.log(x , x.fun1())

});
