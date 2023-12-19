// 암묵적 타입 지정 implicit type
let a = 1;

a = "bye";

a = 1;

// 타입 명시 explicit type
let b: boolean = false;

b = "x";

//
let c: number[] = [];
c.push(1);
c.push("hello");

const player = {
  name: "nico",
};

console.log(player.name);
player.hello();
