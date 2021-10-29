/*
* Programming Quiz: Software Engineering Students
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `softwareEngineeringStudents`
* - The variable `softwareEngineeringStudents` should be an array containing the values of 10 students from your class
* - Your code should print `softwareEngineeringStudents` to the console
*
*/


const softwareEngineeringStudents = ['Kingsley', 'Pere', 'Femi', 'Blossom', 'Stephen', 'Lanre', 'Tobi', 'Toki', 'Salim', 'Ebi'];

console.log(softwareEngineeringStudents);



/*
* Programming Quiz: Building the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - The variable `crew` should be an array containing the Serenity\'s crew
* - Your code should print `crew` to the console as an array. Do not iterate over the elements.
*
*/


let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);



/*
* Programming Quiz: The Price is Right
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `prices`
* - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
* - Your code should print `prices` to the console as an array. Do not iterate over the elements.
*/


const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 5.89;
prices[2] = 70.67;
prices[6] = 58.93;

console.log(prices);



/*
* Programming Quiz: Colors of the Rainbow
*
* Use only the splice() method to modify the rainbow variable:
*  - remove "Blackberry"
*  - add "Yellow" and "Green"
*  - add "Purple"
*/



const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);



/*
* Programming Quiz: Quidditch Cup
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a function `hasEnoughPlayers()`
* - Your function `hasEnoughPlayers()` should accept one parameter
* - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
* - Return true if the array size is atleast 7, otherwise false.
*/


const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(){
if(team.length >= 7){
    return true;
}else{
    return false;
}
}
console.log(hasEnoughPlayers(team));



/*
* Programming Quiz: Joining the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
* - Your code should use the `push()` method to add new members to the `crew` array
* - Print the array on the console at the end
*/



const creew = [captain, second, pilot, companion, mercenary, mechanic];

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";

creew.push(doctor, sister, shepherd);

console.log(creew);