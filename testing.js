// (1) Write a function which count the number of occurrence of a word in a paragraph or a sentence.
//The function countWords takes a paragraph and word as parameters.
function countWords(paragraph,words){

    //split the paragraph into an array from the spaCe
    let splitParagraph = paragraph.split(" ");
    //create a variable and store the number of occurance in it
    let countWord = 0;

    //iterate through the splitparagraph array
    for (let i = 0; i <splitParagraph.length; i++ ){
        if(splitParagraph[i].match(words)){
            //if the condition id true add 1 to the variable
            countWord++;
        }
    }
        return countWord;
}

console.log(countWords("I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.","to"));

//
//declaration function 
//dec is just to make the name different  

const  countWordDec = function (paragraph,words){

    //create a regular expression 
    const pattern = new RegExp(words, 'gi');

    //now using match method match the pattern to the paragraph
    const matches = paragraph.match(pattern);
    let count = matches === null ? 0 : matches.length;

    return count;
}

console.log(countWordDec("I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.","love"));
//Write a function which takes an array parameter and returns an array of the data types of each item:

function checkDataTypes(array){

    //create an empty array
    let resultArray = [];

    //iterate through the array passed in the function 
    for( let i = 0; i <array.length; i++ ){
        //push to the empty array
        resultArray.push(typeof array[i]);
    }
    return resultArray;
}

console.log(checkDataTypes(['Asabeneh', 100, true, null, undefined, {job:'teaching'}]));


// Create a function which filter ages greater than 18.
const ages = [35, 30, 17, 18, 15, 45];

function agesGreaterEighteen (array){
    
    //create an empty array 
    const filteredAges = [];

    //iterate throught the array passed in function
    for (let i = 0; i < array.length; i++){
        //check if array item is greater than 10 or not 
        if (array[i] > 18){
            //push to the empty array
            filteredAges.push(array[i]);
        }
    }
    return filteredAges;
}

console.log(agesGreaterEighteen(ages));

// (4) Write a function which remove an item or items from the middle of the array and replace with two items

function removeAndReplaceArray(array, item1, item2) {
    
    for (var i = 0; i < array.length; i++){

        //const evenMiddleItem = array.indexOf();
        if(array.length % 2  === 0){

            array.splice(Math.floor(array.length/2 -1), 2, item1 , item2);
            
        }

        if(array.length % 2 !== 0){

            array.splice(Math.floor(array.length/2), 1, item1, item2);
        }

    }


    return array;
}

console.log(removeAndReplaceArray(ages,22,22));

// (5) Write a function which calculate the average age of the group.

function calculateAverageAge(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){

        sum = sum + array[i];

    }

    averageAge = sum / array.length;
    return averageAge;
}

console.log(calculateAverageAge(ages));

// (6) Write a function which can generate a random Finnish car code. 

function genCarPlateNum(){
    var first = "";
    var last = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";

    for(let i = 0; i < 3; i++){

        first += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    for (let i = 0; i < 3; i++){

        last += numbers.charAt(Math.floor(Math.random() * numbers.length));

    }
    
    return first + "-" + last;
}

console.log(genCarPlateNum());


// (7) social security number 

function genSocialSecurityNum(){
    var first = "";
    var last = "";
    var lastLetter = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";

    for(let i = 0; i < 6; i++){

        first += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    for (let i = 0; i < 3; i++){

        last += numbers.charAt(Math.floor(Math.random() * numbers.length));

    }

    for (let i = 0; i < 1; i++){

        lastLetter += letters.charAt(Math.floor(Math.random() * letters.length));

    }

    
    return first + "-" + last + lastLetter;
}

console.log(genSocialSecurityNum());


//This function is more correct and close to finnish system
function finSocialSecurityNumber(){

    //social security number example ddmmyy-zzzc
    let dd = Math.floor(Math.random() * 31) + 1;
    let mm = Math.floor(Math.random() * 12) + 1;
    let yy = Math.floor(Math.random() * 99) + 1;
    let zzz = Math.floor(Math.random() * 999) + 1;
    let lastCharacter = "";

    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //randomly choose the last character 
    for (let i = 0; i < 1; i++){

        lastCharacter += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    if(dd<10){
        dd = `0${dd}`;
    }
    if(mm<10){
        mm = `0${mm}`;
    }
    if(yy<10){
        yy = `0${yy}`;
    }

    if(zzz < 10){
        zzz = `00${zzz}`;
    }else if(zzz < 100){
        zzz = `0${zzz}`;
    }

    return `${dd}${mm}${yy}-${zzz}${lastCharacter}`;

}
console.log(finSocialSecurityNumber());
// (8)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

function addProduct(item){
    shoppingCart.push(item);
}
addProduct("paper");

function removeProduct(){
    shoppingCart.pop();
}
removeProduct();

function editProduct(index, item){
    shoppingCart.splice(index, 1, item);

}
editProduct(3, "honey");
console.log(shoppingCart);

// (9) 
// The following todoList has three tasks.
// Create an addTask, removeTask and editTask functions to  modify the todoList.
// Add, remove or edit at least on task

const todoList = [
    {
        task: 'Create a object',
        deadline: '10/03/2019 15:30',
        completed: true
    },
    {
        task: 'Make the object work',
        deadline: '10/03/2019 15:30',
        completed: false
    },
    {
        task: 'take a break',
        deadline: '10/03/2019 15:30',
        completed: true
    }
];

function addTask (task){
    todoList.push(task);
}

function removeTask(){
    todoList.pop();
}

function editTask(index,...items){

    todoList.splice(index, 1, ...items);
}

addTask(
    {
    task:'this is not good idea',
    deadline: '13/03/2019',
    completed: false
});

removeTask();

editTask(1, {

    task: 'need to learn more',
    deadline: '23/03/2019 14:30',
    completed: false
},
{

    task: 'listen to podcasts',
    deadline: '23/03/2019 14:30',
    completed: false
}
);
console.log(todoList);
    


// (10) 

function checkUniqueness(arr){

    for(i = 0; i < arr.length; i++){

        if(arr.includes(arr[i], i + 1)){
            return "array is not unique";
        }

    }
    return "array is unique";
}
//works fine checking last element but doesnot work 
// if there is same element in middle
console.log(checkUniqueness([1,4,6,2,3]));


///
////functional programming starts here 
var countries = ['Finland', 'Iceland', 'Sweden', 'Norway'];

const filteredWords = countries.filter(function (country){
	return country.includes('land');
});

console.log(filteredWords);