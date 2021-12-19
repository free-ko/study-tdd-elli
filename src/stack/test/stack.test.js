const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push", () => {
    stack.push("Banana");

    expect(stack.size()).toBe(1);
  });

  describe("Pop", () => {
    it("Throws an Error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("Returns the last pushed item and removes it from the stack", () => {
      stack.push("Banana");
      stack.push("Apple");

      expect(stack.pop()).toBe("Apple");
      expect(stack.size()).toBe(1);
    });
  });

  describe("Peek", () => {
    it("Throws an Error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    });

    it("Returns the last pushed item but keeps it in the stack", () => {
      stack.push("Banana");
      stack.push("Apple");

      expect(stack.peek()).toBe("Apple");
      expect(stack.size()).toBe(2);
    });
  });
});
