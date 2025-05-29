import { promises as fs } from "fs";

export async function getMedalsData() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/public/data/medals.json",
      "utf8"
    );
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error("Failed to load medals data:", error);
    throw new Error("Could not read or parse medals.json");
  }
}
