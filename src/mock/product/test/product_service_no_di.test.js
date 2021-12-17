const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client.js");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => {
    [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  });

  /** 
    - ProductClient Class Mock에 위에서 작성한 fetchItems를 연결하는 방법
    - 실제로 ProductCliten Class 내부에 fetchItems() 역할을 대신하는 것
    - 위 작업을 하지 않게 되면 혹여 네트워크에 문제가 생길시 테스트 코드에 영향을 미쳐 테스트가 제대로 이루어지지 않음
    - 그래서 우리가 테스트 하고자 하는 것에 집중이 가능
    - 즉, 우리가 확인하고 싶어하는 fetchAvailableItems()가 제대로 filter 역할을 하는지 확인 가능
    - 이것이 '단위 테스트'
  */
  ProductClient.mockImplementation(() => {
    return {
      // fetchItems: fetchItems,
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // 밑에 함수는 Mock을 Clear()어 하는 방법
    // jest.config에서 clearMocks : false로 할 경우 밑에 코드를 작성해야 함
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();

    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
