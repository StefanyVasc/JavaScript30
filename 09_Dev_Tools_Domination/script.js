const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// regular
console.log("hello");

// interpolated
console.log("hello i am a %s string!", "👾");

//styled

console.log(
  "%c i am some great text",
  "font-size: 30px; background: red; text-shadow: 10px 10px 0  blue;"
);
// warning
console.warn("OH NOO");

// error
console.error("shit!");

// info
console.info("crocodiles eat 3-4 people per year");

// testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "thats wrong!");

// clearing
//console.clear();

// viewing DOM elements
console.log(p);
/* console.dir(p); */

// grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);

  console.groupEnd(`${dog.name}`);
});

// counting
console.count("wes");
console.count("wes");
console.count("Steve");
console.count("wes");
console.count("Jessie");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/StefanyVasc")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
