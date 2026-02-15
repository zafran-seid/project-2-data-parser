"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = require("./loader");
const validator_1 = require("./validator");
const summary_1 = require("./summary");
const data = (0, loader_1.loadJsonFile)("data/data.json");
const users = data.users;
const orders = data.orders;
const errors = (0, validator_1.validateData)(users, orders);
if (errors.length > 0) {
    console.error("ERROR REPORT");
    errors.forEach(err => {
        console.error(`${err.type} (${err.id}):`);
        err.errors.forEach(e => console.error(" -", e));
    });
    process.exit(1);
}
(0, summary_1.printSummary)(users.length, orders);
process.exit(0);
