//basic types
let d = [1, 1];
let e: string[] = ["il", "1"];
let f: boolean[] = [true];

//ooptional types
// const player2 = {
//     name : "nico"
// }

const playerNico: {
  name: string;
  age?: number; // optional parameter
} = {
  name: "nico",
};

if (playerNico.age && playerNico.age < 10) {
}

const playerLyn: {
  name: string;
  age?: number;
} = {
  name: "lyn",
};

// type Alias : type 재활용
type Player = {
  name: string;
  //age?: number;
  age?: Age;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
};

type Age = number;

//함수의 return 타입 지정

function playerMaker(name: string) : Player {
  return {
    //name: name,
    name,
  };
}

const nico2 = playerMaker("nico");
nico2.age = 12;

const playerMaker2 = (name:string) : Player => ({name})