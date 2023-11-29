
const perfectTemp = 125
let teaTemp = 130
while (teaTemp > perfectTemp){
    teaTemp--;//stopping condition
    console.log(`Tea Temperature is now ${teaTemp}`)
}

// const students = ["Alice", "Bob", "Charlie", "Diana"];
// let i = 0
// while(i < students.length){
//     console.log(students[i]);
//     if (students[i]==="Bob"){
//         console.log(`Hi ${students[i]}`);
//         break;
//     }
//     i ++
// }

// let i = 0
// while (i <= 5){
//     console.log(i);
//     i++;
// }
const meals = ["artichoke", "bbq", "chili", "donuts"];
// for(let i=0; i <meals.length; i ++){//make sure you put them in the right order
//     console.log(meals[i]);
// }
// for(let i=meals.length-1; i >=0, i++){
//     console.log(meals[i]);
// }

for(let meal of meals){
    console.log(meal);
    if(meal === "chili"){
        console.log("Baby It's cold outside");
        break;
    }
}
