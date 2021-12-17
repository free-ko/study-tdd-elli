const fetchProduct = require("../async.js");

describe("Async", () => {
  // done()을 통해 Promise Test
  // 수행 속도가 느린것과 코드가 깔끔하지 않는 것을 고려해서 밑에 return 사용하는 것이 좋음
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // return을 통해 Promise Test
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  // await를 통해 Promise Test
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  // resolves를 통해 Promise Test
  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  // reject를 통해 Promise Test
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("NetWork Error");
  });
});
