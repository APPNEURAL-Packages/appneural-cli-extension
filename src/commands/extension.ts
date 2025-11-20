import { Command } from "commander";
import { logger, withTelemetry } from "@appneural/cli-shared";

export function registerExtensionCommands(program: Command): void {
  program
    .command("extension")
    .description("Manage APPNEURAL extensions")
    .action(() =>
      withTelemetry("extension", async () => {
        logger.info("Extensions are loaded dynamically via .anx/extensions.json");
      })
    );
}
