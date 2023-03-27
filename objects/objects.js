
let testArray = [];

let sampleObject = {
    name: "Mounir",
    age: 30,
    occupation: "teacher"
}
testArray.push(sampleObject);

const objectMaker = (newname, newage, newoccupation) => {
    let newObject = {
        name: newname,
        age: newage,
        occupation: newoccupation
    }
    console.log(newObject);
    return newObject;
}

objectMaker('test', 400, 'tester');
testArray.push(objectMaker('test2', 34, 'tester'))
module.exports = {testArray, sampleObject, objectMaker};
