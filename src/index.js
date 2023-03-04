import isOdd from "is-odd";
import image from "./assets/image.jpeg";
import "./style.css";

let i = 12;
console.log("13 is odd - ", isOdd(13));

let img = document.getElementById("image");
img.src = image;
