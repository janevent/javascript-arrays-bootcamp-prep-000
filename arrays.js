var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  return [element, ... array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}
function addElementToEndOfArray(array, element){
  [... array, element];
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}
function accessElementInArray(array, index){
  console.log(array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}

