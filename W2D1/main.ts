import{ LikeComponent } from './LikeComponent';
let obj = new LikeComponent(2,true);
let obj2 = new LikeComponent(3,false);

console.log(obj.onClick());
console.log(obj.onClick());

console.log(obj.onClick());
console.log(obj.onClick());
console.log(obj2.onClick());

console.log(obj2.onClick());
console.log(obj2.onClick());