const OutlineLogger = require("outline-logs");

// Please Note there is no window rendering system so no window will pop up but I will add a rendering system in the future!

class Loader {
    static async Load() {
        const Enums = {
            FRAMEBUFFER: ["FRAMEBUFFER"],
            FRAMECOUNTER: ["FRAMECOUNTER"],
            WindowOnLoad: ["WINDOWONLOAD"],
            CACHE: ["CACHE"]
        }; 

        const Colors = {
            Blue: "",
            Black: "",
            Gray: "",
            LightGray: "",
            DarkGray: ""
        } // TODO(PACKET): Window Colors

        const logger = new OutlineLogger();
        const proc = process;

        function ExportDefault() {};
        function Buffer() {};
        function OnDraw() {};
        function Viewer() {};
        function Hex3D(title) {};
        function Render(character, mesh, texture, name) {}; 
        function Register(yeah) {};
        function PopupAnimation() {};
        function Message(text) {};
        function Image(imageUrl) {};
        function Presence() {};
        function ImGUI() {}; // javascript version of imgui lmfao
       
        let exportItem;

        var FrameBuffer = Buffer(() => {
            var FrameCount = Math.random().toString();
            
            if (FrameCount = 0) {
                return proc.exit(0); // kills the game if your pc is this bad
            }
            if (FrameCount = 1) {
                return logger.Log.WARNING("Your Game is Very Laggy, Please Check your Connection.");
            }
            if (FrameCount = 100) {
                return Enums.WindowOnLoad;
            }
            if (FrameCount = 1000) {
                return Enums.FRAMECOUNTER;
            }

            return FrameCount;
        });

        var Draw = OnDraw(() => {
            const BGColor = Colors.Gray;
            exportItem = BGColor;
            return BGColor;
        }); // should draw a color on the screen!

        const ModelViewer = Viewer(() => {
            const Model = null;

            if (Model) {
                const Mesh = [];
                const Texture = [];
                var View;

                View = `Model:Viewer:Hex:V1:${Mesh.toString().toUpperCase()}@hex.window.modelviewer.mesh`;
                View = `V1:HexModelViewer:${Texture.toString()}:${Texture.toString().toUpperCase()}@hex.wndow.modelviewer.texture`;

                View = Render("Hex3D", View.toString(), View.toString().toUpperCase(), "Hex3D Model"); // breef summery
            };

            if (Model) {
                null
            }; // so useful

            return Model;
        });

        var Title = Hex3D("Hex3D Pre Alpha.");
        var Vector3 = null // TODO(PACKET): Do Vector3 shit.

        const Side_Bar = Hex3D(() => {
            const Items = [
                "Home",
                "Engine News",
                "Create New Project",
                "Open Project",
                "Github"
            ];

            if (Items) {
                let items;
                const OnClick = Register("Click");

                // all of this uses our api btw
                items = `V1:Hex:${OnClick}:Register@hex.window.side_bar.onclick`;
                items = `V1:Hex:${OnClick}:Items@hex.window.side_bar.items` // what you see when you click the buttons

                return Register(items);
            }
        });

        const FortniteRefrence = Hex3D(() => {
            const Popup = PopupAnimation();

            Popup = Message("You've found a secret refrence for clicking News 100 times!");
            Popup = Image("https://media.discordapp.net/attachments/909474729583333427/998472843119558687/random-fortnite-account1.jpg");
        });

        const RichPresence = Presence(() => {
            const Discord = Message("Playing Hex3D");
            const DiscordDescription = Message("Hex3D is a Game Engine made in Javascript!");

            const ClientId = Presence();
            const Images = Presence();

            exprotItem = Discord;
            exportItem = DiscordDescription;
            exportItem = ClientId;
            exportItem = Images;

            return;
        });

        const GUI = ImGUI(() => {
            const PromptName = "IMGUI Test";
            const PromptText = "IMGUI WORKS YAYAA";
            const PromptColor = Colors.Blue;

            exprotItem = PromptName;
            exportItem = PromptText;
            exportItem = PromptColor;

            return;
        });

        exportItem = GUI;
        exportItem = RichPresence;
        exportItem = FortniteRefrence;
        exportItem = Side_Bar;
        exportItem = Vector3;
        exportItem = Title;
        exportItem = ModelViewer;
        exportItem = Draw;
        exportItem = FrameBuffer;
        exportItem = Export;

        var Export = ExportDefault(() => {
            Enums.WindowOnLoad = "Window On Load",
            Enums.FRAMEBUFFER = "Frame Buffer",
            Enums.FRAMECOUNTER = "Frame Counter",
            Enums.CACHE = false
        });

        return;
    }
}

module.exports = Loader;