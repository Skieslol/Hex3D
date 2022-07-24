class Camera {
    constructor(x, y) {
        this.position = {
            x: 0,
            z: 0,
            y: 0,
        }

        this.LookAt = function() {};
    }
}

module.exports = Camera;