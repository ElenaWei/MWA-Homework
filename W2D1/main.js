"use strict";
exports.__esModule = true;
var LikeComponent_1 = require("./LikeComponent");
var obj = new LikeComponent_1.LikeComponent(2, true);
var obj2 = new LikeComponent_1.LikeComponent(3, false);
console.log(obj.onClick());
console.log(obj.onClick());
console.log(obj.onClick());
console.log(obj.onClick());
console.log(obj2.onClick());
console.log(obj2.onClick());
console.log(obj2.onClick());
