const fave_food = [ "Adobo", "Takoyaki", "Chocomalt" ];
fave_food.push("Cake");
fave_food.shift();
console.log("My favorite foods are:");
    for (food of fave_food) {
        console.log(food);
}
likeFoods = fave_food.map(food => "I like" + food);

console.log(likeFoods);