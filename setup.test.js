let animals = ["Tiger", "Zebra", "Bear", "Lion"];

describe("animals array", () => {
//beforeAll(() => {animals = ["Tiger", "Zebra", "Bear", "Lion"]});
beforeEach(() => {animals = ["Tiger", "Zebra", "Bear", "Lion"]});
//afterEach(() => {animals = ["Tiger", "Zebra", "Bear", "Lion"]});

it ("should add animal to end of array", () => {
animals.push("Eagle");
expect(animals[animals.length - 1]).toBe("Eagle");
});
it ("should add animal to beginning of array", () => {
    animals.unshift("Shark");
    expect(animals[0]).toBe("Shark");
    });
it("should have initial length of 4", () => {
expect(animals.length).toBe(4);
});
});