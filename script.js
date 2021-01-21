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
    console.log(groupArr)
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
