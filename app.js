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