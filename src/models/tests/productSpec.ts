import { Product, ProductStore } from "../product";

const store = new ProductStore();

describe("Product Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });
  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });
  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });
  it("should have a delete method", () => {
    expect(store.delete).toBeDefined();
  });
  it("index method should return a list of products",
    async() => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
  it('create method should add a product', async () => {
    // @ts-ignore
    const result = await store.create({
      name: 'Bridge to Terabithia',
      color: 'Blue',
      quantity: 17,
    });
    expect(result).toEqual({
      // @ts-ignore
      id: 1,
      name: 'Bridge to Terabithia',
      color: 'Blue',
      quantity: 17,
    });
  });
  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      // @ts-ignore
      id: 1,
      name: 'Bridge to Terabithia',
      color: 'Blue',
      quantity: 17,
    }]);
  });

  it('show method should return the correct product', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      // @ts-ignore
      id: 1,
      name: 'Bridge to Terabithia',
      color: 'Blue',
      quantity: 17,
    });
  });

  it('delete method should remove the product', async () => {
    await store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });

})
