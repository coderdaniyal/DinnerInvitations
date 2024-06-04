// Array to store the names of friends
var names = ["Omair", "Junaid", "Arbaz", "Haseeb"];
// Print the number of people being invited to dinner
console.log("You are inviting ".concat(names.length, " people to dinner."));
// Print a personalized message to each friend
names.forEach(function (name) {
    console.log("Hello, ".concat(name, "! Hope you are having a great day!"));
});
