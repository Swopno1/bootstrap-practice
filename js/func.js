var result;

// Problem One
function leapYear() {
  var today = new Date();
  var nextYear = today.getFullYear() + 1;
  if (nextYear % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

result = leapYear();

// Problem Two
function isEven(number) {
  var check = number % 2;
  switch (check) {
    case 0:
      return true;
      break;
    default:
      return false;
  }
}
result = isEven(2);
console.log(result);
