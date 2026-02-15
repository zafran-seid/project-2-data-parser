"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSummary = printSummary;
function printSummary(usersCount, orders) {
    const totalAmount = orders.reduce((sum, o) => sum + o.amount, 0);
    const averageAmount = orders.length ? totalAmount / orders.length : 0;
    const statusCount = {};
    orders.forEach(o => {
        statusCount[o.status] = (statusCount[o.status] || 0) + 1;
    });
    console.log("SUMMARY");
    console.log("Total users:", usersCount);
    console.log("Total orders:", orders.length);
    console.log("Total order amount:", totalAmount);
    console.log("Average order amount:", averageAmount);
    console.log("Orders by status:", statusCount);
}
