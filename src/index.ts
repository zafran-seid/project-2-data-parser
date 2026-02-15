import { loadJsonFile } from "./loader";
import { validateData } from "./validator";
import { printSummary } from "./summary";
import { User, Order } from "./types";

const data = loadJsonFile("data/data.json");

const users: User[] = data.users;
const orders: Order[] = data.orders;

const errors = validateData(users, orders);

if (errors.length > 0) {
  console.error("ERROR REPORT");

  errors.forEach(err => {
    console.error(`${err.type} (${err.id}):`);
    err.errors.forEach(e => console.error(" -", e));
  });

  process.exit(1);
}

printSummary(users.length, orders);
process.exit(0);
