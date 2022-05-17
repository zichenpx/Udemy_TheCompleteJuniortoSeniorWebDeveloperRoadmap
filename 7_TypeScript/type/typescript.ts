// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favoriteQuote: string = `I'm not old, I'm only ${age}.`

// array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// objecy
let wizard: object ={
  name: "John"
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string, number];
basket = ['basketball', 10];

//Enum or ennumerable.
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
alert(sizeName); // Displays 'Medium' as its value is 2 above

//Any - !!!!!!!!! BE CAREFUL
let whatever: any = 'aaaaghhhhhh noooooo!';

//void - no return
let sing = (): void => console.log('Lalalala')

//never
/* Never type actually tests two things, one is that a function never 
  returns, and the other one is that a very variable under some sort 
  of a type card is never true. */
let error = (): never => {
  throw Error('blah!');
}

// Type Assertions:
let ohhithere: any = "OH HI THERE";

let strLength: number = (ohhithere as string).length;

//Interface
// https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
// Army type Alliss, as we like to call it, don't create a new name.
// type RobotArmy {
//   count: number,
//   type: string,
//   magic?: string
// }
//  interfaces create a new name that we can use everywhere, such as the robots
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy) =>{
  console.log('FIGHT!');
}
let fightRobotArmy2 = (robots: {count: number, type: string, magic?: string}) =>{
  console.log('FIGHT!');
}

// Assertion
// https://basarat.gitbook.io/typescript/type-system/type-assertion
interface CatArmy {
  count: number,
  type: string,
  magic?: string
}

let dog = {} as CatArmy
dog.count

//Function
let fightRobotArmyF = (robots: RobotArmy): void =>{
  console.log('FIGHT!');
}
let fightRobotArmy2F = (robots: {count: number, type: string, magic?: string}): void =>{
  console.log('FIGHT!');
}

// *** Classes
class Animal {
    private sing: string;
    constructor(sound: string) {
        this.sing = sound;
    }
    greet() {
        return "Hello, " + this.sing;
    }
}

let lion = new Animal("Lion");
// lion.sing


//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.

//Union Type
let confused: string | number = 'hello'




// ---------
// const sum = (a : number, b : number) => {
//   return a + b;
// }

// const answer = sum(4, 5);

// console.log(answer);
