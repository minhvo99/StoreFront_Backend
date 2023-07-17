import { Product } from "../../interfaces/product.interface";
import { User } from "../../interfaces/user.interface";
import { OrderModel } from "../../models/order";
import { Products } from "../../models/product";
import { Users } from "../../models/users";

const orders = new OrderModel();
const prd = new Products();
const users = new Users();

let productId: number, userId: number;

describe("Order Model", () => {
  const p : Product = {
    name: "Test product",
    price: 400,
    description: "test product",
  };
  const u : User = { 
    username: "test",
    firstname: "test",
    lastname: "test",
    password_digest: "password123",
  };
 
  beforeAll(async () => {
    const createOrder = async () => {
      const product: any = await prd.create(p);
      productId = product.id as number;
    };
    const createUser = async () => {
      const user = await users.create(u);
      userId = user.id as number;
    };
    createOrder();
    createUser();
  });

  afterAll(async () => {   
    await prd.delete(productId);
    await users.deleteUser(userId);
  });

  it("should create an order", async () => {
    const result: any = await orders.create({
      user_id: 1,
      status: "new",
    });
    expect(result.user_id).toEqual(1);
    await orders.delete(1);
  });

  it("should return a list of orders", async () => {
    const rs = await orders.create({
      user_id: 1,
      status: "new",
    });    
    const result: any = await orders.index();
    expect(result.user_id).toEqual(1);
    await orders.delete(rs.id as number);
  });

  it("should return the correct order", async () => {
    const createOrder = await orders.create({
      user_id: 1,
      status: "new",
    });
    const orderId = createOrder.id as number; 
    const result = await orders.show(orderId);
    expect(result).toEqual({
      id: '3' as unknown as number,
      user_id: 1,
      status: "new",
    });
    await orders.delete(orderId);
  });

});
