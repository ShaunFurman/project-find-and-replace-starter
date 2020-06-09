

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
   


const rowElements = document.querySelectorAll(".row")
   
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


 document.addEventListener("click", function(){
        let find = findInput.value ;
        let replace = replaceInput.value;
     for (let rowIndex = 0; rowIndex< rowElements.length; rowIndex += 1) {
        const cellArrays = getCellElements(rowElements[rowIndex])  
        for (let cellIndex = 0; cellIndex < cellArrays.length; cellIndex += 1){
            if (cellArrays[cellIndex].innerHTML.includes(find)){
              const newWord = cellArrays[cellIndex].innerHTML.replace(find, replace)
              
              cellArrays[cellIndex].innerHTML = newWord
              let replacementsMade = newWord.value
              console.log("replacements Made " + newWord.value)
            }
        }  
    }})
// YOUR CODE GOES HERE


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
