// const { default: test } = require("node:test");

const ex = require("./ex");

test("2 더하기 3은 5야.", () => {
    expect(ex.add(2, 3)).toBe(5);
});

