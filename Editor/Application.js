class Application {
    static async InitilizeEditor(width, height, title, image) {
        const Window = {
            width: width,
            height: height,
            title: title,
            image: image
        }
        return Window;
    }
    static async Run() {
        return this.InitilizeEditor();
    }
    static async Configuration() {
        return this.Run();
    }

    constructor() {
        this.Username = {};
        this.Password = {};
    }
}

module.exports = Application;