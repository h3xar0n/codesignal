function isLucky(n) { 
  var luck = false;
  var digits = n.toString().split('').map(Number);
  var middle = digits.length / 2;
  var firstHalf = 0;
  var secondHalf = 0;
  for (var i = 0; i < middle; i++) {
      firstHalf += digits[i];
  }
  for (var i = middle; i < digits.length; i++) {
      secondHalf += digits[i];
  }
  if (firstHalf === secondHalf) luck = true;
  return luck;
}
