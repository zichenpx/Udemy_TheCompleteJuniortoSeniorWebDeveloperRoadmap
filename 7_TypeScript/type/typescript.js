// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favoriteQuote = "I'm not old, I'm only ".concat(age, ".");
// array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// objecy
var wizard = {
    name: "John"
};
// null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ['basketball', 10];
//Enum or ennumerable.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
alert(sizeName); // Displays 'Medium' as its value is 2 above
//Any - !!!!!!!!! BE CAREFUL
var whatever = 'aaaaghhhhhh noooooo!';
//void - no return
var sing = function () { return console.log('Lalalala'); };
//never
/* Never type actually tests two things, one is that a function never
  returns, and the other one is that a very variable under some sort
  of a type card is never true. */
var error = function () {
    throw Error('blah!');
};
// Type Assertions:
var ohhithere = "OH HI THERE";
var strLength = ohhithere.length;
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
//Function
var fightRobotArmyF = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2F = function (robots) {
    console.log('FIGHT!');
};
// *** Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("Lion");
// lion.sing
//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
var x = 3;
// automatimally detexts x is a number.
//Union Type
var confused = 'hello';
// ---------
// const sum = (a : number, b : number) => {
//   return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);
