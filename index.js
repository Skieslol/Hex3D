const Editor = require("./Packages/HexEditor");
const Hex = new Editor();
const Window = require("./Packages/Window");
const Renderer = require("./Packages/Renderer");

Hex.get(); // literally just calling everything
Window.Load();
Renderer.Render();