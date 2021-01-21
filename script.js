/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1
// Chunky Monkey (write a function that splits an array into groups the length of size and returns them as a 2 dimensional array)

const  chunkArrayInGroups = (arr, size) => {
    let groupArr = []
    while (arr.length > 0) {
        groupArr.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return groupArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
// expected output [["a","b"],["c","d"]]

// Challenege 2
// Slasher Flick (return the remaining elements of an array after chopping off (n) elements from the head)

const slasher = (arr, howMany) => {
    arr.splice(0, howMany);
    return arr
}

console.log(slasher([1, 2,3], 2));
// expected output [3]

// Challenge 3
// Mutations (return true if the string in the first element of the array contains all of the letters of the string in the second element of the array)

const mutation = (arr) => {
    let wordOne = arr[0].toLowerCase()
    let wordTwo = arr[1].toLowerCase()

    for (let i=0; i < wordTwo.length; i++) {
        if(wordOne.indexOf(wordTwo[i]) === -1) {
            return false
        }
    } 
    return true
}

console.log(mutation(["hello", "hey"]))
// expected output False