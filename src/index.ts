import { Command } from "commander";
import { registerExtensionCommands } from "./commands/extension.js";

export default function register(program: Command): void {
  registerExtensionCommands(program);
}
