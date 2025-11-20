import { logger, withTelemetry } from "@appneural/cli-shared";
export function registerExtensionCommands(program) {
    program
        .command("extension")
        .description("Manage APPNEURAL extensions")
        .action(() => withTelemetry("extension", async () => {
        logger.info("Extensions are loaded dynamically via .anx/extensions.json");
    }));
}
//# sourceMappingURL=extension.js.map