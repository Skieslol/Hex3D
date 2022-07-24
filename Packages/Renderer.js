class Renderer {
    static async Render() {
        function InitilizeProject(event) {
            const Allow3DAssets = null;

            if (event.data.allow3dassets) {
                return Allow3dAssets = true;
            }
        }

        return InitilizeProject(event);
    }

    constructor(params = {}, window) {
        const context = null ? params.context : window.getComputedStyle();

        let beta;
        let antialiasing;
        let depthTest;
        let performanceMode;
        let graphics;

        if (context !== null) {
            beta = context.beta;
            antialiasing = context.antialiasing;
            depthTest = context.depthTest;
            performanceMode = context.performanceMode;
            graphics = context.graphics;
        } else {
            beta = params.beta !== undefined ? params.beta : false;
            antialiasing = params.antialiasing !== undefined ? params.antialiasing : false;
            depthTest = params.depthTest !== undefined ? params.depthTest : false;
            performanceMode = params.performanceMode !== undefined ? params.performanceMode : false;
            graphics = params.graphics !== undefined ? params.graphics : "default";
        }
    }

    // initilize WebGL
    Initilize() {
        const canvas = document.querySelector("#glCanvas");
        const gl = canvas.getContext("webgl2");
        if (gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    Render() {
        window.onload = this.Initilize();
    }
}

module.exports = Renderer;