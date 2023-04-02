function getMaxSymbol(array) {
  let max = "";
  for (let i = 0; i < array.length; i++) {
    if (
      typeof array[i] !== "number" &&
      array[i].toLowerCase() > max.toLowerCase()
    ) {
      max = array[i];
    }
  }
  return max;
}

function getMaxAge(value) {
  let max = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] > max) max = value[i];
  }
  return +max;
}

function findMax(value, type) {
  if (value.length === 0) return "нет данных";

  switch (type) {
    case "symbol":
      return getMaxSymbol(value);
    case "age":
      return getMaxAge(value);
    default:
      return "не передали тип";
  }
}

const result = findMax([7, 10, 5, "Hello", 40, 26, 88], "symbol");

console.log(result);
