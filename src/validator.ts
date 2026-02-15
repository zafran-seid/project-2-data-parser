import { User, Order } from "./types";

export interface ValidationError {
  type: "User" | "Order";
  id: string;
  errors: string[];
}

export function validateData(users: User[], orders: Order[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const userIds = new Set(users.map(u => u.id));

  users.forEach(user => {
    const userErrors: string[] = [];

    if (!user.email.includes("@")) {
      userErrors.push("Invalid email format");
    }

    if (!user.name) {
      userErrors.push("Name is required");
    }

    if (userErrors.length > 0) {
      errors.push({
        type: "User",
        id: user.id,
        errors: userErrors
      });
    }
  });

  orders.forEach(order => {
    const orderErrors: string[] = [];

    if (!userIds.has(order.userId)) {
      orderErrors.push("User does not exist");
    }

    if (order.amount <= 0) {
      orderErrors.push("Amount must be positive");
    }

    if (!["Pending", "Paid", "Cancelled"].includes(order.status)) {
      orderErrors.push("Invalid order status");
    }

    if (orderErrors.length > 0) {
      errors.push({
        type: "Order",
        id: order.id,
        errors: orderErrors
      });
    }
  });

  return errors;
}
