const fetchData = require("./async").default;

it("should return correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
