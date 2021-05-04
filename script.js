/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1 //
// Chunky Monkey (write a function that splits an array into groups the length of size and returns them as a 2 dimensional array)

const  chunkArrayInGroups = (arr, size) => {
    let groupArr = []
    while (arr.length > 0) {
        groupArr.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return groupArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
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
mutation(["hello", "hey"])

// expected output False

// Challenge 4
// Falsy Bouncer (remove all falsy value from an array)

const bouncer = (arr) => {
    let nonFalse = []

    for (let x of arr) {
        if(x) {
            nonFalse.push(x)
        }
    }
    return nonFalse
}

bouncer([7, "ate", "", false, 9])
// expected output [7, "ate", 9]

// Challenge 5
// Seek and Destroy (You will be provided with an initial array, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments)

const destroyer = (arr) => {
    let args = Array.from(arguments)
    args.splice(0, 1)
    var targets = args

    return arr.filter((num) => {
        return targets.indexOf(num) === -1
    })
    

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// expected output [1, 1]