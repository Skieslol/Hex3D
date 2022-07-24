const Editor = require("./Packages/HexEditor");
const Hex = new Editor();
const Loader = require("./Packages/Window");

Hex.get(); // literally just calling everything
Loader.Load();
const Window = require("./Packages/Window");
const Renderer = require("./Packages/Renderer");
const Fog = require("./Packages/Fog");
const Lights = require("./Packages/Lights");

class Hex3D {
    constructor() {
        this.Hex = Hex;
        this.Window = Window
        this.Renderer = Renderer;
        this.Fog = new Fog();
        this.Lights = new Lights();
        this.AmbientLight = function (params = {}) {
            function getComputedLight() { }

            const context = null ? params.context : getComputedLight();

            let color;
            let intensity;
            let castShadow

            if (context !== null) {
                return null;
            } else {
                color = params.color !== undefined ? params.color : "#000000";
                intensity = params.intensity !== undefined ? params.intensity : 0.0;
                castShadow = params.castShadow !==  undefined ? params.castShadow : false;
            }
        };
        this.Floor = function (params) {
            this.AmbientLight = function (params = {}) {
                function getComputedLight() { }
    
                const context = null ? params.context : getComputedLight();
    
                let color;
                let intensity;
                let castShadow
    
                if (context !== null) {
                    return null;
                } else {
                    color = params.color !== undefined ? params.color : "#000000";
                    intensity = params.intensity !== undefined ? params.intensity : 0.0;
                    castShadow = params.castShadow !==  undefined ? params.castShadow : false;
                }
            };
        }
    }
}

module.exports = Hex3D;