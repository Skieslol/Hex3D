class Lights {
    constructor( params = {}, window ) {
        function getComputedLight() {}

        const context = null ? params.context : getComputedLight();

        let color;
        let intensity;
        let offset;
        let something;

        if ( context !== null ) {
            return null;
        } else {
            color = params.color !== undefined ? params.color : "#000000";
            intensity = params.intensity !== undefined ? params.intensity : 0.0;
            offset = params.offset !== undefined ? params.offset : 0.0;
            something = params.something !== undefined ? params.something : .0;
        }    
    }
}

module.exports = Lights;