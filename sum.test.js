const sum = require("./sum");

describe("example tests", () => {
it("will get sum", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
it("object assignment", () => {
  const obj = {};
  expect(obj).toEqual({});
});
});

describe("truthy or falsey", () => {
it("null", () => {
  const n = null;
  expect(n).toBeFalsy();
  //expect(n).not.toBeTruthy();
  //expect(n).toBeNull();
  //expect(n).not.toBeUndefined();
 });
});

describe("numbers", () => {
it("two plus two", () => {
const value = 2 + 2;
expect(value).toBe(4);
//expect(value).toBeGreaterThan(3);
//expect(value).toBeGreaterThanOrEqual(4);
//expect(value).toBeLessThan(6);
//expect(value).toBeLessThanOrEqual(4);
});
it("adding floats", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.2999999);
})
});

describe("strings", () => {
  it("there is no I in team", () => {
expect("team").not.toMatch(/I/);
  })
})

describe("arrays", () => {
  const shoppingLists = [
    "apples", "carrots", "milk", "tissues", "bin bags"
  ];
  expect(shoppingLists).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK")
}
describe("exceptions", () => {
it("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow(Error);
});
});