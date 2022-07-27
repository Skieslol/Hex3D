const Hex3D = require("../index");
const Hex = new Hex3D();
const Camera = require("../Packages/Camera");
const Vector3 = require("../Packages/Vector3");
const Lights = require("../Packages/Lights");

const win = new Hex.Window();
const camera = new Camera();
const Fog = require("../Packages/Fog");
const fs = require("fs");
const Renderer = require("../Packages/Renderer");
const path = require("path");


// engine test

function cameraPositionGame(event) {
    return event;
};

var aspectRatio, fieldOfView, nearPlane, farPlane, globalLight, shadowLight, light, scene, ambientLight;

function InitilizeWindow() {
    var width = win.window.width;
    var height = win.window.height;

    X = width / 2;
    Y = height / 2;

    scene = win.Scene;
    scene.fog = new Fog(0xd5eae5, 160, 350);

    aspectRatio = width / height;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 1000;

    camera.position.x = 0;
    camera.position.z = cameraPositionGame();
    camera.position.y = 30;

    camera.LookAt(new Vector3(0, 30, 0));

    const renderer = new Hex.Renderer({
        beta: true,
        antialiasing: true,
        depthTest: false,
        performanceMode: true,
        graphics: "low"
    });
}

function InitilizeLighting() {
    const light = new Lights({
        color: "#000000",
        intensity: 0.8
    });

    globalLight = new Lights({
        offset: 0xffffffff,
        something: 0.9
    });

    shadowLight = new Lights({
        offset: 0xffffffff,
        something: 1
    });

    scene = win.Scene;

    // Set up the ambient light
    ambientLight = new Hex.AmbientLight({
        color: "#000000",
        intensity: 0.5,
        castShadow: true,
    });
    scene.Add(light);
    scene.Add(globalLight);
    scene.Add(ambientLight);
    scene.Add(shadowLight);
}

function InitilizeFloor() {
    floor = new Hex.Floor({
        color: "#000000",
        intensity: 0.5,
        castShadow: true,
    });
}

function RenderHTML() {
    const main = fs.readFileSync("./test/main.html");

    Renderer.Render(main);
}

function InitilizeProject(event) {
    Hex.Window.Load();
    Hex.Hex.get("Running Project!");

    document.querySelector("h1id");

    RenderHTML();
    InitilizeWindow();
    InitilizeLighting();
    InitilizeFloor();
}

InitilizeProject();
