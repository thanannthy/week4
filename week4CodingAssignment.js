//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

var ages =[3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.

var lastElement = ages.length - 1;
var result = ages[lastElement] - ages[0];
console.log("Last Element:", result); 

// We can not write console.log(lastElement) directly since it will count the number of the array and minus 1 which will result in 7. 

// B.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.unshift(12);

console.log(ages);

// We can you age.push or age.unshift to add element to the array.

// C. Use a loop to iterate through the array and calculate the average age.

var ages = ages
var sum = 0;
var agesOfTheLength = ages.length;
for ( var i = 0; i < agesOfTheLength; i++) {
  sum += ages[i];  
}
var average = sum / agesOfTheLength;
console.log("Average Age is", average);

//  the loop form was derived from the lesson on week 3, the only different is to add var average = sum/ages.length; to find average age. 

// 2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

var arrayNames = names;
var totalLetter = 0;
var numberOfNames = names.length;
for (var i = 0; i < numberOfNames; i++) {
    totalLetter += names[i].length;
 }
var averageLetters = totalLetter/ numberOfNames; 
console.log("Average number of leters per name", averageLetters.toFixed(2));

// B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

var arrayNames = names;
var concatenatedNames = '';
for (var i = 0; i < numberOfNames; i++) {
    concatenatedNames += names[i] +  ' ' ;
}
console.log("Concatenated names:" , concatenatedNames.trim());
// I used the same loop from task a. and  add  var concatenation to link all array value in one single string. 

// 3. How do you access the last element of any array?
// I can access the last element of any array by Ex: array[array.length - 1 ];

// 4. How do you access the first element of any array?
// I can access the last element of any array by Ex: arrayElement= array [0];

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// new array created
var names = ["Kelly", "Sam", "Kate"];
var nameLengths = []; // this code is to store the lengths of the names.
for (var i = 0; i < names.length; i++) { // use this loop to loop each name in the names array
    nameLengths.push(names[i].length); //this is used to retrieve the name and length from the arrayNames.
}
console.log(nameLengths); // print result 



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

var nameLengths // nameLengths is a var from question 5. 
var sum = 0; // begin a variable sum to store the sum of all element in the array from the first element which is 0. 
for (var i = 0; i < nameLengths.length; i++) { // run the loop through each element in nameLengths array.
    sum += nameLengths[i]; // add the current element to the sum Var. 
}
console.log("Sum of all the elements is", sum); // print result

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function num7(word, n) {
    var conCatWord = '' ; // create an empty string to store the concatenated word.
for (var i = 0; i < n; i++ ) { //create loop n number of times
    conCatWord +=  word;
}
return conCatWord; // used to return the concatenated string 
}

var result = num7( "Hello", 3); // call function num7 with "Hello" and 3 times.
console.log("Test result:", result); 

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function writefullname(firstName, lastName) { // Function is defined with two parameters: firstName and lastName.
    var fullName = firstName + " " + lastName; // concatenate the firstName and lastName with a space in between. 
    return fullName;
}
var result = writefullname('firstName', 'lastName'); // call the function with argument firstName and lastName in the Variable result. 
console.log(result);

//  
// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(numbers) { // define the function that take an array of numbers.
    var sum = 0; // store the cumulative sum of number
    for (var i = 0; i < numbers.length; i++) { // loop through each number in the array
        sum += numbers[i]; // add each number to the sum/
    }
    return sum > 100; // if the return is greater than 100.
}
// call the sumGreaterThan100 function with different array of numbers.
var test1 = sumGreaterThan100([30,40,50]); // this should return true since it is greater than 100.
var test2 = sumGreaterThan100([10,10,10]); // this should return false since it is smaller than 100.
// print results...
console.log(test1);
console.log(test2);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calAverage(numbers) { // define a function that take an array of numbers.
    var sum = 0; //begin a variable sum to store cumulative sum of numbers. 
    
    for (var i = 0; i < numbers.length; i++) { // loop through each number in the array
      sum += numbers[i]; // add each number to the sum
    }
    
    var average = sum / numbers.length; // here is to calculate for the average. 
    return average; // return the result as the average.
  }

  // call the function with the first array and store results in result 1 and 2.
  var result1 = calAverage([1,2,3,4,5]);
  var result2= calAverage([10,20,30,40]);
  // print result
  console.log(result1);
  console.log(result2);
  
  //11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

  function compareAverages(arr1,arr2) {
    var sum1 = 0; //set sum1 to store cumulative sum of the arr1
    var sum2 = 0 //set sum1 to store cumulative sum of the arr2
    for ( var i = 0; i < arr1.length; i++) { //oop through each number in the arr1
        sum1 += arr1[i]; // add each element of arr1 to sum1
    }
    for (var u = 0; u < arr2.length; u++) { //loop through each number in the arr2
        sum2 += arr2[u];  // add each element of arr2 to sum2
    }
    var average1 = sum1 / arr1.length; //Calculate the average of arr1
    var average2 = sum2 / arr2.length; // Calculate the average of arr2
    return average1 > average2; //returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
  }
  var result1 = compareAverages([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
  var result2 = compareAverages([15, 25, 35], [5, 10, 15, 20, 25]);
  console.log(result1);
console.log(result2);
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) { // define function if it is hot outside and there is enough money in the pocket.
    if (isHotOutside && moneyInPocket > 10.50) {
      return " will buy a drink."; // Return a string if both conditions are true or met.
    } else {
      return "won't buy a drink."; // Return a string otherwise
    }
  }
  var result1 = willBuyDrink(true, 15.75); 
  console.log(result1);
 
 

//   13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Farmers need to choose a type of orange to grow depend on how much of the seeds cost per bag. If a bag of seeds of tangerine is less than $3, they will choose tangerine, otherwise grapefruit. 
function chooseOrangeType(tangerine, grapefruit) {
    if (tangerine < 3) { 
        return " grow tangerine."; 
    } else {
        return " grow grapefruit.";
    }
}
var result1= chooseOrangeType(2,4) // the cost of tangerine is $2 while grapefruit is $4.
console.log(result1); // Farmers expect to grow tangerine. 
