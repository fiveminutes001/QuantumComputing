document.addEventListener('click', function () {
    console.log("you've clicked");
})

const links = document.querySelectorAll('a');
const thirdLink = links[2];

links.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Look, ma! We didn't navigate to a new page!");
});
});

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 4; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

//Object Oriented Js course stuff
let cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
      console.log('Meow!');
    },
    greet: function (person) {
      console.log('Hello, ' + person + '!');
    }
  };
  
  cat.color = 'gray';
  
  cat.sayName = function () {
    console.log(cat.name);
  };
  
  console.log(cat);
  
  delete cat.greet;
  
  cat.greet();
  // TypeError: cat.greet is not a function
  
  cat.greet;
  
  console.log(cat);

  cat.age;
  
  cat.meow;
  
  cat.meow();
  
  cat.greet('Andrew');
  // 'Hello, Andrew!'

  const dog = {
    name: 'Jodi',
    age: 7,
    ageOneYear: function () {
      this.age += 1;
      console.log('Current age: ' + this.age);
    },
    woof: function () {
      console.log(this.name + " says 'woof!'");
    },
    whatIsThis: function () {
      console.log(this);
    }
  };
  
  dog.whatIsThis();
  
  dog.woof();
  
  dog.ageOneYear();
  
  dog.age;

  const chameleon = {
    eyes: 2,
    lookAround: function () {
      // debugger
      console.log(`I see you with my ${this.eyes} eyes!`);
    }
  };
  
  chameleon.lookAround();
  
  function whoThis () {
    // debugger
    this.trickyish = true;
  }
  
  whoThis();

    
const returnsAFunction = function () {
    return function () {
      console.log('Hello from inside a function');
    };
  };
  
  const newFunction = returnsAFunction();
  
  newFunction();
  
  returnsAFunction()();

    
