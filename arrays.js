var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  return [element, ... array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}
destructivelyAddElementToBeginningOfArray(array, 'foo');
function addElementToEndOfArray(array, element){
  return [... array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
function accessElementInArray(array, index){
  console.log(array[index]);
}
destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
