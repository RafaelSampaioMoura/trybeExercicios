// Exercício 01

class Car {
  constructor(
    public brand: string,
    public color: string,
    public doors: number
  ) {}

  public honk(): void {
    console.log("FWOOOOOOOOOOOM!");
  }

  public turnOn(): void {
    console.log("O carro ligou!");
  }

  public turnOff(): void {
    console.log("O carro desligou!");
  }

  public speedUp(): void {
    console.log(`O carro acelerou!`);
  }

  public speedDown(): void {
    console.log(`O carro desacelerou!`);
  }

  public stop(): void {
    console.log("O carro parou!");
  }

  public turn(direção: string): void {
    console.log(`O carro virou na direção ${direção}`);
  }
}

// Exercício 02

const newCar = new Car("Ferrari", "Vermelha", 4);

function trip() {
  newCar.turnOn();
  newCar.speedUp();
  newCar.turn("esquerda");
  newCar.turn("direita");
  newCar.turn("direita");
  newCar.speedDown();
  newCar.stop();
  newCar.turnOff();
  newCar.turnOn();
  newCar.speedUp();
  newCar.turn("direita");
  newCar.turn("esquerda");
  newCar.turn("direita");
  newCar.speedDown();
  newCar.stop();
  newCar.turnOff();
}

trip();

//Exercício 03

type Slices = {
  slices: 4 | 6 | 8;
};

interface Pizza {
  flavor: string;
  slices: Slices;
}

const calabresa: Pizza = { flavor: "Calabresa", slices: { slices: 8 } };
const marguerita: Pizza = { flavor: "Marguerita", slices: { slices: 8 } };
const nutella: Pizza = { flavor: "Nutella", slices: { slices: 8 } };

//Exercício 04

type SaborComum = {
  flavor: "Calabresa" | "Frango" | "Pepperoni";
  slices: 4 | 6 | 8;
};

type SaborVegetariano = {
  flavor: "Marguerita" | "Palmito" | "Cogumelo";
  slices: 4 | 6 | 8;
};

type SaborDoce = {
  flavor: "Nutella" | "Goiabada com Queijo" | "Marshmallow";
  slices: 4;
};

interface PizzaComum {
  pizza: SaborComum;
}

interface PizzaVegetariana {
  pizza: SaborVegetariano;
}

interface PizzaDoce {
  pizza: SaborDoce;
}

const pedido1: PizzaComum = { pizza: { flavor: "Calabresa", slices: 4 } };
const pedido2: PizzaComum = { pizza: { flavor: "Frango", slices: 8 } };
const pedido3: PizzaComum = { pizza: { flavor: "Pepperoni", slices: 6 } };
const pedido4: PizzaVegetariana = { pizza: { flavor: "Cogumelo", slices: 4 } };
const pedido5: PizzaVegetariana = { pizza: { flavor: "Palmito", slices: 6 } };
const pedido6: PizzaDoce = { pizza: { flavor: "Marshmallow", slices: 4 } };

// Exercício 5

const array = new Array();

function myFilter<T>(
  arr: T[],
  callback: (item: T, index?: number, arr?: T[]) => boolean
): T[] {
  let newArray: Array<T> = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (callback(element)) {
      console.log(arr.slice(index, index + 1));
      newArray.push(...arr.slice(index, index + 1));
    }
  }
  return newArray;
}

const myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = myFilter(myArr, (element) => element > 3);
console.log(newArr);
