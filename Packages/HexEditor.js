const OutlineLogger = require("outline-logs");
const Application = require("../Editor/Application");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

class HexEditor {
    constructor() {
        this.app = Application;
        this.logger = new OutlineLogger;
    }

    get() {
        this.app.InitilizeEditor(1024, 500, "HexEditor v1.0.0", null); // width, height, title, image
        return this.logger.Log.INFO("Initilized Editor!");
    }
}

module.exports = HexEditor;