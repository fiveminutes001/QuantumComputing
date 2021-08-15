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