import { sum } from "./sum";
import click from "./components/button";
const res = sum(5, 5);
document.querySelector("button").addEventListener("click", click);
console.log("Hi, sum is: " + res);
