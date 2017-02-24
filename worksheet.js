// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function(input){
	var sq = []
    for (var i=0;i<input.length;i++){
    	sq += input[i]*input[i]
    }
    return sq
}
log(squareDance([6]))

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.
var nicer = function(input){
    var wholeSentence = ''
    var inputArray = input.split(' ')
	for(var i=0;i<inputArray.length; i++){
        if(inputArray[i] === 'heck'||inputArray[i] === 'dang'||inputArray[i] ==='crappy'||inputArray[i] === 'darn'){
        	inputArray.splice(i,1)
        }
    
    }
    return inputArray.join(' ')
}
log(nicer('i like got darn fried rice'))


// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
var upperCase = function(input){
	var finalInput = input.charAt(0).toUpperCase() + input.slice(1)
	return finalInput
 }

function capitalizeEachWord(str) {
	var newString = str.split(' ')
    for(var i = 0;i<newString.length;i++){
    var applyCap += newString[i].concat('')
		//log(upperCase(newString[i]))
    }
    return applyCap
}

log(capitalizeEachWord('will the real slim shady please stand up'))

// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)


// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 


// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


