let emptyArray = [];
let hobbies = ["Chilling on the bed", "Walking", "Instagramming", "Youtubing", "Reading", "Playing android games"];
let numbers = [9, 5, 2, 50, 500];
console.log(numbers[1]);
console.log(hobbies[hobbies.length - 1]);
hobbies.push("There is no fake hobby");
console.log(hobbies[hobbies.length - 1]);
console.log(hobbies.length);
hobbies.splice(-2, 2);
console.log(hobbies.length);
for (var i = 0; i< hobbies.length; i++){
    console.log(hobbies[i]);
};
hobbies.length = 0;
