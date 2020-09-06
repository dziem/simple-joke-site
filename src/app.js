import "regenerator-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style/style.css";
import main from "./script/view/main.js";
window.$ = $;
document.addEventListener("DOMContentLoaded", main);