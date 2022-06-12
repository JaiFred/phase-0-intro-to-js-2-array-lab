// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
const name1 = 'Ralph'
const name2 = 'bob'
const destructivelyAppendCat = (name1) => {
    cats.push(name1);
    return cats;
}

const destructivelyPrependCat = (name2) => {
    cats.unshift(name2);
    return cats;
}

const destructivelyRemoveFirstCat = (array) => {
    cats.shift(array);
    return cats;
}

const destructivelyRemoveLastCat = (array) => {
    cats.pop(array);
    return cats;
}

const appendCat = (array) => {
    let newArray = [...cats];
    newArray.push(array);
    return newArray;
}

const prependCat = (array) => {
    let newArray = [...cats]
    newArray.unshift(array);
    return newArray;
}

const removeLastCat = (array) => {
    let newArray = [...cats]
    newArray.pop(array);
    return newArray;
}

const removeFirstCat = (array) => {
    let newArray = [...cats]
    newArray.shift(array);
    return newArray;
}