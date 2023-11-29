const meals = ["artichoke", "bbq", "chili", "donuts"];

// .push adds to an array
meals.push ('eggs');
meals.push ('fajitas');
// console.log (meals);

// .pop removes the last item in an array
const lastMeal = meals.pop();
// console.log (lastMeal);
// console.log(meals);
//unshift adds item to beginning of an array
meals.unshift("tacos");
const firstItem = meals.shift();
// console.log(meals, firstItem);

const hasBbq = meals.includes("bbq");
// console.log(hasBbq);

const itemIdx = meals.indexOf("chili");
// console.log(itemIdx);

const middleItems = meals.slice(1,4);
// console.log(middleItems);

const mealsCopy = [...meals];

mealsCopy.splice(2,0, "Hot dogs");
console.log(mealsCopy);

// const students = [];
// students[0] = "Jane"
// students.push ("bob");
// // accessing the first item in an array
// console.log (students[0]); 