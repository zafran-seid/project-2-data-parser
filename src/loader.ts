import fs from "fs";

export function loadJsonFile(path: string) {
  const rawData = fs.readFileSync(path, "utf-8");
  return JSON.parse(rawData);
}
