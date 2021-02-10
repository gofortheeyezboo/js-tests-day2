// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    let ph = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]
           
        }
        arr[arr.length - 1] = ph
        
        return arr
    }

    



// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
    let dupes = {
        
    }
    let largeNum = 0
    let dupesExist = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == largeNum && largeNum != 0){
            largeNum = arr[i]
            if(dupes.hasOwnProperty(largeNum)){
                dupes[arr[i]]++
            }else{
                dupes[arr[i]] = 2
            }
            dupesExist = true
        }
        if(arr[i] > largeNum){
         largeNum = arr[i]
        }

    }
    if(dupesExist == true){
        return dupes
    }else{
        return largeNum
    }
}


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr.length
    }
    return arr
}
// ------------------------------------------



//4. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
    for(let i = 0; i < flights.length; i++){
        if(flights[i].to == destination.toUpperCase()){
            if(firstClass == true){
                return flights[i].prices['firstClass']
            }else{
                return flights[i].prices['standard']
            }
        }
    }

}


// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
let nope = {
    error: 'No user with that ID'
}
    for(let i = 0; i < staff.length; i++){
    if(staff[i].id == id){
        return staff[i]
    }
}
return nope
}


// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(name) {
}
