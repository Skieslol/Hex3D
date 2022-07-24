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

    constructor( params = {}, window ) {
        const context = null ? params.context : window.getComputedStyle();

        let beta;
        let antialiasing;
        let depthTest;
        let performanceMode;
        let graphics;

        if ( context !== null ) {
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
}

module.exports = Renderer;