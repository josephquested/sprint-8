eloquent.js

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

function countBs(string) {
  var count = 0;
  for (var i = 0; 1 < string.length - 1; i++) {
    if (string.charAt(i) === "B") {
      count += 1;
    }
  }
  return count;
}

function countChar(string, character) {
  var count = 0;

  for (var i = 0; i < string.length - 1; i++) {
    if (string.charAt(i) === character) {
      count += 1;
    }
  }

  return count;
}
