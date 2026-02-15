import { validateData } from "../src/validator";
import { User, Order } from "../src/types";

test("invalid order should be reported", () => {
  const users: User[] = [
    {
      id: "u1",
      name: "Alice",
      email: "alice@example.com",
      role: "customer",
      createdAt: "2024-01-01"
    }
  ];

  const orders: Order[] = [
    {
      id: "o1",
      userId: "u1",
      amount: -10,
      status: "Cancelled",
      createdAt: "2024-01-02"
    }
  ];

  const errors = validateData(users, orders);
  expect(errors.length).toBe(1);
  expect(errors[0].type).toBe("Order");
});
