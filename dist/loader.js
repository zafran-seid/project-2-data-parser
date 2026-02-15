"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJsonFile = loadJsonFile;
const fs_1 = __importDefault(require("fs"));
function loadJsonFile(path) {
    const rawData = fs_1.default.readFileSync(path, "utf-8");
    return JSON.parse(rawData);
}
