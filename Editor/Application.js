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
}

module.exports = Application;