import { validateData } from "../src/validator";
import { User, Order } from "../src/types";

test("invalid user should be reported", () => {
  const users: User[] = [
    {
      id: "u1",
      name: "",
      email: "wrongemail",
      role: "customer",
      createdAt: "2024-01-01"
    }
  ];

  const orders: Order[] = [];

  const errors = validateData(users, orders);
  expect(errors.length).toBe(1);
  expect(errors[0].type).toBe("User");
});