function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
  }
  
  function returnsThree() {
    return 3;
  }
  
  let result = callAndAdd(2, returnsThree);
  
  console.log(result);
  // 5

  /* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function (music){
   return (music.name + " by " + music.artist + " sold " + music.sales + " copies");
});

console.log(albumSalesStrings);

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(function (music) {
    return (music.name.length >= 10 && music.name.length <= 25);
});

console.log(results);

//Closure (= scope at a given time = the function and its  lexical environment at a given time)
  
const number = 3;

function myFunction () {
  const otherNumber = 1;

  function logger() {
    console.log(otherNumber);
  }

  return logger;
}

const result = myFunction();

result();
// 1

function myCounter() {
    let count = 0;
  
    return function () {
      count += 1;
      return count;
    };
  }
  
  let counter = myCounter();
  
  counter();
  // 1
  
  counter();
  // 2
  
  counter.count;
  // undefined
  
  count;
  // undefined

  function expandArray (){
    let myArray = [1,1,1];
    
    return function (){
        myArray.forEach(function(el,ind,ar){ 
        ar[ind] += 1;
        })
       return myArray;
    }
}

let a=expandArray();

a();

function expandArray2 (){
    let myArray2 = [1,1,1];
    
    return function (){
        
        myArray2.push(1);
    
       return myArray2;
    }
}

(function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');

// alerts 'Hi, Andrew'

(function (x, y){
    console.log(x * y);
  }
)(2, 3);

// 6

const myFunction = (
    function () {
      const hi = 'Hi!';
      return function () {
        console.log(hi);
      }
    }
  )();

  (function sayHi(){
    alert('Hi there!');
  }
 )();
 
 // alerts 'Hi there!'

 (function sayHi(){
    alert('Hi there!');
 }());
 
 // alerts 'Hi there!'

 function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
  }
  
  let developer = new SoftwareDeveloper();
  
  let otherDeveloper = {favoriteLanguage: 'JavaScript'};

  function Hero(name, role) {
    this.name = name;
    this.role = role;
  
    this.introduce = function () {
      console.log(`My name is ${this.name} and I am a ${this.role}.`);
    };
  }
  
  let taylor = new Hero('Taylor', 'mother');
  
  let riley = new Hero('Riley', 'coach');
  
  taylor.name;
  riley.role;
  
  taylor.introduce();
  riley.introduce();

  function Developer(name) {
    this.name = name;
  }
  
  let dev = new Developer('Veronika');
  
  typeof dev
  // "object"
  
  dev instanceof Developer;
  // true

  const cat = {
    name: 'Bailey'
  };
  
  function sayHello(message) {
    console.log(`${message}, ${this.name}`);
  }
  
  sayHello.call(cat, 'Nice to see you');
  
  sayHello.apply(cat, ['Hello']);

  function invokeTwice(cb) {
    cb();
    cb();
 }
 
 const dog = {
   age: 5,
   growOneYear: function () {
     this.age += 1;
   }
 };
 
 dog.growOneYear();
 // (this works as expected)
 
 dog.age;
 // 6
 
 invokeTwice(dog.growOneYear);
 // undefined
 
 dog.age;
 // 6

 function invokeTwice(cb) {
    cb();
    cb();
 }
 
 const dog = {
   age: 5,
   growOneYear: function () {
     this.age += 1;
   }
 };
 
 const myGrow = dog.growOneYear.bind(dog);
 
 dog.age;
 // 7

 // function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }

function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
      console.log(`${this.name} says woof!`);
  };
  
  dog1 = new Dog(2, 60, 'Java');
  
  dog2 = new Dog(4, 55, 'Jodi');
  
  dog1.bark();
  
  dog2.bark();

  const myArray = [1, 2, 3];

myArray.join('');

console.dir(myArray);

function Animal (name) {
    this.name = name;
  }
  
  Animal.prototype.walk = function () {
    console.log(`${this.name} walks!`);
  };
  
  function Cat (name) {
    Animal.call(this, name);
    this.lives = 9;
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.meow = function () {
    console.log('Meow!');
  };
  
  const bambi = new Cat('Bambi');
  
  bambi.meow();
  bambi.walk();
  
  bambi.name;

  const duck = {
    hasBill: true,
    feet: 'orange'
  };
  const beaver = {
    hasTail: true
  };
  const otter = {
    hasFur: true,
    feet: 'webbed'
  };
  
  const platypus = Object.assign({}, duck, beaver, otter);
  
  console.log(platypus);

  function Radio(mode) {
    let on = false;
  
    return {
      mode: mode,
      turnOn: function () {
        on = true;
      },
      isOn: function () {
        return on;
      }
    };
  }
  
  let fmRadio = Radio('fm');
  
  fmRadio.on;
  //undefined
  
  fmRadio.isOn();
  // false
  
  fmRadio.turnOn();
  
  fmRadio.isOn();

  function IceCreamFactory(obj) {
    let isCold = true;
  
    return Object.assign({}, obj, {
      melt: function () {
        isCold = false;
      },
      isCold: function () {
        return isCold;
      }
    });
  }
  
  let iceCream = IceCreamFactory({});
  
  function ConeFactory(obj) {
    let isDry = true;
  
    return Object.assign({}, obj, {
      soggy: function () {
        isDry = false;
      },
      isDry: function () {
        return isDry;
      }
    });
  }
  
  let iceCreamCone = IceCreamFactory(ConeFactory({}));
  
  console.log(iceCreamCone);

  //

  function PrototypicalGreeting(greeting = "Hello", name = "World") {
    this.greeting = greeting
    this.name = name
  }
  
  PrototypicalGreeting.prototype.greet = function() {
    return `${this.greeting}, ${this.name}!`
  }
  
  const greetProto = new PrototypicalGreeting("Hey", "folks")
  console.log(greetProto.greet())

//is the same as

  class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
      this.greeting = greeting
      this.name = name
    }
  
    greet() {
      return `${this.greeting}, ${this.name}!`
    }
  }
  
  const classyGreeting = new ClassicalGreeting("Hey", "folks")
  
  console.log(classyGreeting.greet());

  //
  let myModule = (function (){
    function privateMethod (message) {
      console.log(message);
    }
  
    function publicMethod (message) {
      privateMethod(message);
    }
  
    return {
      publicMethod: publicMethod
    };
  })();
  
  let myModule2 = (function () {
    function privateMethod (message) {
      console.log(message);
    }
  
    return {
      publicMethod: function (message) {
        privateMethod(message);
      }
    };
  })();
  
  let person = (function () {
    let privateAge = 0;
    let privateName = 'Andrew';
  
    function privateAgeOneYear() {
      privateAge += 1;
      console.log(`One year has passed! Current age is ${privateAge}`);
    }
  
    function displayName() {
      console.log(`Name: ${privateName}`);
    }
  
    function ageOneYear() {
      privateAgeOneYear();
    }
  
    return {
      name: displayName,
      age: ageOneYear
    };
  })();
  