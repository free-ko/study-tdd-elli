function fetchProduct(error) {
  if (error === "error") {
    return Promise.reject("NetWork Error");
  }

  return Promise.resolve({ item: "Milk", price: 200 });
}

module.exports = fetchProduct;
